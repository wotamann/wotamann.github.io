<template>
  <v-container class="container-box">  
   <h4>Custom Component for Creditcard</h4>
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="custom-demo"
      :model= "myModel"
      :schema= "mySchema"
      @update:modelValue="log"
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib.js'

  const myModel = ref({
    creditcardnumber:'1234'
  })

  const mySchema =ref({
    //MASK OPTIONS -> https://beholdr.github.io/maska/v3/#/options?id=mask-options 
    creditcardnumber: {el:'custom', hint:'Hint from Parent', mask:'####-####-####-####',  clearable:true, title:'Title from Parent'},
  })

</script>