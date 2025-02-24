<style scoped>
  :deep(.xml) { background-color: #f6f6f6;}
  .bg { background-color: #f6f6f6;margin-bottom: 6px;}
  .pre { font-size: 1rem; line-height:125%; text-align: left; min-height: 2rem; }
  .terminal { color: #b75501; height: 5.6rem; overflow: auto; }
  .pre-terminal { font-size: 1rem; line-height:1.1rem; text-align: left;  }
  .model { color:#0d6dc2; max-height: 400px; overflow-y: auto;}
  .model:focus {  outline: none; background-color: #0d6ec220; }
  .schema { color:#471f0c; border-left: 1px solid #ddd;  max-height: 400px; overflow-y: auto;}
  .schema:focus {  outline: none; background-color: #471f0c20; }
  .code { overflow: auto; }
  .icon-right {float: right; }
</style>

<template>
  <!-- DISPLAY EVENTS IN CONSOLE-LOG   -->
  <v-row class="bg" no-gutters>
    <v-col cols="12" class="pt-2">
      <h5>
        Events (watch console for more...)
        <v-icon class="icon-right" icon="mdi-sort-variant-remove" @click="consoleLog=[]" />
      </h5>
    </v-col>
    <v-col cols="12" class="pa-2">
      <div ref="scrollableDiv" class="terminal" >
        <pre class="pre-terminal" v-for="(cl, index) in consoleLog" :key="index">{{ cl }} </pre>
      </div>
    </v-col>
  </v-row>

  <!-- DISPLAY MODEL/SCHEMA -->
  <v-row class="bg" no-gutters>    
    <v-col cols="6" class="pt-2">
      <h5>
        Model
        <v-icon class="icon-right" icon="mdi-content-copy" @click="copyToClipboard('Model', toJSON(modelValue))" />    
        <v-icon class="icon-right" icon="dummy" />          
        <v-icon class="icon-right" icon="mdi-restart" @click="resetModel" />         
        <v-icon class="icon-right" icon="dummy" />          
        <v-icon class="icon-right" icon="mdi-arrow-up-thin-circle-outline" @click="updateModel" />         
      </h5>      
    </v-col>
    <v-col cols="6" class="pt-2">
      <h5>
        Schema
        <v-icon class="icon-right" icon="mdi-content-copy" @click="copyToClipboard('Schema', toJSON(schemaValue))" />
        <v-icon class="icon-right" icon="dummy" />          
        <v-icon class="icon-right" icon="mdi-restart" @click="resetSchema" />         
        <v-icon class="icon-right" icon="dummy" />          
        <v-icon class="icon-right" icon="mdi-arrow-up-thin-circle-outline" @click="updateSchema" />         
      </h5>
    </v-col> 
    <v-col cols="6" class="pb-2">
      <pre ref="pre-model" :contenteditable="editable" class="pre model" v-text="toJSON(modelValue)" />
    </v-col>
    <v-col cols="6" class="pb-2" >
      <pre ref="pre-schema" :contenteditable="editable" class="pre schema" v-text="toJSON(schemaValue)" />
    </v-col>    
  </v-row>
  
  <!-- DISPLAY VUE CODE -->
  <v-row class="bg" no-gutters>
    <v-col cols="12" class="pt-2">
      <h5 >
        Code of '{{path}}'
        <v-icon class="icon-right" icon="mdi-content-copy" @click="copyToClipboard('Code', codingText)" />          
      </h5>
      <highlightjs 
        class="pre code"
        language="vue"
        :code="codingText"        
      >
      </highlightjs>
    </v-col>
  </v-row>
  <v-snackbar v-model="snackbar" :timeout="snackbarTimeout" :color="snackbarColor">
      {{ snackbarText }}
  </v-snackbar>
</template>

<script setup>
  import { isFunction } from 'lodash';
  import { inject, provide, ref, unref, reactive, toRefs, nextTick, watch, watchEffect, computed, onMounted, useTemplateRef } from 'vue'
  import { useRoute } from 'vue-router';
  // CONST
  const modelValue = defineModel('modelValue')
  const schemaValue = defineModel('schemaValue')
   
  const preModel = useTemplateRef('pre-model')
  const preSchema = useTemplateRef('pre-schema')
  
  const resetModelValue = unref(modelValue.value)
  const resetSchemaValue = unref(schemaValue.value)

  const route = useRoute()
  const props = defineProps({editable:{type:Boolean, default: true }})
  const { editable } = toRefs(props)
  
  // const url = 'https://github.com/wotamann/vuetify-form-base/blob/master/example/src/components'
  // READ FILES FROM ./PUBLIC/COMPONNENTS
  const url = './components'
  const functionPlaceholder = '[Function]' 
  const fileObjectToString = (val) => `${val.name} - (File Object)` 
  const fileName = ref(`${route.path?.slice(1)}.vue`)
  const path = `${url}/${fileName.value}`
  const consoleLog =ref([])
  const logMaxEventLines = 128
  const scrollableDiv = ref(null);
  const codingText =ref('')

  // SNACKBAR
  const snackbar =ref(false)
  const snackbarColor = ref('info')
  const snackbarText = ref('')
  let snackbarTimeout = 1500
  let snackbarErrorTimeOut = 10000

  const toJSON = (obj) => JSON.stringify(obj, replacer, 2)

  const replacer = (key, value) => {
    if (typeof value === 'function') {
      return functionPlaceholder 
    }  
    if (Array.isArray(value) && value[0] instanceof File) {
      return value.map(i => fileObjectToString(i) )
    }
    if (value instanceof File) {
      return fileObjectToString(value)
    }
    return value
  }
  const deepIterate = (obj, objS) =>{
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const valueS = objS[key]

        // console.warn(key, obj)        
        //   console.log(key, objS)        
         
        if (typeof value === 'object' && value !== null) {
          deepIterate(value, valueS);
        } else {

          if (!isFunction(objS[key]) && !(objS[key] instanceof File) ) {
            try {
              // try to 'update' props of model/schema
              objS[key] = obj[key];               
            } catch (error) {
              if (error instanceof TypeError && error.message.includes(`'set' on proxy: trap `)) {
                console.warn(`'${key}'='${objS[key]}' add 'SETTER' to computed to avoid TypeError:`, error.message);       
              } else {
                throw error   
              } 
            }
          }
        }
      }
    }
  }

  const resetModel = () => {
    preModel.value.innerText = toJSON(resetModelValue)
  }
  const updateModel = () => {
    try {
      const model= JSON.parse(preModel.value.innerText)    
      
      deepIterate(model, modelValue.value )

      snackbarText.value = `Model updated`
      snackbarColor.value = 'info' 
    } catch (error) {
      const tmp = snackbarTimeout
      snackbarTimeout = snackbarErrorTimeOut
      setTimeout(()=> snackbarTimeout = tmp, snackbarErrorTimeOut)      
      snackbarColor.value = 'error'
      snackbarText.value = `MODEL MUST BE VALID JSON - '${error.toString()}'`
      console.error('MODEL UPDATE:', error.toString());
    } finally {
      snackbar.value = true    
    }    
  }  

  const resetSchema = () => {
    preSchema.value.innerText = toJSON(resetSchemaValue)
  }
  const updateSchema = () => {
    try {
      const schema= JSON.parse(preSchema.value.innerText)          
      deepIterate(schema, schemaValue.value )

      snackbarText.value = `Schema updated`
      snackbarColor.value = 'info' 
    } catch (error) {
      const tmp = snackbarTimeout
      snackbarTimeout = snackbarErrorTimeOut
      setTimeout(()=> snackbarTimeout = tmp, snackbarErrorTimeOut)      
      snackbarColor.value = 'error'
      snackbarText.value = `SCHEMA MUST BE VALID JSON - '${error.toString()}'`
      console.error('SCHEMA UPDATE:',error.toString());
    } finally {
      snackbar.value = true    
    }    

  }  
    
  const copyToClipboard = async (msg, text) =>{
    try {
      await navigator.clipboard.writeText(text)    
      snackbarText.value = `${msg} copied to clipboard`
      snackbarColor.value = 'info'
      console.log(snackbarText.value);    
    } catch (err) {
      snackbarColor.value = 'error'
      snackbarText.value = err.toString()
      console.error(err);
    } finally {
      snackbar.value = true    
    }
  }

  
  const scrollToBottom = async () => {
    if (scrollableDiv.value) {
      await nextTick()
      scrollableDiv.value.scrollTop = scrollableDiv.value.scrollHeight ;
    }
  }

  // BUFFER CONSOLE.INFO
  const oldConsoleInfo = console.info;

  // REDEFINE CONSOLE.INFO
  console.info = function(){  // don't use = ()=>{ ... } it doesn't work!!!
    // Keep default console behavior 
    oldConsoleInfo.apply(console, arguments); 

    consoleLog.value.push(arguments[0])
    if (consoleLog.value.length > logMaxEventLines) consoleLog.value.shift();
    scrollToBottom()
  };

  onMounted( async ()=> { 
    // READ CODE.VUE FILE
    const response = await fetch(path)
    codingText.value= await response.text()      
  })
</script>