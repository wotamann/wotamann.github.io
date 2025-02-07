<template>
    <h4>Toggle buttons example  </h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
      :cols="{ sm:12, md:6, lg:4}"
      @update:customEvent="logCustomEvent"
    />
    
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>
  
<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { logCustomEvent } from '@/lib.js'
  
  const optionsText = [
    { value: 'blue', color:'blue', text:'blue',  }, 
    { value: 'green', color:'green', html:`<b style="color:#080">green</b>` },  // WARNING: never use HTML with user input
    { value: 'red', color:'red', label:'red'},
  ]

  const optionsIcon = [
    { icon: 'mdi-wifi', value: 'wifi', size:'x-large', }, 
    { icon: 'mdi-printer', value: 'print', size:'x-large', color:'purple' },
    { icon: 'mdi-bluetooth', value: 'bluetooth', size:'x-large',color:'blue'  },
  ]

  const optionsTextIcon = [
    { iconL: 'mdi-format-align-left', text:'Left',value: 'L' }, 
    { iconL:  'mdi-format-align-center', text:'Center', value: 'C' },
    { iconR: 'mdi-format-align-right', text:'Right', value: 'R' },
  ]

  const myModel = ref({
    btnToggleText: 'blue',  // if no value defined - lowercase of text:'Left' will be used as value
    btnToggleMultiple:['bluetooth'],
    btnToggleTextIcon:'L',       
  })
  
  // control Display Order by Order in Schema
  const mySchema = ref({
    btnToggleText: { el: 'btnToggle', options: optionsText, divided:true, mandatory:true  },
    btnToggleMultiple: { el: 'btnToggle', options: optionsIcon, multiple:true, variant:'outlined', baseColor:'primary', color:'success' },
    btnToggleTextIcon: { el: 'btnToggle', options: optionsTextIcon },
  })

</script>
