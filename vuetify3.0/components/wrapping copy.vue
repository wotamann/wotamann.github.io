<template>
  <h4>Create multiple Views based on same Model with 'wrap' </h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="wrap-base"
    :model="myModel"
    :schema="mySchema"
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

const name1 = { el: 'text', label:'Base', cols:6, color:'green' }
const check1 = { el: 'checkbox', label: 'Base Check', cols:4, color: 'green'  }
const name2 = { el: 'text', label:'Deep', cols:6, color: 'red' }
const check2 = { el: 'checkbox', label: 'Deep Check', cols:4, color: 'red' }

const myModel = ref({
  name1:'Base', 
  check1:true,        
  nested:{
    name2:'Deep', 
    check2:false, 
  },
})
const mySchema = ref({
  view1: { 
    el:'wrap', color:'#cde',  title:'View Deep in Base', cols:6,  class:'pa-3',
    schema:{
      nested:{ 
        name2,
        check2,
      },
      view1Inlay: { 
        el:'wrap', color:'blue-lighten-4', title:'View Deep', cols:12, color:'#def' ,
        schema:{
          name1,          
          check1,
        }
      },          
    }
  },
  view2: { el:'wrap', cols:6, title:'View Base', cols:6, color:'#dfd' ,
    schema:{
      name1,    
      check1
    }
  },
  textView: { el:'wrap', title:'View Names', cols:6, color:'#eee', 
    schema:{
      name1,    
      nested:{ name2 },
    }
  },
 
  checkboxView: { el:'wrap', title:'View Checkboxes:',  cols:6, color:'#ffd',
    schema:{
      check1,          
      nested:{  check2 }             
    }
  }
  })
</script>

<style >
  /* .bg {background-color: #f4cbc54e; color:#a80000} */
  /* #formbase-check2 {background-color: #d6f3f763; color:#0b97a9} */
</style>