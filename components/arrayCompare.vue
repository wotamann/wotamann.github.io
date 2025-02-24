<template>
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
</template>

<script setup>
import VFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { ref } from 'vue'
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
    container:{ el:'v-sheet', color:'blue-lighten-5'},     
    cols: 12,
    schema: { 
      done: { el: 'checkbox', cols:3 }, 
      title: { el: 'text', cols: 9 },
      a: {
        el:'array',    
        container:{ el:'v-sheet', color:'blue-lighten-5'},     
        cols: 12,
        schema: { done: { el: 'checkbox', cols:3 }, title: { el: 'text', cols: 9 } }
      }
    }
  },
  
  Static_Schema: [
    {done: { el: 'checkbox', cols:3 }, title: { el: 'text', cols:9 } },    
    {done: { el: 'checkbox', cols:3 }, title: { el: 'text', cols:9 } }   
  ]
})
</script>
