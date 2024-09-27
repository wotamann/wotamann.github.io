<template>
  <v-container class="container-box">  
   <h4>Examples of Input</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form>
      <v-form-base 
      id="input-demo"
      :model= "myModel"
      :schema= "mySchema"
      @update:modelValue="log"
      @click="log"
      @focus="log"
      @blur="log"
      />
    </v-form> 

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib'
  
  const rules= {
    required: v => !!v || 'required.',
    min: v => v?.length >= 8 || 'min 8 chars',
    pwmatch: v => myModel.value.password  === myModel.value.passwordConfirm || `passwords must match`,
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) 
  }
  
  const myModel = ref({
    text:'',
    number:0,
    password:'',
    passwordConfirm:'',
    otp:467231,
    email:''    
  })

  const mySchema = ref({
    text: { el:'text', label:'text',rules:[ rules.required] },
    email: { el:'email' },
    // email: { el:'text', label:'email', hint:'email only', rules:[ rules.isEmail] },
    
    password:{ el:'password', hint:'min 8 chars', rules:[ rules.min]},
    // password:{ el:'password', hint:'min 8 chars', clearable:true, rules:[ rules.min], autocomplete:'new-password'},
    passwordConfirm:{ el:'passwordConfirmation', rules:[ rules.pwmatch]},
    // passwordConfirm:{ el:'passwordConfirmation',  hint:'min 8 chars', clearable:true, rules:[ rules.min], autocomplete:'current-password'},
    // passwordConfirm:{ el:'text', type:'password', label:'password confirmation', clearable:true, rules:[ rules.pwmatch ], autocomplete:'current-password'},
    
    number: { el:'number', label:'Number', hint:'from 0 to 10 step 2', step:2, min:0, max:10 },  
    otp: { el:'otp', label:'2FA', hint:'2FA' },
    
    file: { el:'file', label:'File', showSize:true,multiple:false, clearable:true }, 
    date:{ el:'date', label:'Date'}, 
  })
 
</script>
