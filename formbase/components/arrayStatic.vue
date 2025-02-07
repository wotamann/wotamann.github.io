<template>
  <v-container fluid>
    <h4>Static Array</h4>

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

import VFormBase from '@/vformbase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib'


const myModel= ref({
  staticArray: [
    { done: false, title: `Static 0` },
    { done: false, title: `Static 1` },
  ]
})

const mySchema= ref({      
  staticArray: [
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
