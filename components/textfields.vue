<template>
  <h4>Textfields 'type' for native HTML-Input Type</h4>
  
  <!-- 
    1) Most controls are based on vuetify and therefore 
      the properties of these controls can be used 
      
      schema:{ el:'text',hint:'ABC', persistentHint:true, ... } 
      
      maps to 
      
      <v-text-fields hint="ABC" persistent-hint > 
      see more -> https://vuetifyjs.com/en/components/text-fields/
    
    2)  Use Native HTML Input Type with Prop 'ext'
      Prop 'type' in schema:{ el:'text', type:'color', ...} makes native HTML-INPUT Type available 
  
    3) Use <v-form-base> attribute 'col' for global GRID-Setting: 
      string   :cols:"6"  
      object   :cols="{ cols:12, sm:6, md:4 }" 

  -->
  
  <!-- FORM-BASE-COMPONENT -->   
  <v-form-base 
    :model="myModel"
    :schema="mySchema"
    :cols="{ lg:4, sm:12, md:6 }"
    @input="log"
    @click="log"
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import VFormBase from '@/v-form-base.es.js'
  import Infoline from '@/components/infoline'
  import { log } from '@/lib'
  import { ref } from 'vue'

  const myModel = ref({
    password: 'abcdefgh',
    count:100,
    range:50,
    color:'#6666FF',
    time:'01:15',
    date:'2020-02-25'
  })

  
  const mySchema = ref({ 
    password: { 
      el: 'text', 
      type:'password', // ext: set HTML <input> type Attribute - https://www.w3schools.com/tags/att_input_type.asp 
      label: 'Password', 
      clearable: true 
    },      
    count:{ 
      el:'text',
      type:'number',    // == el:'number'
      label:'Number', 
      tooltip: 'Counter'
    },        
    range:{ 
      el:'text', 
      type:'range', 
      label: 'Range:' + myModel.value.range,    // this works only with computed schema 
    },        
    color:{ 
      el:'text', 
      type:'color',
      color: myModel.color,     // computed schema updates with changing color
      prependIcon: 'palette', 
      label:'Color'
    },
    date:{ 
      el:'text', 
      type:'date', 
      locale:'en',
      prependIcon: 'event', 
      label:'Date'
    },
    time:{ 
      el:'text', 
      type:'time', 
      prependIcon: 'timer', 
      label:'Time'
    }
  })
</script>