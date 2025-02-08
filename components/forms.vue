<template>
  <v-container class="container-box-new">  
    <h4>Example using Container Form </h4>
   
    <!-- FORM-BASE-COMPONENT -->
    <!-- Take attribute 'container' for wrapping formbase with a form -->
    <!-- :container="{ class:'pa-10', style:'backgroundColor:#dddddd' }" -->
    <v-form-base 
      :container="containerOptions"
      :model= "myModel"
      :schema= "mySchema"  
      :cols=12 
      />
      <!-- @submit="log"        -->
      
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log as logLib, logModel } from '@/lib'
 
  // const log= (event) => {
  //   // logLib(event)
  //   console.log('SUBMIT', myModel.value);  
  //   window.location.href = '/basic';  
  // }

  const containerOptions = { 
    is:'v-form', 
    class:'pa-10', 
    style:{ backgroundColor:'#eee' }, 
    action:'/dev',
    method:'GET',
    onSubmit: (ev) => console.warn('DATA:',myModel.value, ev), 
  }
  
  const myModel = ref({   
  })
  
  const mySchema = ref({
    user: { 
      el:'text', 
      label:'user', 
    },
    submit:{ 
      el:'btn', 
      type:'submit',
      text:'submit user', 
      block:true, 
    }
  })
 
</script>
