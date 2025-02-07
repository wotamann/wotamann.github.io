<style scoped>
  :deep( .form-css) {color:#444; background-color:#d0d5eb}
</style>

<template>
  <h4>Submit Login Form</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <!-- Take attribute 'container' for wrapping formbase with a form -->
  <v-form-base 
    :container="containerOptions"
    :model= "myModel"
    :schema= "mySchema" 
    @submit="submit"
    />
    <!-- @click="logCustomEvent"   -->
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { logCustomEvent } from '@/lib.js'
  
  import { useRouter } from "vue-router"
  const router = useRouter();

  // const submit = ({ model,schema,event }) => {
  const submit = (model,schema,event) => {
    // event.preventDefault();
    
    console.info('SUBMIT DATA',model)
    console.info('SUBMIT SCHEMA',schema)
    console.info('SUBMIT EVENT', event)
    // POST MODEL.DATA to SERVER 
    
    // GOTO NEW ROUTE
    const newRoute = '/basic'
    console.info('ROUTE TO',newRoute)
    router.push(newRoute)
  }

  
  const containerOptions = { is:'form', class:'pa-8 form-css'  }
      
  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  
  const rules= {
    required: v => !!v || 'required',
    min: v => v?.length >= 8 || 'min 8 chars',
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'no email'
  }
  
  const myModel = ref({   
    user:'',
    password:'ABCD1234',
  })
  
  const mySchema = ref({
    user: { 
      el:'text', 
      label:'email', 
      hint:'email only', 
      clearable:true, 
      rules:[ rules.required, rules?.isEmail], 
      autocomplete:'username' 
    },
    password:{ 
      el:'password',
      type:visibleType, 
      hint:'min 8 chars', 
      rules:[ rules.min], 
      autocomplete:'current-password', 
      appendInnerIcon:visibleIcon, 
      onClickAppendInner: () => { visible.value = !visible.value; } // don't return any value
    },      
    submit:{ 
      el:'btn', 
      type:'submit',
      text:'Send', 
      cols:12, 
      block:true, 
    }
  })
 
</script>
