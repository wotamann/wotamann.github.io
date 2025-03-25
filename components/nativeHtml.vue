<style scoped>
  :deep(.native-html) { background-color: #ba7e56; color:white; display: grid; place-items: center; height:4rem; }
</style>
<template>
  <h4>Use native HTML and '_ignoreModel' to prevent changes to the model</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema" 

    :config="{_buildModelNode:false}"            
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  
  const myModel = ref({})
    
  
  const mySchema = ref({
    text1: 'v-text-field' ,        
    // _ignoreModel:true - prevent adding element into model 
    // Useful only in rare cases if config._buildModelNode is explicit set to 'true'. Default value is 'false'
    div: { el:'div', class:`native-html`, innerText:`I am 'div' element not in Model`, _ignoreModel:true },
    
    text2: { el:'v-text-field', label:'v-text-field 2' },     
    // _ignoreModel:true - dont update into model 
    // Useful only in rare cases if config._buildModelNode is explicit set to 'true'. Default value is 'false'
    hr:{ el:'hr', _ignoreModel:true }, 
    
    text3: { el:'v-text-field', label:'v-text-field 3' },    
    // _ignoreModel:true - dont update into model.   
    // Useful only in rare cases if config._buildModelNode is explicit set to 'true'. Default value is 'false'
    link:{ el:'a', href:'https://github.com', innerText:`I am 'a' hyperlink`, class:`native-html`, _ignoreModel:true  },
  })
  
</script>