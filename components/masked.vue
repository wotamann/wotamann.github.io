<template>
  <v-container class="container-box">  
   <h4>Masked Input - Creditcard</h4>
  

    <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        :container="{ is:'v-form', class:'pa-4', style:'backgroundColor:#eeeeee'}"
        :model= "myModel"
        :schema= "mySchema"
        />
    <!-- FORM-BASE-COMPONENT -->
    
    
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline'
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
    expiration: v=> { let p = v.split('/'); return parseInt(p[0])<=12 && parseInt(p[1])>20 || 'format MM/YY'}  
  }

  const onInputHD = (val,obj,event) => hd.masked(val)
  const onInputCC = (val,obj,event) => { if (cc.completed(val)) {console.log('CARD NUMBER COMPLETED:', val)};  return cc.masked(val) } 
  const onInputEXP = (val,obj,event) => exp.masked(val) 
  
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