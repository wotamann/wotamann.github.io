<style scoped>
  :deep(.tooltip-background-red) { background-color: #e01c3d;color:#fff;} 
  :deep(.tooltip-background-green) { background-color: #24990a;color:#fff;} 
  :deep(.tooltip-background-blue) { background-color: #4164f1;color:#fff;} 
  :deep(div.v-overlay div.large) { font-size: 1.2rem; padding: 12px;}
</style>

<template>  
  <h4>Examples for component/schema tooltips</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :model= "myModel"
    :schema= "mySchema"     
    :tooltip="tooltipComponent"
    />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  
  const tooltipComponent ={ text:'@content', contentClass:'tooltip-background-blue' }
  const tooltip ={ text:'@value', contentClass:'tooltip-background-green', location:'bottom',  }
  const tooltipRed = { contentClass:'large tooltip-background-red', location:'top', scrim:'red', closeOnContentClick:true, closeDelay:1000 } 
  
  const myModel = ref({ 
    value:'my text value',
    custom:'custom tooltip',
  })

  const mySchema = ref({
    attribute: { el:'text', label:'tooltip from formbase attribute' }, // tooltip from attribute
    key: { el:'text', label:'key-tooltip', tooltip:'@key'}, // schema tooltip shadows tooltip from attribute
    value: { el:'text', label:'value-tooltip', tooltip:'@value'}, // displays model.value
    label: { el:'text', label:'label-tooltip', tooltip:'@label'},  // displays label
    hint: { el:'text', label:'hint-tooltip', hint:'text from hint', tooltip:'@hint'}, // displays hint
    button: { el:'btn', text:'button text', tooltip:'@content' },  // '@content' -> takes text, label or key
    custom: { el:'text', label:'start', tooltip },
    customText: { el:'text', text:'top custom red tooltip', tooltip:tooltipRed},
  })
 
</script>
