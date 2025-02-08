<template>
  <h4>Async loading of Schema, Model and at last Grid-Layout</h4>

  <!-- FORM-BASE-COMPONENT -->    
  <v-form-base v-if="flush"
    :model= "myModel"
    :schema= "mySchema"
    :config= "myConfig"
    :cols= "myCols"
    @input="log"
  />

  <p class="title">{{msg}}</p>      
  <v-btn @click="changeCols">COLS</v-btn>
  <v-btn @click="changeModel">Model</v-btn>
  <v-btn @click="changeSchema">Schema</v-btn>
  <v-btn @click="changeConfig">Config</v-btn>
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
// import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log } from '@/lib'
import { ref, onMounted, defineAsyncComponent, nextTick  } from 'vue'

let VFormBase = null
const msg = ref('')
const flush = ref(false)
const myCols = ref(12)
const myModel=ref({})
const mySchema = ref({})
const myConfig = ref({
  _noShorthand: false, 
  _noMapping:false, 
  _noAutoSchema:false, 
  _noAutoModel:false, 
  _noNullValue:false,  //  
  _useOrder:false 
})

const changeSchema = () => {
  mySchema.value = {
    checkbox:{ el:'checkbox', color:'amber' },      
    checkbox1:{ el:'checkbox', color:'blue' },      
    checkbox2:{ el:'checkbox', color:'red' },      
    checkbox3:{ el:'checkbox', color:'green', _order:0 },      
    name: { el:'text' }, 
    name1: { el:'text' }, 
  };
  doUpdate()
}

const changeModel = () => {
  myModel.value = {
    name: 'text changed',
    name1: 'text changed',
    checkbox: true,      
    checkbox1:true,      
    checkbox2:true,      
    checkbox3:true,      
  };
  doUpdate()
}

const changeCols = () => myCols.value = 3


const changeConfig = () => {
  myConfig.value = { ...myConfig.value, _useOrder:true } 
  doUpdate()
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
  myModel.value = await delay( ({ name: 'Base', checkbox: true }) )
  doUpdate()

  // # STEP 4) Async loading of grid
  msg.value ="Loading Grid..."
  myCols.value = await delay({ cols:6 })
    
  // # STEP 5) Autogenerate schema and build component 
  doUpdate()
  msg.value =""
})

const doUpdate = () => {
  flush.value=false
  nextTick(() => flush.value=true)
}

const delay = (obj) => new Promise((resolve, reject) => setTimeout(() => resolve(obj), 999))

</script>
