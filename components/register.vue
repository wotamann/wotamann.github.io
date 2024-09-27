<template>
  <v-container class="container-box">  
   <h4>Example Registration Form</h4>
   
      <!-- Take attribute 'use-form' for wrapping formbase with a form -->
      <!-- :use-form="{ class:'pa-10', style:'backgroundColor:#dddddd' }" -->
  
      <!-- FORM-BASE-COMPONENT -->

      {{ visible }}
       <v-form-base 
       id="registration-demo"
       :use-form="{ class:'pa-10', style:'backgroundColor:#dddddd'}"
       :model= "myModel"
       :schema= "mySchema"
       cols="12"  
       @blur="log"        
       />

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib'

  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )

  const rules= {
    required: v => !!v || 'required',
    min: v => v?.length >= 8 || 'min 8 chars',
    pwmatch: v => myModel.value.password  === myModel.value.passwordConfirm|| 'passwords must match',
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'no email'
  }
  
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
      onClick:(e,o,ec) => console.log('LOG Form Value:', ec.model) 
    },
    
  })
 
</script>
