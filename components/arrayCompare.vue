<template>
    <h4>Compare Dynamic Arrays vs Static Arrays </h4>

    <v-form-base
      :model="myModel"
      :schema="mySchema"
      @update:modelValue="logModel"
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE -->
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { ref } from 'vue'
import { log, logModel } from '@/lib'


const myModel= ref({
  dynamicArray: [
    { done: false, title: `Dynamic 0` },
    { done: false, title: `Dynamic 1` },
  ],
  
  staticArray: [
    { done: false, title: `Static 0` },
    { done: false, title: `Static 1` },
  ]
})

const mySchema= ref({        
  // dynamic array
  dynamicArray: {
    el:'array',    
    container:{ el:'v-sheet', color:'blue-lighten-5'},     
    cols: 12,
    schema: { 
      done: { el: 'checkbox', cols:3 }, 
      title: { el: 'text', cols: 9 },
    }
  },
  // hardcoded array 
  staticArray: [
    {done: { el: 'checkbox', cols:3 }, title: { el: 'text', cols:9 } },    
    {done: { el: 'checkbox', cols:3 }, title: { el: 'text', cols:9 } }   
  ]
})
</script>
