<template>
  <v-container fluid>
    <h4>Dynamic Array</h4>

    <v-form-base
      id="formbase-array"
      :model="myModel"
      :schema="mySchema"
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
    { done: true, title: `Dyn 1` }
  ]
})

const mySchema= ref({    
  addButton: { 
    el: 'btn',
    _ignoreModel:true, 
    block:true, 
    cols:4,
    text:'Add+', 
    onClick:(val, obj, ev) => {
      myModel.value?.dynArray?.push({ done: false, title: `Dyn added` }) // use Curly brackets don't return a value       
    } 
  },
  deleteButton: { 
    el: 'btn', 
    _ignoreModel:true,
    block:true,
    cols:4, 
    color:'red-lighten-2',
    text:'Delete-', 
    onClick:(val, obj, ev) => {
      myModel.value?.dynArray?.splice(myModel.value?.dynArray?.length-1, 1) // use Curly brackets don't return a value 
  }
  },   
  dynArray: {
    el:'v-array', 
    cols:12,   
    // container:{ el:'div' },     
    schema: {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols: 9 }
    }
  }
})
</script>
