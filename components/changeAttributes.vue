<template>
  <h4>Async loading of Schema, Model and at last Grid-Layout</h4>


    <!-- FORM-BASE-COMPONENT -->    
    <v-form-base v-if="flush"
    :model= "myModel"
    :schema= "mySchema"
    :config= "myConfig"
    :cols= "cols"
    @input="log"
    />


    <br>
    <p class="title">{{msg}}</p>      
    <br>
    {{ mySchema }} 
    <br>
    {{ myModel }} 
    <br>
    <v-btn @click="changeCols">COLS</v-btn>
    <v-btn @click="changeModel">Model</v-btn>
    <v-btn @click="newSchema">New Schema</v-btn>
    <v-btn @click="changeSchema">Schema</v-btn>
    <v-btn @click="changeConfig">Config</v-btn>
    <br>

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </template>

<script setup>
// import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log } from '@/lib'
import { ref, onMounted, defineAsyncComponent  } from 'vue'

const changeSchema = () => {
  mySchema.value = {
    checkbox:{ el:'checkbox', color:'amber' },      
    checkbox1:{ el:'checkbox', color:'blue' },      
    checkbox2:{ el:'checkbox', color:'red' },      
    checkbox3:{ el:'checkbox', color:'green', _order:0 },      
    name: { el:'textField' }, 
    name1: { el:'textField' }, 
  };
  doFlush()
}

const newSchema = () => {
  mySchema = ref({ ...mySchema.value, 
    checkbox1:{ el:'checkbox', color:'blue' },      
    checkbox2:{ el:'checkbox', color:'red' },      
    checkbox3:{ el:'checkbox', color:'green', _order:0 },      
    name1: { el:'textField' }, 
  });
  doFlush()
}

const changeModel = () => {
  myModel.value = {
  name: 'changed text',
  name1: 'changed text',
  checkbox: true,      
  checkbox1:true,      
  checkbox2:true,      
  checkbox3:true,      
};
doFlush()
}

const msg = ref('')
const flush = ref(false)

let VFormBase = null

const myModel=ref({})
let mySchema = ref({})

const cols = ref(6)
const changeCols = () => cols.value = (cols.value + 1) > 7 ? 2 : cols.value + 1 

const myConfig = ref({
  _noShorthand: false, 
  _noMapping:false, 
  _noAutoSchema:false, 
  _noAutoModel:false, 
  _noNullValue:false,  //  
  _useOrder:false 
})

const changeConfig = () => {
  myConfig.value = { ...myConfig.value, _useOrder:true } 
  doFlush()
}

onMounted( async () => {
  // # STEP 1) Lazy loading of 'vformbase.vue' component here
  await delay(VFormBase = defineAsyncComponent(() => import('@/vFormBase.vue')) )

  // # STEP 2) Async loading of empty(!) schema
  msg.value ="Loading Schema..."
  mySchema.value = await delay(({
    // // _noAutoSchema:false -> CREATE SCHEMA 
    // name: { el:'textField' },
    // checkbox:{ el:'checkbox',_order:1 }      
  })),
  
  // # STEP 3) Async loading of model
  msg.value ="Loading Model..."
  myModel.value = await delay(({
    name: 'Base',
    checkbox: true,      
  }) )
  
  // # STEP 4) Async loading of grid
  msg.value ="Loading Grid..."
  cols.value = await delay(6)
    
  // # STEP 5) Autogenerate schema and build component 
  doFlush()
  msg.value =""
})



const doFlush = () =>{
  flush.value=false
  setTimeout(() => flush.value=true, 0)
}

const delay = (obj) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(obj), 1000)
  })
}

</script>
