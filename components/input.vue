<template>
  <h4>Various input elements with rules</h4>

    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
      @update:customEvent="log"
    />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib'
  
  const rules= {
    required: v => !!v || 'required.',
    min: v => v?.length >= 8 || 'min 8 chars',
    pwmatch: v => myModel.value.password  === myModel.value.passwordConfirm || `passwords must match`,
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'No valid mail-adress'
  }
  const myModel = ref({
    text:'text',
    email:'text@mail.at',    
    password:'ABCD1234',
    passwordConfirm:'',
    number:4,
  })

  const mySchema = ref({
    text: { el:'text', label:'name', autocomplete:'name'},
    email: { el:'text', type:'email', label:'email', rules:[ rules.isEmail, rules.required], autocomplete:'email' },
    password:{ el:'text', type:'password', hint:'min 8 chars', label:'new password', rules:[ rules.min], autocomplete:'new-password'},
    passwordConfirm:{ el:'text', type:'password', label:'password confirmation', rules:[ rules.pwmatch ], autocomplete:'current-password'},
    number: { el:'numberInput', label:'Number', hint:'from 0 to 10 step 2', step:2, min:0, max:10, cols:2 },  
    file: { el:'fileInput', label:'file', showSize:true, multiple:true, clearable:true, cols:5 }, 
    date:{ el:'dateInput', label:'date', cols:5}, 
  })
 
</script>
