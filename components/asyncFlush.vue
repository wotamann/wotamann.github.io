<template>
  <h4>Async loading by flushing Component</h4>

  <!-- FORM-BASE-COMPONENT -->    
  <v-form-base v-if="flush"
    :model= "myModel"
    :schema= "mySchema"
    :config= "myConfig"
    :cols= "myCols"
    @input="log"
  />

  <v-btn @click="changeSchema">Schema</v-btn>
  <v-btn @click="changeModel">Model</v-btn>
  <v-btn @click="changeCols">Cols</v-btn>
  <v-btn @click="changeConfig">Config</v-btn>
  <h4 class="title">{{msg}}</h4>      
  
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

const myModel=ref({})
const mySchema = ref({})
const myCols = ref(12)
const myConfig = ref({_useOrder:false })

const changeSchema = () => {
  mySchema.value = {
    checkbox:{ el:'checkbox', color:'amber', _order:2000 },      
    checkbox1:{ el:'checkbox', color:'blue' },      
    checkbox2:{ el:'checkbox', color:'red' },      
    checkbox3:{ el:'checkbox', color:'green', _order:0 },      
  };
  flushUpdate()
}

const changeModel = () => {
  myModel.value = {
    checkbox: true,      
    checkbox1:false,      
    checkbox2:true,      
    checkbox3:false,      
  };
  flushUpdate()
}

const changeCols = () => myCols.value = 3

const changeConfig = () => {

  myModel.value.checkbox1=true,      
  myModel.value.checkbox3=true,      
  // ACTIVATE ORDER  
  myConfig.value._useOrder = true
  flushUpdate()
}

onMounted( async () => {
  // # STEP 1) Lazy loading of 'vformbase.vue' component here
  await delay(VFormBase = defineAsyncComponent(() => import('@/vFormBase.vue')) )
  
  // # STEP 2) Async loading of empty(!) schema
  msg.value ="Loading Schema..."
  mySchema.value = await delay(({
    checkbox:{ el:'checkbox' }      
  })),
  flushUpdate()
  
  // # STEP 3) Async loading of model
  msg.value ="Loading Model..."
  myModel.value = await delay( ({ checkbox: true }) )
  flushUpdate()

  // # STEP 4) Async loading of grid
  msg.value ="Loading Grid..."
  myCols.value = await delay({ cols:4, offset:2 })
    
  // # STEP 5) Autogenerate schema and build component 
  flushUpdate()
  msg.value =""
})

const flushUpdate = () => {
  flush.value=false
  nextTick(() => flush.value=true)
}

const delay = (obj) => new Promise((resolve, reject) => setTimeout(() => resolve(obj), 1000))

</script>
