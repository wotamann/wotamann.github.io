<template>
  <v-container fluid>
    <h4>Compare Static Arrays vs Dynamic Arrays </h4>

    <v-form-base
      id="formbase-array"
      :model="myModel"
      :schema="mySchema"
      @update:modelValue="logModel"
      @input="log"
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE -->
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import VFormBase from '@/vformbase.vue'
import Infoline from '@/components/infoline.vue'
import { log } from '@/lib'


const myModel= ref({
  Dynamic_Schema: [
    { done: false, title: `Dynamic 0` },
    { done: false, title: `Dynamic 1` },
  ],
  
  Static_Schema: [
      { done: false, title: `Static 0` },
    { done: false, title: `Static 1` },
  ]
})

const mySchema= ref({      
  Dynamic_Schema: {
    el:'array',    
    container:{ is:'v-sheet', color:'blue-lighten-5'},     
    cols: 12,
    schema: {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols: 9 }
    }
  },
  
  divider:{ el:'divider', cols:12 },
  
  Static_Schema: [
    {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols:9 },
    },    
    {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols:9 },
    }   
  ]
})
</script>
