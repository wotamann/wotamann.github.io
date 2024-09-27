<template>
    <v-container class="container-box">  
     <h4>Radio Group Example </h4>
    
  
      <!-- FORM-BASE-COMPONENT -->
        <v-form-base 
          :model= "myModel"
          :schema= "mySchema"
          :cols="6"
        />
      <!-- FORM-BASE-COMPONENT -->
      
      
      <!-- Stuff  -->    
      <infoline :model="myModel" :schema="mySchema"/>
    </v-container>
  </template>
  
  <script setup>
    import vFormBase from '@/vFormBase.vue'
    import { ref } from 'vue'
    import Infoline from '@/components/infoline'
        
    // https://vuetifyjs.com/en/api/v-radio/
    const optionsRadio = [
      { trueIcon: 'mdi-printer', value: 'printer', label:'print', baseColor:'orange-darken-3',  }, 
      { trueIcon: 'mdi-wifi', value: 'wifi', label:'wifi', },
      { trueIcon: 'mdi-bell', value: 'bell', label:'bell',},
    ]
    const optionsTextIcon = [
      { iconL: 'mdi-format-align-left', text:'Left',value: 'L', color:'red' }, 
      { iconL:  'mdi-format-align-center', text:'Center', value: 'C', color:'primary' },
      { iconR: 'mdi-format-align-right', text:'Right', value: 'R', color:'success', },
    ]
  
    const myModel = ref({
      radioLine:'wifi',
      //unset props will be auto-added    
      radioL:'L',     
      radioC:'R',     
    })
    
    // https://vuetifyjs.com/en/api/v-radio-group/
    const mySchema = ref({
      radioLine: { el: 'radio', options: optionsRadio, inline:true, label:'Radio-Inline TrueIcons', color:'success' },
      radioL: { el: 'radio', options: optionsTextIcon, inline:true, label:'Radio-Inline Icons' },
      radioCol: { el: 'radio', options: optionsRadio, inline:false, label:'Radio-Column', color:'info' },
      radioC: { el: 'radio', options: optionsTextIcon, inline:false, label:'Radio-Column Icons' },
    })
  
  </script>
  