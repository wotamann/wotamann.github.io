<template>
    <v-container class="container-box">  
     <h4>Button Group/Toggle Example </h4>
    
  
      <!-- FORM-BASE-COMPONENT -->
        <v-form-base 
          :model= "myModel"
          :schema= "mySchema"
          :cols="{ sm:12, md:6, lg:4}"
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
    
    
    const optionsIcon = [
      { icon: 'mdi-wifi', value: 'wifi', size:'x-large', }, 
      { icon: 'mdi-printer', value: 'print', size:'x-large', color:'green' },
      { icon: 'mdi-alert', value: 'bell', size:'x-large' },
    ]

    const optionsText = [
      { value: 'blue', color:'blue', text:'blue',  }, 
      { value: 'green', color:'green', html:`<b><u>green</u></b>` },  // WARNING: html don't use with user input
      { value: 'red', color:'red', label:'red'},
    ]

    const optionsTextIcon = [
      { iconL: 'mdi-format-align-left', text:'Left',value: 'L' }, 
      { iconL:  'mdi-format-align-center', text:'Center', value: 'C' },
      { iconR: 'mdi-format-align-right', text:'Right', value: 'R' },
    ]
  
    const myModel = ref({
      btnGroupText: 'red',  // if no value defined - lowercase of text:'Left' will be used as value
      //btnGroupTextIcon - props will be auto-added       
      btnGroupMultiple:['print']
    })
    
    // control Display Order by Order in Schema
    const mySchema = ref({
          btnGroupText: { el: 'btn-group', options: optionsText, divided:true, mandatory:true, baseColor:'grey-lighten-3'  },
          btnGroupTextIcon: { el: 'btn-group', options: optionsTextIcon },
          btnGroupMultiple: { el: 'btn-group', options: optionsIcon, multiple:true, variant:'outlined', baseColor:'primary', color:'success' },
    })
  
  </script>
