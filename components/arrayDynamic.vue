<template>
  <v-container fluid>
    <h4>Dynamic Array</h4>

    <v-form-base
      id="formbase-array"
      :model="myModel"
      :schema="mySchema"
      :cols="12"
      @update:modelValue="logModel"
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE -->
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib'


const myModel= ref({
  dynArray: [
    { done: false, title: `Dyn 0` },
    { done: true, title: `Dyn 1` },
    { done: false, title: `Dyn 2` },
  ]
})

const mySchema= ref({      
  dynArray: {
    el:'v-array',    
    container:{ el:'frame', },     
    schema: {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols: 9 }
    }
  },
  add: { 
      el: 'btn', 
    block:true, 
    text:'Add+', 
    onClick:(val, obj, ev) => {
      // ev.customEvent?.model?.dynArray?.push({ done: false, title: `Dyn +` }) // // use Curly brackets don't return a value 
      myModel.value?.dynArray?.unshift({ done: false, title: `Dyn +` }) // use Curly brackets don't return a value       
    } 
  },
  delete: { 
    el: 'btn', 
    block:true, 
    color:'red-lighten-2',
    text:'Delete-', 
    onClick:(val, obj, ev) => {
      // ev.customEvent?.model?.dynArray?.splice(0,1) // // use Curly brackets don't return a value 
      myModel.value?.dynArray?.splice(0,1) // use Curly brackets don't return a value 
    } 
  }
})
</script>
