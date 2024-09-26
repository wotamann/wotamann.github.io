<template>
  <v-container class="container-box">  
   <h4>Password with Rules and Events</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
    />
      
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline'

  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  
  const rules= {
    min: v => v?.length >= 6 || 'Min 6 characters',
    max: v => v?.length <= 12 || 'Max 12 characters',
    pwmatch: v => v === myModel.value.password || `Password must be the same`
  }

  const myModel = ref({
    user:'bob',
    password:'12345678',
    password_check:''
  })

  const mySchema = ref({
    user: { el:'text', label:'user', rules:[ rules.min, rules.max], cols:12  },  
    password:{ 
      el:'text', 
      type:visibleType, 
      label:'password',
      clearable:true,
      rules:[ rules.min, rules.max], 
      appendInnerIcon:visibleIcon, 
      // don't return value use () => { v = !v } or () => { v = !v; return undefined } 
      onClickAppendInner: () => { visible.value = !visible.value }, 
      cols:12 
    },
    password_check:{ 
      el:'text', 
      type:'password', 
      label:'password check', 
      clearable:true,
      rules:[ rules.pwmatch], 
      cols:12
    }

  })

</script>

<style>  
</style>