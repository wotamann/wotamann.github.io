<template>
  <v-container class="container-box-new">
  
    <h4>Generate form from model. No schema required</h4>
    
    <v-form-base 
      :model="myModel"  
      @update="logModel"
    />     
      
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline :model="myModel" />
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { logModel } from '@/lib'
  
  const myModel = ref({
    name: {
      firstname:'Dave',         
      lastname: 'Stoner',
    },          
    age:32,        
    email: 'stoner@mail.com',          
    todos: [
      {done: false, todo: 'schedule workout'},
      {done: true, todo: 'plan holyday'},
      {done: true, todo: 'check flight LA'},
    ],
  })
 
</script>