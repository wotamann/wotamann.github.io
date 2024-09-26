<template>
  <h4>Create multiple Views based on same Model with 'wrap' </h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="wrap-base"
    :model="myModel"
    :schema="mySchema"
    :cols="12"
    @update:modelValue="log"
  />     


   <!-- Stuff  -->    
   <infoline :model="myModel" :schema="mySchema"/>

</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline'
import log from '@/lib'

const name1 = { el: 'text', label:'Text', cols:6,}
const check1 = { 
  el: 'checkbox', 
  map:'yes_no',
  // label: 'Check', 
  cols:2, 
  color:'red', 
  // onClick:(val,b,c)=> console.log('INLINE FN CLICK',val,b,c),

  // DOESNOT WORK
  // onUpdateModelValue:(val,b,c)=> console.log('INLINE FN UPDATE',val,b,c),
  onInput:(val,b,c)=> console.log('INLINE FN INPUT',val) 
}

const myModel = ref({
  name1:'Base', 
  check1:true  
})
const mySchema = ref({
  name1,
  check1,
  Level1: { 
    el:'wrap', color:'green-lighten-3',  title:'Level 1',  class:'pa-1',
    schema:{
      name1,
      check1,
      Level2: { 
        el:'wrap', color:'blue-lighten-4', title:'Level 2', class:'pa-1',         
        schema:{
          name1,          
          check1,
          Level3: { 
            el:'wrap', color:'red-lighten-4', title:'Level 3', class:'pa-1', 
            schema:{
              name1,          
              check1,
              Level4: { 
                el:'wrap', color:'yellow-lighten-4', title:'Level 4', class:'pa-1',
                schema:{
                  name1,          
                  check1,                  
                }
              },
            }
          },
        }
      },
      
    }          
  }
})

</script>

<style >
  /* .bg {background-color: #f4cbc54e; color:#a80000} */
  /* #formbase-check2 {background-color: #d6f3f763; color:#0b97a9} */
</style>