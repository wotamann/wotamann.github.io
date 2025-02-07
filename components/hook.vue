<template>
  <v-container class="container-box">
  
  <h4>Set Value / Get Value (proxy hook)</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="formbase-hook"
      :model="myModel"
      :schema="mySchema"      
    />  
    
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logAll, logPlain, logClick, logInline, logModel } from '@/lib'


const myModel = ref({  
  textGet:'get',
  textSet:'set'
})

const mySchema = ref({
  textGet: {el: 'text', label: 'GET-VAL', getVal:( v, t, m, s) =>  v?.toUpperCase() },  
  textSet: {el: 'text', label: 'SET-VAL', setVal:(v, tp, t, m, s) => v?.toUpperCase() },  
 })

</script>
