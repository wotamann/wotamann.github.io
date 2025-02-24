<style scoped>
  .form-css-form {color:#444; background-color:#aeb3c799}
</style>

<template>
  <h4>Submit Login Form</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <!-- Take attribute 'container' for wrapping formbase with a form -->
  <v-form-base 
    :container="containerOptions"
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
  
  import { useRouter } from "vue-router"
  const router = useRouter();

  const submit = (val, event) => {
    
    // INLINE     <v-form-base @click:formbase-submit-button="submit" />  -> component signature (event)
    // COMPONENT  schema:{ submitButton:{ onClick:submit, ...}            -> inline signature (val, event)  
    console.log('DATA', val ? val.model : event.model)
    
    const newRoute = 'basic'
    console.warn('ROUTE TO',newRoute)
    router.push(newRoute)
  }

  
  const containerOptions = { el:'form', class:'pa-8 form-css-form' }
      
  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  
  const rules= {
    required: v => !!v || 'required',
    min: v => v?.length >= 8 || 'min 8 chars',
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'no email'
  }
  
  const myModel = ref({   
    user:'',
    password:'ABCD1234',
  })
  
  const mySchema = ref({
    user: { 
      el:'text', 
      label:'email', 
      hint:'email only', 
      clearable:true, 
      rules:[ rules.required, rules?.isEmail], 
      autocomplete:'username' 
    },
    password:{ 
      el:'password',
      type:visibleType, 
      hint:'min 8 chars', 
      rules:[ rules.min], 
      autocomplete:'current-password', 
      appendInnerIcon:visibleIcon, 
      onClickAppendInner: () => { visible.value = !visible.value; } // don't return any value
    },      
    submitButton:{ 
      el:'btn', 
      text:'Send', 
      cols:12, 
      color:'#555572',
      block:true, 
      // onClick:submit
    }
  })
 
</script>
