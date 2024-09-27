<template>
  <v-container fluid>
    <h4>Compare Arrays using multiple or single Schema </h4>

    <v-form-base
      id="array-compare"
      :model="myModel"
      :schema="mySchema"
      @update:modelValue="log"
    />
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import VFormBase from '@/vFormBase'
import Infoline from '@/components/infoline'
import { log, logMV } from '@/lib'


const myModel= ref({
  Dynamic_Schema: [
    { done: false, title: 'Dynamic' + Math.floor(Math.random() * 1000) },
    { done: false, title: 'Dynamic ' + Math.floor(Math.random() * 1000) },
    { done: false, title: 'Dynamic ' + Math.floor(Math.random() * 1000) },
  ],

  Static_Schema: [
    { done: false, title: 'Static ' + Math.floor(Math.random() * 1000) },
    { done: true, title: 'Static ' + Math.floor(Math.random() * 1000) },
    { done: false, title: 'Static ' + Math.floor(Math.random() * 1000) },
  ]
})

const mySchema= ref({      
  dividing:{ el:'divider', cols:12,thickness:24 },
  Dynamic_Schema: {    
    el: 'array',
    cols: 12,
    schema: {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols: 9, onFocus: () => 'TEST'}
    }
  },
  
  dividing1:{ el:'divider', cols:12,thickness:24 },

  Static_Schema: [
    {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols:9 },
    },    
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
