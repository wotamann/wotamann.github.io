<template>
  <h4>Build view based on model. Partial or no schema required</h4>
  
  <v-form-base 
    :config="{_forceSchemaFromModel:true}"
    :model="myModel"          
    :schema="mySchema"          
    :cols=6
    @update="logModel"
  />     
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import { ref } from 'vue'
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { logModel } from '@/lib'
  
  // IMPORTANT: if config._forceSchemaFromModel=true then the order of props in MODEL determines the order in which they are displayed!
  const myModel = ref({
    name: {
      firstname:'John',         
      lastname: 'Smith',
    },   
    email: 'smith@mail.com',     
    age: 32,        
    hr:'Placeholder for <HR>',     
    todos: [
      {done: true, todo: 'plan holyday'},
      {done: true, todo: 'check flight LA'},
      {done: true, todo: 'check flight LA'},
    ]
  })
  
  const mySchema = ref({
    email: 'email',           
    hr:{ el:'div',style:'height:4px;backgroundColor:red', cols:12},
    todos: [ 
      , , {done: { el:'switch', color:'green'}, }
    ]
  })

  

</script>