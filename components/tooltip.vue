<style scoped>
  :deep(.tooltip-background-red) { background-color: #e01c3d;color:#fff;} 
  :deep(.tooltip-background-green) { background-color: #24990a;color:#fff;} 
  :deep(.tooltip-background-blue) { background-color: #4164f1;color:#fff;} 
  :deep(div.v-overlay div.large) { font-size: 1.2rem; padding: 16px;}
</style>

<template>  
  <h4>Examples for tooltips</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :model= "myModel"
    :schema= "mySchema" 
    :tooltip="{ contentClass:'tooltip-background-blue', text:'@content'}"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  const myModel = ref({
    textvalue:'my text content',
  })

  const mySchema = ref({
    attribute: { el:'text', label:'tooltip from attribute' },  // tooltip from attribute
    default: { el:'text', label:'label-default', tooltip:true}, // schema tooltip shadows tooltip from attribute
    textvalue: { el:'text', label:'textvalue', tooltip:'@value'},
    label: { el:'text', label:'label-tooltip', tooltip:'@label'},
    hint: { el:'text', label:'label-hint', hint:'hint-tooltip',  tooltip:'@hint'},
    button: { el:'btn', text:'button text', tooltip:'@text' },  // tooltip:'info' -> takes text or label
    custombottom: { el:'text', label:'bottom',  tooltip:{ contentClass:'large tooltip-background-green',location:'bottom', text:'custom green bottom tooltip'} },
    customstart: { el:'text', label:'start',  tooltip:{ contentClass:'tooltip-background-red',location:'start', text:'custom red start tooltip'} },
  })
 
</script>
