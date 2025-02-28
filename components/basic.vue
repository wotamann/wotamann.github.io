<template>
  <h4>Basic input elements</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base  
    :model= "myModel"
    :schema= "mySchema"             
    @update:customEvent="logCustomEvent"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logCustomEvent, logInline } from '@/lib'
  
  const color='orange-darken-4'
  const cols = { cols:6, offset: 0}
  const options = [{ text:'A', value:1},{text:'B', value:2},{text:'C', value:3}]

  const myModel = ref({})
    
  // IMPORTANT: the order of props in SCHEMA determines the order in which they are displayed
  // EXCEPTION: if config._buildSchemaFromModel=true then the order of props in MODEL determines display order
  const mySchema = ref({
    text: { el:'text-field', label:'text', color, cols, appendInnerIcon:'mdi-menu', onClickAppendInner:logInline },   
    select:{ el:'select', label:'select', items:[1,2,3], color, cols},  
    file: { el:'file', label:'file', color, cols  },   
    date: { el:'dateInput', label:'date', color, cols  },   
    btn:{ el:'btn-toggle',  options, variant:'outlined', baseColor:color, color, multiple:true, cols:3 },  
    checkbox:{ el:'checkbox', label:'checkbox', color, nullValue:true, cols:3 }, 
    radio:{ el:'radio-group',  options, inline:true, baseColor:color,color, cols:3 },  
    switch:{ el:'switch', label:'switch', color, cols:3 },  
    range:{ el:'rangeSlider', label:'range slider', step:5, color, cols:12 },  
  }) 
</script>