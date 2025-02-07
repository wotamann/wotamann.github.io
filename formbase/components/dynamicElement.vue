<template>
  <h4>Dynamic Button</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base       
    :model= "myModel"
    :schema= "mySchema"
    @update="log"
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log, logInline } from '@/lib'
  
  const text = `Click for next random color:`
  const cols ={ cols:8, offset:2}
  
  const randomHexColor = () => `#${Math.floor(Math.random()*Math.pow(2,32)).toString(16).substring(0,6)}`; 
  const onClick = (val, ev) => { 
      const hexColor = randomHexColor() 
      ev.obj.schema.color = hexColor 
      ev.obj.schema.text = `${text}${hexColor}` 
      return hexColor // -> set model value
  } 

  const myModel = ref({})
    
  const mySchema = ref({  // change button color random on click
    randomColorButton:{ el:'btn', text, cols, class:'ma-8 pa-8', block:true,onClick }   
  })

  
</script>
