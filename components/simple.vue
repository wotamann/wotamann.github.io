<template>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
    @update:modelValue="logModel"
    />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>    
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logModel } from '@/lib'

  const myModel = ref({})
    
  const mySchema = ref({
    textShort: 'text',     // map to => { el:'v-text-field', label:'textShort', placeholder:'textShort' }
    text: { el:'text', label:'label', placeholder:'placeholder', hint:'hint', clearable:true },     
  })
  
</script>
