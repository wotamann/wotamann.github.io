<template>
  <v-container class="container-box-new">  
   <h4>Autogenerate 'Model' Structure from deep nested Schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="model-missing-formbase"
      :model= "myModel"
      :schema= "mySchema"
      @update="log"
    />
  
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib.js'
    
  // Don't try to remove ':model' from <v-form-base :model= "myModel"/>
  // it will work, but you can get changes only update:modelValue event
  const myModel = ref({})
  
  const mySchema = ref({
    A1: { el: 'checkbox', label: 'A 1', color:'red', nullValue:true }, // set nullvalue = true
    A2: {
      B1: { el: 'checkbox', label: 'A2 B 1', color:'red' },   
      B2: [
        { el: 'checkbox', label: 'A2 B2 0', color:'blue' },
        { el: 'checkbox', label: 'A2 B2 1', color:'blue', nullValue:true },
        [
          // nested array
          { el: 'switch', label: 'A2 B2 2 0', color:'green', nullValue:true },
          { el: 'switch', label: 'A2 B2 2 1', color: 'green', }
        ]
      ]  
    }
  })
  
</script>
