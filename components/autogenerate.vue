<template>
  <h4>Build view based on model. no/partial definition of schema required</h4>
  
  <v-form-base 
    :config="{_buildSchemaFromModel:true}"
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
  
  // IMPORTANT: if config._buildSchemaFromModel=true then the order of props in MODEL determines the order in which they are displayed!
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
      {done: false, todo: 'check flight LA'},
    ],
  })
  
  const mySchema = ref({
    email: 'email',           
    hr:{ el:'div',style:'height:4px;backgroundColor:red', cols:12},

    IgorePropsNotInModel:'checkbox'
  })

  

</script>