<style>
  #partial-form {background-color: #eee; }
</style>

<template>
  
  <h4>Form from 'myModel'</h4>
  <v-form-base    
    id="base-form"   
    :model= "myModel"
    :schema= "mySchema"
    @update:customEvent="log"
  />
  
  <h4>Separate form linked to 'myModel.partial'</h4>
  <v-form-base 
    id="partial-form" 
    class="my-6"      
    :model= "myModel.partial"
    :schema= "mySchema.partial"
    @update:customEvent="log"
  />
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import VFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib'
   
  // custom elements factory
  const nullValue='Yes'
  const cols = { cols:4, offset: 2}    
  const checker = (color = 'grey', label='Yes/No') => ({ el:'checkbox', label, trueValue:'Yes', falseValue:'No', color, nullValue, cols })
  
  const myModel = ref({partial:{}})
    
  const mySchema = ref({
    r: checker('red','Yes/No in Red'),   
    g: checker('green','Yes/No in Green'),   
    partial:{
      o: checker('orange','Yes/No in Orange'),   
      b: checker('blue','Yes/No in Blue'),   
    }     
  })

</script>
