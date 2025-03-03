<template>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
    @update:modelValue="logModelValue"
    @update:customEvent="logCustomEvent"
    />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>    
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  
  const logModelValue = (val) => console.info(val );
  const logCustomEvent = (ev) => console.info('value:' +ev?.modelValue + ' - emitter:' + ev?.emitter + ' - path:' + ev?.path , ev );
   
  const myModel = ref({})
    
  const mySchema = ref({
    myText: { el:'v-text-field' }     
    // write shorthand -> myText:'text' will map to => myText:{ el:'v-text-field', label:'myText', placeholder:'myText' }
  })
  
</script>
