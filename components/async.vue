<template>
  <h4>Async loading Component</h4>

  <!-- FORM-BASE-COMPONENT -->    
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"
    :cols= "myCols"
    :config= "myConfig"
    />
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
// import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { ref, defineAsyncComponent  } from 'vue'

const myModel=ref({
  text:'sync load',
  checkAsync:true
})
const mySchema = ref({ 
  text: { el:'text', _order:2000 }, 
  check: { el:'checkbox',color:'green', label:'sync load' }, 
})
const myCols = ref({})
const myConfig = ref({})

// ASYNC COMPONENT
const VFormBase = defineAsyncComponent( async () => {
  
  myModel.value =  mergePropsKeepReference(myModel.value, await delay( ({ textAsync: 'async load' }), 333 ) )
  
  myCols.value = await delay( {cols:4, offset:1}, 333)
  
  myConfig.value = await delay({ _useOrder:true }, 333) 
  
  mySchema.value = mergePropsKeepReference(mySchema.value, await delay( { 
    textAsync: { el:'text', _order:2100 }, 
    checkAsync: { el:'checkbox',color:'green', label:'async load' }, 
  }, 333))
  
  return await delay(import('@/vFormBase.vue'),333)
})  


const delay = (obj, ms=333) => new Promise((resolve, reject) => setTimeout(() => resolve(obj), ms))
const mergePropsKeepReference = (originalProps, additionalProps) => {
  for (const key in additionalProps) {
    if (additionalProps.hasOwnProperty(key)) originalProps[key] = additionalProps[key]; // Directly modify originalProps
  }
  return originalProps
}
</script>
