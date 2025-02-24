<style>  
#form-base-validate {  border:1px solid #ddd; padding: 12px;}
#form-base-validate .valid { background-color: #bbf6b1; }
#form-base-validate .invalid { background-color: #ffb9b9; }

.form-base-validate-playground { background-color: #efefef; border:1px solid #ddd; padding: 12px;}
.form-base-validate-error { color: #9f0a0a; }
</style>

<template>
  <v-container fluid>
    <h4>Form Validation using Rules in Schema</h4>

    <v-form
      ref="myForm"
      v-model="formValid"
      :validate-on="validateOn"
      :fast-fail="fastFail" 
      :disabled="disabled"
      :readonly="readonly"
      @submit.prevent
    >
    

      <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        id="form-base-validate"
        :class="formValid === true ? 'valid' : formValid === false ? 'invalid': ''"
        :model="myModel"
        :schema="mySchema"
        cols=6
        @input="log"
        @click:form-base-validate-submit="logSubmit"
      />

    </v-form>

    <!-- PLAYGROUND -->
    <br/>
    <div class="form-base-validate-playground">
      <h4>Playground</h4>
      <v-divider/>
      <v-divider/>
      <v-checkbox-btn v-model="fastFail" @click="fastFail=!fastFail" label="fastFail"></v-checkbox-btn>
      <v-checkbox-btn v-model="disabled" @click="disabled=!disabled" label="disabled"></v-checkbox-btn>
      <v-checkbox-btn v-model="readonly" @click="readonly=!readonly" label="readonly"></v-checkbox-btn>
      <v-select v-model="validateOn" label="Validate on Selection" :items="validateOnString"></v-select>

      <v-btn color="green lighten-3" @click= "validate">
        Validate
      </v-btn>
      <v-btn dark color="red lighten-3" @click= "reset">
        Reset
      </v-btn>
      <v-btn dark color="orange lighten-3" @click= "resetValidation">
        Reset Validate
      </v-btn>
      <br/>
      <!-- <p>{{myForm?.items}}</p> -->
      <br/>
      <p class="form-base-validate-error">{{myForm?.errors}}</p>
    </div>
    

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
   
  </v-container>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import { ref, reactive, onMounted } from 'vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib.js'


const logSubmit = (e) => {
  log(e)
  if (formValid.value) console.log('LOG# SUBMIT OK -> FETCH FORM', e?.model )
  if (!formValid.value) console.error('LOG# SUBMIT ERROR ON FORM', e?.model )
} 
const myForm = ref(null);
const formValid =ref(null)
const validateOn =ref('blur')  // 'input'  'submit'
const fastFail =ref(true)
const disabled =ref(false)
const readonly =ref(false)

const validateOnString = ['input', 'blur', 'submit' ]
const items = ['Satoshi', 'Taleb', 'Einstein']

// Helper & Partial Functions
const minLen = l => v => v?.length >= l || `min. ${l} Characters`
const maxLen = l => v => v?.length <= l || `max. ${l} Characters`
const required = msg => v => !!v || msg
const requiredArray = msg => v => (Array.isArray(v) && v.length>1) || msg

// Rules
const rules = {
  requiredPassword: required('Password is required'),
  requiredEmail: required('E-mail is required'),
  requiredSel: required('Selection is required'),
  requiredSelMult: requiredArray('min 2 Selections are required'),
  max12: maxLen(12),
  min6: minLen(6),
  validEmail: v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
}

const myModel = ref({
  email: '',
  password: 'abcde',
  select: null,
  multiple: ['Taleb'],
})

const mySchema = ref({
  email: { el: 'email', label: 'Email', rules: [rules.requiredEmail, rules.validEmail] },
  password: { el: 'password', label: 'Password', hint: '6 to 12 Chars', appendIcon: 'mdi-eye', counter: 12, rules: [rules.requiredPassword, rules.min6, rules.max12], clearable: true },
  select: { el: 'select', label: 'Select', items, rules: [rules.requiredSel] },
  multiple: { el: 'select', label: 'Multi-Select', clearable:true, items, rules: [rules.requiredSelMult], multiple: true },
  submit: {el:'btn', type:'submit', cols:12, block:true, text:'Submit'},
})

const validate = ()  => {
  console.error(myForm.value);
  myForm.value.validate()
}

const reset = () => {
  myForm.value.reset()
}
const resetValidation = () => {
  myForm.value.resetValidation()
}

</script>
