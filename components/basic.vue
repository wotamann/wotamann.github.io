<template>
  <h4>Input elements</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base  
    :model= "myModel"
    :schema= "mySchema"   
    @update:modelValue="logModel"
  />
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref, computed } from 'vue'
  import { logCustomEvent, logModel, logInline } from '@/lib'
  
  const bgColor='orange-lighten-5'
  const baseColor='orange-darken-4'
  const color='orange-darken-4'
  const cols = { cols:6, offset: 0}
  const options = [{ icon:'mdi-check', text:'A', value:1},{text:'B', value:2},{text:'C', value:3}]


  const myModel = ref({ text:'my text',checkbox:true, btn:[2],radio:1, slider:30})
    
  // IMPORTANT: the order of props in SCHEMA determines the order in which they are displayed
  // EXCEPTION: if config._forceSchemaFromModel=true then the order of props in MODEL determines display order
  const mySchema = ref({
    text: { el:'text-field', label:'text', color, cols, clearable:true,appendInnerIcon:'mdi-menu', onClickAppendInner:logInline },   
    select:{ el:'select', label:'select', hint:'single select', items:[1,2,3], bgColor, color, cols},  
    file: { el:'file', label:'file', color, cols  },   
    date: { el:'dateInput', label:'date', color, cols },   
    btn:{ el:'btn-toggle',  options, variant:'outlined', baseColor, color, multiple:true, cols:3 },  
    radio:{ el:'radio-group',  options, inline:true, baseColor,color, cols:3 },  
    checkbox:{ el:'checkbox', label:'checkbox', color, nullValue:true, cols:3 }, 
    switch:{ el:'switch', label:'switch', baseColor, color, cols:3 },  
    slider:{ el:'slider', label:'slider', step:5, color, cols },  
    range:{ el:'rangeSlider', label:'range slider', step:5, color, cols },  
  }) 
</script>