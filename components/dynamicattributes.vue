<template>
  <v-container class="container-box">  
   <h4>Playground</h4>
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="dynamic-demo"
      :model="myModel[modelIndex]"
      :schema="mySchema[schemaIndex]"          
      :cols="cols"
      @update:modelValue="log"
      @click="log"
    />
      <!-- :model= "myModel"
      :schema= "mySchema" -->
    <br/>
    {{ myModel[modelIndex] }}
    {{ mySchemaIndex }}
    <br/>
    {{ myModelIndex }}
    <br/>
    <v-btn class="mx-2" @click="modelIndex--; modelIndex = Math.max(modelIndex, 0)">-</v-btn> 
      Model-{{modelIndex}}       
      <v-btn class="mx-2" @click="modelIndex++; modelIndex = Math.min(modelIndex, 3)">+</v-btn>  
      <v-btn class="mx-2" @click="schemaIndex--; schemaIndex = Math.max(schemaIndex, 0)">-</v-btn> 
      Schema-{{schemaIndex}}       
      <v-btn class="mx-2" @click="schemaIndex++; schemaIndex = Math.min(schemaIndex, 3)">+</v-btn>  
      <v-btn @click="cols--; cols = Math.max(cols, 0)">-</v-btn> 
      Grid-{{cols}}/12       
      <v-btn class="mx-2" @click="cols++; cols = Math.min(cols, 12)">+</v-btn>  

    <v-btn :color="colorArr" @click="changeModel">EXTERNAL CHANGE Model-TEXT & SCHEMA-COLOR {{ ix }}</v-btn>
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <!-- <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/> -->
    <infoline :model="myModelIndex" :schema="mySchemaIndex"/>
 
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, computed, inject } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib.js'
  
  const cols= ref(3)
  const modelIndex = ref(0)
  const schemaIndex = ref(0)
  
  const ix = ref(0)
  const h = ref(true)
  const hidden =computed(()=> h )
  
  const items = [1,2,3,4]
  const itemsDeep = computed( ()=> myModel.value.selectBase )
  const itemsDeepHide = computed( ()=> itemsDeep.value.length === 0 )
  const rules= {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: (a,b) => {
      console.log('rules.email-----------',a,b);
      return (`The email and password you entered don't match`)
    }
  }
  const drop = ( { value:{drag, drop} }) =>  `${drop?.toUpperCase()} + ${drag?.toUpperCase()}`


  const changeModel = () => { ix.value ++; ix.value = ix.value % 5 }
  const textArr = computed( () => ['AA','BB','CC','DD','EE'][ix.value] )
  const colorArr = computed( () => ['red','#CC3','#A8f','purple','yellow'][ix.value] )

  const myModelIndex = computed({
  get: () => myModel[modelIndex.value],
  set: (value) => myModel[modelIndex.value] = value
  })
  const mySchemaIndex = computed({
  get: () => mySchema[schemaIndex.value],
  set: (value) => mySchema[schemaIndex.value] = value
  })
  
  const myModel = reactive([
        ref({
          name: 'A',
          password: 'abcdefgh',
          check: true
        }),     
        ref({
          name: 'B',
          password: '1234',
          check: false
        }),     
        ref({
          name: 'C',
          file: null,
          switch: false
        })
      ])

  const mySchema =reactive([
    ref({
          name: 'text',
          check: { el: 'switch', label:'Switch1' },
          password: { el: 'password', label:'password'}
        }),
        ref({
          check: { el: 'checkbox' },
          switch:{el:'switch', label:'Switch2'},      
          name: 'text',
          file: { el:'file', label:'Single'},
        }),
        ref({
          check: { el: 'checkbox' },
          switch:{el:'switch', label:'Switch2'},      
          file: { el:'file', label:'Multi', multiple:true},
        })
      ])
    
   
    // text1: {el:'text',color:colorArr, hint:'Click in Textfield',  label:textArr},  
    // text2: {el:'text',color:colorArr, hint:'Click in Textfield',  label:textArr},  
    // text3: {el:'text',color:colorArr, hint:'Click in Textfield',  label:textArr},  
    // text4: {el:'text',color:colorArr, hint:'Click in Textfield',  label:textArr},  
    // text: {el:'text',color:colorArr, hint:'this is a custom text-field', cols:12, label:'Custom Component'},  
    // check1:{ el:'checkbox', color:'red', },
    // icon2:{ el:'icon', size:120,color:'green-darken-2', icon:'mdi-domain', drop },
    // icon:{ el:'icon', color:'red', size:120, end:true, icon:'mdi-vuetify', draggable:true, order:-1 },
    // check2:{ el:'checkboxbtn', color:'green', },
    
    // radiogroup:{ el:'radio',inline:true, cols:{ cols:'12', lg:'4', md:'6', offsetSm:'2', sm:'8'}, label:'GROUP RESP', options:[{label:'test',color:'indigo', value:'A'}, { value:'B'}, { value:'C'}] },
    // radiogroup1:{ el:'radio',inline:false, label:'GROUP', options:[{label:'test',color:'indigo', value:'A'}, { value:'B'}, { value:'C'}] },
    // buttongroup:{ el:'btntoggle', color:'blue' ,dark:true, multiple:true, options:[{ value:'A'}, { value:'B'}, { value:'C'}] },
    // buttongroup:{ el:'btntoggle', color:'blue' ,dark:true, multiple:true, options:[{ value:'A'}, { value:'B'}, { value:'C'}] },
    
    // responsive1:{ ...sheet('red'), cols:{ cols:'12', offsetSm:'4', sm:8 }, },    
    // selectBase:{ el:'select', multiple:true, label:'Base', items },
    // selectDeep:{ el:'select', multiple:true, label:'Dependend', items:itemsDeep, noDataText:'Select one or more...' },
    // selectDeep:{ el:'select', multiple:true, label:'Dependend', items:itemsDeep, hidden:itemsDeepHide },
  // })

</script>

<style>  
</style>