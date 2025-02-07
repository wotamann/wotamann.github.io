<template>
  <h4>Masked Input - Creditcard</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  // --- use maska -------
  import { Mask } from "maska"
  
  let hdMask= 'A A'
  const hd = new Mask({ 
    mask:hdMask, 
    tokens: {
      A: { pattern: /[A-Z]/, transform: (chr) => chr.toUpperCase(), multiple:true }
    } 
  })
  
  let ccMask= '####-####-####-####'
  const cc = new Mask({ mask:ccMask })
  
  let expMask= 'AB/AB'
  const exp = new Mask({
    mask:expMask,
    tokens: {
      A: { pattern: /^(?:[0-3])$/gm},
      B: { pattern: /^(?:[0-9])$/gm}
    }
  })
  
  const rules= {
    required: v => !!v || 'required.',
    max: v => v?.length < 24 || 'max 24 chars',
    expiration: v=> { let p = v.split('/'); return parseInt(p[0])<=12 && parseInt(p[1])>23 || 'format MM/YY'}  
  }

  const onInputHD = (val) => hd.masked(val)
  const onInputCC = (val) => { if (cc.completed(val)) {console.info(`CARD NUMBER COMPLETED:${cc.masked(val)}`)};  return cc.masked(val) } 
  const onInputEXP = (val) => exp.masked(val) 
  
  const myModel = ref({
    cardholder:'',
    creditcard:'',
    expiration:'',
  })
    
  const mySchema = ref({
    cardholder: { el:'text', label:'Card Holder', cols:12, placeholder:'Firstname Lastname', counter:true, hint:'max 24 Chars', rules:[rules.max], onInput:onInputHD }, 
    creditcard: { el:'text', label:'Creditcard', cols:8, placeholder:ccMask, onInput:onInputCC }, 
    expiration: { el:'text', label:'Expiration', cols:4, placeholder:'YY/MM', rules:[rules.expiration],  onInput:onInputEXP },    
  })

</script>