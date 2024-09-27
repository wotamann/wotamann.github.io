<template>
  <v-container class="container-box">
  
  <h4>Developer Zone</h4>
  
     <!-- FORM-BASE-COMPONENT -->
     <v-form-base 
      id="formbase"
      :model="myModel"
      :schema="mySchema"
      :cols="12"
      @update:modelValue:formbase-group-groupTitle="logMV"      
      />  
      <!-- 
        @input:formbase-deep-deepTitle="log" 
        @update:modelValue:formbase-deep-deepCheck="logMV"      
        @update:modelValue:formbase-baseTitle="logMV"      
        @click="log"      
        @input="log" 
        @update:modelValue="logMV"      
        @input="log" 
        @focus:formbase-arr-2-baseTitle="log" 
        @focus:formbase-tasks-0-task-0="log" 
        @input="log" 
        @focus="log"      
        @blur="log"      
      -->

   <!-- Stuff  -->    
   <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline'
import { log, logMV } from '@/lib'

const onClick =(ev, obj, event) => console.log('LOG-INLINE CLICK', ev, obj, event)
const onClickClear =(ev, obj, event) => { console.log('LOG-INLINE onClickClear', ev, obj, event); return 'CLEAR' }

const onInput =(ev, obj, event) => console.log('LOG-INLINE INPUT', ev, obj, event)
// const onInput =(val, obj, event) => { console.log('LOG-INLINE INPUT', val, obj, event); return val+'#' }
const onUpdateModelValue =(ev, obj, event) => console.log('LOG-INLINE UPDATE:MODELVALUE', ev, obj, event)
// const onUpdateModelValue =(ev, obj, event) => { console.log('LOG-INLINE UPDATE:MODELVALUE', ev, obj, event); return ev +'*'  }

const viewText = { el: 'text', label:'Text BOTH',  onInput, onUpdateModelValue}
const viewTextMV = { el: 'text', label:'Text MV', onUpdateModelValue}
const viewTextINP = { el: 'text', label:'Text INP', onInput}
const viewCheck = { el: 'checkbox', label:'Text', color:'brown', cols:2,}
const container = { is:'v-card', class:'pa-1', color:'orange-lighten-4'}

const myModel = ref({  
  baseCheck:true,
  baseTitle:'Base',
  viewText:'myview',
  viewCheck: true,
  deep:{
    deepCheck:true,
    deepTitle:'Deep Nested',
  },
  group:{
    groupCheck:true,
    groupTitle:'Group',
  },
  arr:[
    {baseTitle:'fixedArray 1'},
    {baseTitle:'fixedArray 2'},
  ],
  tasks: [
    { 
      done1:true,
      title1: 'Array 1',
      task: [{
        done2:true,
        title2: 'Array 2',
        task: [{
          done3:true,
          title3: 'Array 3',
        }]
      }]
    },
   
  ]
 })

const mySchema = ref({
  onBoth:viewText,
  onModelValue:viewTextMV,
  onInput:viewTextINP,
  baseCheck: { el: 'checkbox', cols:2, label: 'BASE', color: 'red' },
  // baseTitle: {el: 'text', cols:4, label: 'BASE', clearable:true,  },
  baseTitle: {el: 'text', cols:4, label: 'BASE', clearable:true },
  // baseTitle: {el: 'text', cols:4, label: 'BASE', clearable:true, onClickClear, onInput, onUpdateModelValue },
  
  deep:{ 
    deepCheck: { el: 'checkbox', cols:2, label: 'DEEP', color: 'green' },
    deepTitle: {el: 'text', cols:4, label: 'DEEP', clearable:true, onInput,onUpdateModelValue },
  },
  
  group:{ 
    el:'group',
    container:{ is:'v-sheet', class:'pa-1', color:'yellow-lighten-4'},
    schema:{
      groupCheck: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3' },
      // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true,onInput,onUpdateModelValue },
      groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true,},
    }
  },

  arr:[ 
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY0 ', clearable:true }},
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY1 UPDATE', clearable:true, onUpdateModelValue }},
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY2 INPUT', clearable:true, onInput, }},
  ],
   
  view1: { 
    el:'wrap', cols:6,
    container:{ is:'v-card', title:'view1',  color:'brown-lighten-5'},
    schema:{
      viewText,
      viewCheck,
      view2: { 
        el:'wrap', cols:12,         
        container:{ is:'v-card', title:'view2', color:'brown-lighten-3'},
        schema:{
          viewText,          
          viewCheck
        }
      }
    }
  },
  
  tasks: {
    el: 'array', cols:6, container:{ is:'v-card', title:'ARRAY', color:'red-lighten-5'},
    schema: {
      // Add Task Button in Schema only 
      done1: { el: 'checkbox', cols:4, label: '1', color: 'red', offset: 0, cols: 2, onClick },
      title1: {el: 'text', cols:8, clearable:true  },      
      
      task: {
        el: 'array', cols:12, container:{ is:'v-sheet', color:'green-lighten-5'},
        schema: {
          done2: { el: 'checkbox', cols:4, label: '2', color: 'green', offset: 0, onClick },
          title2: { el: 'text', cols:8, clearable:true},
          
          task:{
            el: 'array', container:{is:'v-sheet', color:'blue-lighten-4' },
            schema: {
              done3: { el: 'checkbox', cols:4, label: '3', color: 'blue', offset: 0, onClick },
              title3: {el: 'text', cols:8 , clearable:true, onInput },
            }
          } 
        } 
      }
    }
  }
 })

</script>

<style>
  #array-tasks-1-task-1-done .v-input__control { background-color: #afa;color:#060;}
  #array-tasks-1-task-2-done .v-input__control { background-color: #faa;color:#600;}
</style>