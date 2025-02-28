<template>
  <h4>Use Component or Schema 'cols' to manage Grid</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :model= "myModel"
    :schema= "mySchema"
    :cols="12"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  const myModel = ref({
    text1:'cols 6',
    text2:'cols 3',
    text3:'cols 3',
    text4:'cols 2',
    text5:'cols 4',
    text6:'cols 4 offset 2',
    text7:'cols 12 from component',
  })

  const mySchema = ref({
    // display order is order of props in schema 
    text1: {el:'text', label:'cols 6', cols:6 },
    text2: {el:'text', label:'cols 3', cols:3 },
    text3: {el:'text', label:'cols 3', cols:3 },
    text4: {el:'text', label:'cols 2', cols:2 },
    text5: {el:'text', label:'cols 4', cols:4 },
    text6: {el:'text', label:'cols 4, offset 2', cols:{ cols:4, offset:2} },
    text7: {el:'text', label:'cols 12 from component' },
  })
 
</script>
