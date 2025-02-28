<template>
  <h4>Combine native HTML with vuetify elements</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  
  const onClick = (v,e) => console.log(e);
    
  const myModel = ref({
    array: [
      {},
      { check: true, text: `item 1` },
  ]
  })
    
  // IMPORTANT: props order in schema determines display order!
  const mySchema = ref({
    text: { el:'v-text-field', label:'v-text-field' },    
    div: { el:'div', style:`padding:1rem;backgroundColor:#99ccff;`, innerText:`I am a 'div' element` },
    link:{ el:'a', href:'https://github.com', innerText:`I am 'a' hyperlink`, style:'padding:1rem;backgroundColor:#99ccff80; display: grid; place-items: center;'  },
    
    hline:{ el:'hr' },

    array: {
    el:'array',    
    container:{ el:'div', style:'margin:0px; padding:.5rem;backgroundColor:#99ccff30'},     
    schema: {
      title:{ el:'h5', onClick, innerText:`I am a 'h5' element`, style:'padding:0.5rem;color:#58b;backgroundColor:#99ccff80; display: grid; place-items: center;' },
      check: { el: 'checkbox', label:'v-checkbox',cols:4  },
      text: { el: 'text', label:'v-text-field', cols: 8 },
    }
  },
  })
  
</script>