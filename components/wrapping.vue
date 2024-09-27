<template>
  <h4>Create multiple Views based on same Model with 'wrap' </h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="wrap-base"
    :model="myModel"
    :schema="mySchema"
    :cols="12"
    @update:model-value="log"
    />     
    
    <!-- :container="{ is:'v-sheet', color:'orange-lighten-5', class:'pa-1' }" -->

   <!-- Stuff  -->    
   <infoline :model="myModel" :schema="mySchema"/>

</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline'
import { log, logMV } from '@/lib'

const name1 = { el: 'text', label:'Text', cols:6,}
const check1 = { 
  el: 'checkbox',
  color:'red',
  cols:4,   
  // INLINE EVENTS
  // onUpdateModelValue:(val, obj, custom) => { console.log('INLINE FN UPDATE',val, obj, custom); return !val},
  // onClick:(val,b,c)=> console.log('INLINE FN CLICK',val,b,c),
  // onInput:(val,b,c)=> console.log('INLINE FN INPUT',val) 
}

const myModel = ref({
  name1:'Text', 
  check1:true  
})
const mySchema = ref({
  name1,
  check1,
  Level1: { 
    el:'wrap', 
    // container:{ is:'v-sheet', color:'yellow-lighten-5', class:'pa-1' },
    schema:{
      name1,
      check1,
      Level2: { 
        el:'wrap',          
        // container:{ is:'v-sheet', color:'blue-lighten-5', class:'pa-1' },
        schema:{
          name1,          
          check1
        }
      },
      
    }          
  }
})

</script>
