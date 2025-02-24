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
  const cols = { cols:12, offset: 0}
  
  const myModel = ref({})
    
  // IMPORTANT: props order in schema determines display order!
  const mySchema = ref({
    text: { el:'text-field', label:'text', color, cols, appendInnerIcon:'mdi-menu', onClickAppendInner:logInline },   
    select:{ el:'select', label:'select', items:[1,2,3], color, cols},  
    checkbox:{ el:'checkbox', label:'checkbox', color, nullValue:true, cols:4 }, 
    switch:{ el:'switch', label:'switch', color, cols:4 },  
    radio:{ el:'radio-group',  options: [{ text:'A', value:1},{text:'B', value:2},{text:'C', value:3}], inline:true, color, cols:4 },  
    range:{ el:'rangeSlider', label:'range slider', step:5, color, cols },  
  })
  

  
</script>