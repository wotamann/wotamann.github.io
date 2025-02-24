<template>
   <h4>Handling of missing Properties in Model or Schema</h4>
   
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model="myModel"
      :schema="mySchema"
    />     

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'

  const myModel = ref({
    ModelAndSchema: 'Model and schema are predefined',
    // No Prop in mySchema - property value remains untouched  
    missingSchema: 'No schema - model prop remains unchanged',  
  })
  const mySchema = ref({
    ModelAndSchema: { el:'text', label: 'Model and schema are predefined' },
    // No Prop in myModel - property will be displayed & edited
    missingModel: { el:'text', label: 'Missing value in model is added automatically' }  
  })


</script>
