<template>
    <v-container class="container-box-new">  
     <h4>Radio Group Example </h4>
    
      <!-- FORM-BASE-COMPONENT -->
        <v-form-base 
          :model= "myModel"
          :schema= "mySchema"
          :cols="6"
          @update="log"
        />
      <!-- FORM-BASE-COMPONENT -->
      
      <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
      <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
    </v-container>
  </template>
  
  <script setup>
    import vFormBase from '@/vFormBase.vue'
    import { ref } from 'vue'
    import Infoline from '@/components/infoline.vue'
    import { log } from '@/lib.js'
    
    // https://vuetifyjs.com/en/api/v-radio/
    const optionsRadio = [
      { trueIcon: 'mdi-printer', value: 'printer', label:'print'}, 
      { trueIcon: 'mdi-wifi', value: 'wifi', label:'wifi', },
      { trueIcon: 'mdi-bluetooth', value: 'bluetooth', label:'bluetooth', color:'blue'},
    ]
    const optionsTextIcon = [
      { iconL: 'mdi-format-align-left', text:'Left',value: 'L', color:'red' }, 
      { iconL:  'mdi-format-align-center', text:'Center', value: 'C', color:'primary' },
      { iconR: 'mdi-format-align-right', text:'Right', value: 'R', color:'success', },
    ]
  
    const myModel = ref({
      radioLine:'wifi',
      // unset props will be auto-added    
      // radioCol:'bluetooth',
      radioL:'L',     
      radioC:'R',     
    })
    
    // https://vuetifyjs.com/en/api/v-radio-group/
    const mySchema = ref({
      radioLine: { el: 'radioGroup', options: optionsRadio, inline:true, label:'Radio-Inline TrueIcons', color:'success' },
      radioL: { el: 'radioGroup', options: optionsTextIcon, inline:true, label:'Radio-Inline Icons' },
      radioCol: { el: 'radioGroup', options: optionsRadio, inline:false, label:'Radio-Column', color:'grey' },
      radioC: { el: 'radioGroup', options: optionsTextIcon, inline:false, label:'Radio-Column Icons' },
    })
  
  </script>
  