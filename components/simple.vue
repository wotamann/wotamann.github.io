<template>
  <h4>Simple textfield</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
    @update:modelValue="logModelValue"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>    
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  
  const logModelValue = (val) => console.info( val );
   
  const myModel = ref({})
    
  const mySchema = ref({
    myText:'text' // maps to => myText:{ el:'v-text-field', label:'myText', placeholder:'myText' }    
  })
  
</script>
