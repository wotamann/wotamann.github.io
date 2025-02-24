<template>
   <h4>Example Registration Form</h4>
  
      <!-- FORM-BASE-COMPONENT -->
     <v-form-base 
       id="registration"
       :container="containerOptions"
       :model= "myModel"
       :schema= "mySchema"
       @click:registration-register="submit"
      />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  const containerOptions = { el:'form', class:'pa-10', style:'backgroundColor:#e2e2e2', action:'/grid'}
  
  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )

  const rules= {
    required: v => !!v || 'required',
    min: v => v?.length >= 8 || 'min 8 chars',
    pwmatch: v => myModel.value.password  === myModel.value.passwordConfirm|| 'passwords must match',
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'no email'
  }
  
  // const objectToQueryString = (obj) => Object.keys(obj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])).join('&');
  const submit = (ev) =>  console.log(ev.model, ev)

  const myModel = ref({   
  })
  
  const mySchema = ref({
    username: { 
      el:'text', 
      label:'username', 
      hint:'email only', 
      clearable:true, 
      rules:[ rules.required, rules.isEmail], 
      autocomplete:'username' 
    },
    password:{ 
      el:'password',
      type:visibleType, 
      label:'password', 
      hint:'min 8 chars', 
      rules:[ rules.min], 
      autocomplete:'new-password', 
      appendInnerIcon:visibleIcon, 
      onClickAppendInner: () => { visible.value = !visible.value; } // don't return any value here!!!  use '()=>{v=!v}' or '()=>{v=!v; return undefined}'        
    },      
    passwordConfirm:{ 
      el:'password',
      type:visibleType, 
      label:'password confirmation', 
      hint:'Confirm Password', 
      rules:[ rules.min, rules.pwmatch], 
      autocomplete:'new-password', 
    },      
    register:{ 
      el:'btn', 
      type:'submit', 
      text:'Send', 
      block:true, 
      onClick:(val,ev) => submit(ev)
    },
    
  })
 
</script>
