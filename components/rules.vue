<template>
  <v-container class="container-box">  
   <h4>Password with Rules and Events</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
      cols=12
    />
      
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'

  const visible = ref(false)
  const visibleCheck = ref(false)
  
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
      el:'password', 
      type:computed(()=> !visible.value ? 'password' : 'text' ), 
      rules:[ rules.min, rules.max], 
      appendInnerIcon:computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye'), 
      onClickAppendInner: () => { visible.value = !visible.value }, // don't return value 
    },
    password_check:{ 
      el:'password', 
      type:computed(()=> !visibleCheck.value ? 'password' : 'text' ), 
      rules:[ rules.pwmatch], 
      appendInnerIcon:computed(()=> visibleCheck.value ? 'mdi-eye-off' : 'mdi-eye'), 
      onClickAppendInner: () => { visibleCheck.value = !visibleCheck.value }, 
    }

  })

</script>

<style>  
</style>