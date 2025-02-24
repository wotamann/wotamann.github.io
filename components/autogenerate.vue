<template>
  <h4>Try to build view based on model. No schema required</h4>
  
  <v-form-base 
    :model="myModel"          
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
  
  const mySchema = ref({container:{el:'frame'}})
  const myModel = ref({
    people:[
      { name: {
          firstname:'John',         
          lastname: 'Smith',
        },          
        age:32,        
        email: 'smith@mail.com',          
        todos: [
          {done: true, todo: 'plan holyday'},
          {done: true, todo: 'check flight LA'},
        ]
      },
      // { name: {
      //     firstname:'Jane',         
      //     lastname: 'Stoner',
      //   },          
      //   age:28,        
      //   email: 'stoner@mail.com',          
      //   todos: [
      //     {done: true, todo: 'schedule workout' },
      //   ]
      // }
    ]
  })
 
</script>