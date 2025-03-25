<template>
  <h4>Group and style 'radio' elements </h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :model= "myModel"
    :schema= "mySchema"
    :cols="6"
    @update="log"
  >    
    <template #slot-inject-label-key-formbase-radioLine="{obj, index, id}">
      <div>Value: <strong style="color:#e04">{{obj.value}}</strong></div>
    </template>
    <template #slot-inject-label-key-formbase-radioColumn="{obj, index, id}">
      <div>Value: <strong style="color:#04e">{{obj.value}}</strong></div>
    </template>
  </v-form-base>    
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template> 

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib.js'
  
  const optionsTextIcon = [
    { icon: 'mdi-format-align-left', text:'Left',value: 'L' }, 
    { icon:  'mdi-format-align-center', text:'Center', value: 'C'  },
    { icon: { icon:'mdi-format-align-right', size:32, color:'green' }, label:'Right', value: 'R', baseColor:'red', color:'blue' },
  ]

  const optionsRadio = [
    { icon: { icon:'mdi-wifi'}, value: 'wifi'  }, 
    { icon: {icon:'mdi-bluetooth' }, value: 'bluetooth' },
    { icon: {icon:'mdi-printer', color:'green', size:32, end:true }, value: 'printer', trueIcon: 'mdi-check',  baseColor:'red', color:'blue', },
  ]

  const myModel = ref({
    radioLine:'wifi',
    radioL:'L',     
    // unset props will be auto-added on use    
    // radioColumn:'bluetooth',
    // radioC:'R',     
  })
  
  const mySchema = ref({
    radioLine: { el: 'radioGroup', options: optionsRadio, inline:true, label:'Inline Value Icons' },
    radioL: { el: 'radioGroup', options: optionsTextIcon, inline:true, label:'Inline Label Icons' },
    radioColumn: { el: 'radioGroup', options: optionsRadio, inline:false, label:'Column Value Icons', color:'grey' },
    radioC: { el: 'radioGroup', options: optionsTextIcon, inline:false, label:'Column Label Icons', color:'grey' },
  })

</script>
