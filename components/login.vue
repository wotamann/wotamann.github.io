<template>
  <h4>Login Form</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :model= "myModel"
    :schema= "mySchema" 
    @click:formbase-submit-button="submit"
  />
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  import myElements from '@/components/loginElements.js'
  const { password, email, submitButton } = myElements()
  
  import { useRouter } from "vue-router"
  const router = useRouter();
  const submit = (val, event) => {
    const newRoute = 'basic'
    router.push(newRoute)
  }
  
  const myModel = ref({   
    user:'',
    password:'ABCD1234',
  })
  
  const mySchema = ref({
    user: email, 
    password, 
    submitButton
  })
 
</script>
