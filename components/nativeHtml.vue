<template>
  <h4>Basic input elements</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
    @update:customEvent="logCustomEvent"
  />
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logCustomEvent, logInline } from '@/lib'
  
  const myModel = ref({
    array: [
    { done: false, title: `Dyn 0` },
    { done: true, title: `Dyn 1` },
    { done: false, title: `Dyn 2`, div:null },
  ]
  })
    
  // IMPORTANT: props order in schema determines display order!
  const mySchema = ref({
   
    text1: { el:'text-field', label:'text 1' },

    div: { el:'<div>', style:'padding:1rem;backgroundColor:#ed8', innerText:`I am a native 'div'` },

    array: {
    el:'v-array',    
    container:{ el:'<div>', style:'margin:0px; padding:0rem;backgroundColor:#fea'},     
    schema: {
      done: { el: 'checkbox', cols:3 },
      title: { el: 'text', cols: 9 },
      // div:{ el:'<div>',style:'borderTop:2px;' },
    }
  },
  })
  
</script>