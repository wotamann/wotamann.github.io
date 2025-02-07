<template>
  <h4>Basic input elements</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    id="basic-component"
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
  
  const color='orange-darken-4'
  const cols = { cols:4, offset:1}
  
  const myModel = ref({
  })
    
  // IMPORTANT: props order in schema determines display order!
  const mySchema = ref({
    text: { el:'text', label:'text', color, cols, appendInnerIcon:'mdi-menu', onClickAppendInner:logInline },     
    select:{ el:'select', label:'select', items:[1,2,3], color, cols},  
    checkbox:{ el:'checkbox', label:'checkbox', color, cols }, 
    switch:{ el:'switch', label:'switch', color, cols },  
  })
  
</script>
