<template>
  <v-container class="container-box">
  
    <h4>Autogenerate Form from Model with undefined Schema</h4>
    <p>Model-Data must be of Type of 'string', 'number', 'bool' or 'array'</p>
   
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base 
        v-model:model="myModel"
        :cols="6"
        @update:value="log"
      />     

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="{}"/>
  </v-container>
</template>

<script setup>
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib'

  const mySchema = ref({})
  const myModel = ref({
    name: {
      surname: 'Stoner',
      prename:'Samuel',         
    },          
    email: 'stoner@mail.com',          
    age:42,        
    todo: [
      {done: true, name: 'plan holydays'},
      {done: false, name: 'schedule workout'},
    ],
  })

</script>
<style scoped>
</style>
