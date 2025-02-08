<style scoped>
  /*   
  :deep(.key-formbase-groupx-groupi8-groupcheck4) { color:#21119f; background-color: #eae8f9; border: 2px #cce}
  :deep(.type-formbase-text) { background-color: rgb(254, 248, 210);color:rgb(122, 91, 0);}
  :deep( .key-formbase-arr-0-baseTitle .v-input__control) { background-color: #e9fee9;color:#060;}
  :deep( .key-formbase-arr-1-baseTitle .v-input__control) { background-color: #fce2e2;color:#600;} 
  */
  
  /* 
  :deep(.key-formbase-tasks-0-title-1 .v-input__control) { background-color: #17dbaa;color:#600;}
  :deep( .key-formbase-tasks-1-task-0-title-2 .v-input__control) { background-color: #fcffcd;color:#007b25;}
  :deep( .key-formbase-tasks-0-title .v-input__control) { background-color: #3361e0;color:#ffffff;}
  :deep( .key-formbase-tasks-1-taS0k-0-title2 .v-input__control) { background-color: #b7caff;color:#043f97;} 
  */
  :deep(.tooltip-background-color) { background-color: #cfd4df;color:#242a34;} 
  :deep(.tooltip-background-green) { background-color: #24990a;color:#ffffff;} 
  :deep(.tooltip-background-blue) { background-color: #2246d8;color:#ffffff;} 

  
</style>

<template>
    
  <h4 >Developer Zone</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="formbase"
      :model="myModel"
      :schema="mySchema"
      :cols="12"
      :config="{ 
        _useOrder:true
      }"  
      @update:model-value:formbase-baseTitle="logAll"
      @click:formbase-groupX-groupI8-groupCheck4="logAll"
      @click="logClick"
      @update:model-value:formbase-tasks-1-ta-s0k-0-task-u-p-0-group-i8-group-check4="logElement"
      @update:modelValue:formbase-tasks-1-taS0k-0-taskUP-0-groupI8-groupTitle="logElement"
      @update:model-value="logModel"
      :tooltip="{ contentClass:'tooltip-background-blue', text:'@content'}"
      />  
      <!-- ATTR ORDER IS RELEVANT  'click:formbase...' must be before 'click' fall through, otherwise it consumes all clicks ...  ! -->
      <!-- 
        
      :tooltip="{ contentClass:'tooltip-background-blue', location:'start',closeDelay:150, text:'@value'}"
        @input="log" 
        @click:prepend-inner:formbase-base-title1="(e,m)=>console.log('CLICK PREPEND  ModelValue', e)"
        @update="(e,m)=>console.log(e)"
        @update="(e)=> log(e,'Update Event!')"
        @update="(e)=> e.set(e.modelValue + 'update ')"
        @input="(e)=> e.set(e.modelValue + 'input ')"
        @input="(e,m)=> e.set('UPDATE EVENT! ')"
        @change="(e,m)=>log(e,'CHANGE EVENT! ')"
        @change="(e,m)=>log(e,'CHANGE EVENT! ')"
        @click:append:formbase-baseTitle="logClick"
        @click:prependInner:formbase-baseTitle="logClick"
        @click:formbase-baseTitle="logElement"
        @update:modelValue="logModel"
        @update:modelValue:formbase-baseTitle="logElement"
        @update:modelValue="logPlain"
        @click:formbase-base8Check="log"
        @click:appendInner="logAll"
        @input="log" 
        @click="logClick"
        @click:append="logAll"
        
        @blur="logAll"
        @click:prepend-inner="logPlain"
        @click="logPlain"
        @blur="logAll"
        @focus="logAll"
        @click:clear:formbase-baseTitle="logPlain"
        @click:prepend-inner:formbase-baseTitle="logPlain"  
        @click="logAll"
        @click:formbase-groupX="logAll"
        @click:formbase-tasks-1-taS0k-0-taskUP-0-done3="log"
        @click:append="logAll"
        @click="logPlain"
        @click:formbaseBase8="log"
        @click:formbase-base8="log"
        @click:formbasebase8="log"
        @click="logPlain"
        @focus="logPlain"
        @click:formbase-baseTitle="log"
        @click="logAll"
        @click:formbase-base8="log"
        @click:formbase-base8Check="log"
        @click:formbase-groupX-groupCheck="log"
        @click:formbase-groupX-groupCheck="log"
        @click:formbaseTasks1TaS0k0DoneX1Test="log"
        @click:formbase-tasks-0-doneX1Test="log"
        @click:formbase-base="log"
        
        @input:formbase-group-group-check="log"
        :use-form="{ class:'pa-4', style:'backgroundColor:#EEBBBB'}"
        
        @click:clear:formbase-arr-0-base-title="log"
        @update:modelValue="log"
        @click:formbase-tasks-0-done="log"
        @update:modelValue="log"      
        @update:modelValue:formbase-base-check="log"      
                  
        @blur="log"      
    -->
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
<infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logAll, logPlain, logClick, logInline,logModel, logElement } from '@/lib'
/*
  COMPONENT  
  @input:formbase-group-group-check="log"
  @input="log"
  INLINE
  onInput:(ev => )
  
*/


const debounce = (func, delay, timer=null) => (...args) => { clearTimeout(timer); timer = setTimeout(() => func.apply(this, args), delay); 1 };

const tooltip = ref(null)

const onMouseEvent = (val, ev) => console.log(`LOG#CI-INLINE |MOUSE-EVENT:'${ev.event?.type}'|`, val, ev)
const onDebouncedMouseEvent = debounce( onMouseEvent , 660)
const onClick =(val, ev) => console.log('LOG#CI-INLINE |CLICK|', val, ev)
const onFocus =(val, ev) => console.log('LOG#CI-INLINE |FOCUS|', val, ev)
const onInput =(val, ev) => { let valNew = val+'|Inp|'; console.log('LOG#CI-INLINE |INPUT|', val,'->', valNew, ev);  return valNew }
// ['onClick_clear']:onClickClear
const onClickClear =(val, ev ) => { console.log('LOG#CI-INLINE |CLICK:CLEAR|', val, ev); return '|Cleared|' }
//  ['onClick_append']
const onClickAppend =(val, ev ) => { console.log('LOG#CI-INLINE |CLICK APPEND ICON|', val, ev, 'GET VALUE', ev) }
//  ['onClick_prependInner']
const onClickPrependInner =(val, ev) => { console.log('LOG#CI-INLINE |CLICK PREPEND INNER ICON|', val, ev) }
// ['onUpdate_modelValue']:onUpdateModelValue
const onUpdateModelValue =(val, ev ) => { let valNew = val+'|Update|';console.log('LOG#CI-INLINE |UPDATE:MODELVALUE|', val,'->', valNew, ev);  return valNew }

const viewText = { el: 'text', label:'Text BOTH',  onInput, ['onUpdate_modelValue']:onUpdateModelValue}
const viewTextMV = { el: 'text', label:'Text MV', ['onUpdate_modelValue']:onUpdateModelValue}
const viewTextINP = { el: 'text', label:'Text INP', onInput}
const viewCheck = { el: 'checkbox', label:'Text', color:'brown', cols:2,}
const container = { is:'v-card', class:'pa-1', color:'orange-lighten-4'}

const myModel = ref({  
  // base8:true,
  // base8Check:true,
  // onBoth:'both',
  // onModelValue:'model',
  // onInput:'input',
  // baseCheck:true,
  // baseTitle:'Base',
  // baseTitle1:'Base1',
  // viewText:'myview',
  // viewCheck: true,
  deep:{
    deepCheck:true,
    deepTitle:'Deep Nested',
  },

  groupX:{
    groupCheck:true,
    groupTitle:'Group',
    groupI8:{
      groupCheck4:true,
      groupTitle:'Group',
  }
  },
  arr:[
    {baseTitle:'fixedArray 1'},
    {baseTitle:'fixedArray 2'},
    {baseTitle:'fixedArray 3'},
  ],
  tasks: [
    { 
      doneX1Test:true,
      title1: 'Array 0'
    },
    { 
      doneX1Test:false,
      title1: 'Array 1',
      taS0k: [{
        doneX1Test:true,
        title2: 'Array 2',
        taskUP: [{
          done3:true,
          title3: 'Array 3',
          titleGreat: 'Array GREAT',
          groupI8:{
              groupCheck4:true,
              groupTitle:'Group',
          }
        }]
      }]
    },
   
  ]
})

const mySchema = ref({
  // base8: { el: 'checkbox', cols:2, label: 'BASE', color: 'brown',onFocus:logInline, onClick:logInline}, 
  // base8Check: { el: 'checkbox', cols:2, label: 'BASECHECK', color: 'red', onClick:logInline },
  // base8Check: { el: 'checkbox', cols:2, label: 'BASE8Check', color: 'red', onInput},
  
  baseTitle: {el: 'text', cols:3, tooltip:true, label: 'BASE', onMouseleave:onDebouncedMouseEvent, onMouseenter:onDebouncedMouseEvent,  onUpdateModelValue},  
  // baseTitle: {el: 'text', cols:4, label: 'BASE', clickOutside:(v, e, obj, index, id) => console.error(v, e, obj, index, id)},  
  // baseTitle: {el: 'text', cols:3, label: 'BASE', ['onUpdate_modelValue']:logInline },  
  // baseTitle: {el: 'text', cols:4, label: 'BASE1', clearable:true, appendIcon:'mdi-menu', prependInnerIcon:'mdi-menu' },
  
  // baseTitle1: {el: 'text', cols:4, label: 'BASE', clearable:true, appendIcon:'mdi-menu', prependInnerIcon:'mdi-menu' },
  baseTitle2: {el: 'text', cols:4, label: 'Tooltip2', tooltip:{ contentClass:'tooltip-background-green',location:'start', text:'HWELLO TOOLI'}  },
  baseTitle3: {el: 'text', cols:4, hint:'PSST Hinweis',label: 'Tooltip3', tooltip:{ text:'@hint', location:'top',}  },
  // baseTitle2: {el: 'text', cols:4, label: 'Tooltip', tooltip:'HWELLO TOOLI'  },
  
  baseTitle1: {el: 'text', cols:3, label: 'BASE1', tooltip:'SO ein Blödsinn', clearable:true,  getVal:(e) => e?.toUpperCase(), 
    appendIcon:'mdi-menu', 
    prependInnerIcon:'mdi-menu',
    onClickAppend, 
    onClickPrependInner ,
    onClickClear ,
    //   // onInput,   
  },
  x:{el:'v-spacer', cols:2},
  // button: { el:'btn', block:true, text:'click outside',  clickOutside: (a, o, i) => console.log('OUTSIDE', i, o?.key, a) },  // https://vuetifyjs.com/en/api/v-btn/    
  // baseTitle: {el: 'text', cols:4, label: 'BASE', clearable:true, onClickClear, onInput, ['onUpdate_modelValue']:onUpdateModelValue },
  
  deep:{ 
    deepButton: { el: 'btn', cols:2, text: 'DEEP X', color: 'green' },
    deepCheck: { el: 'checkbox', cols:2, label: 'DEEP', color: 'green' },
    deepTitle: {el: 'text', cols:4, label: 'DEEP', clearable:true, onInput }    
  },

  groupX:{ 
    el:'group',
    container:{ is:'v-sheet', class:'pa-1', color:'yellow-lighten-4'},
    schema:{
      // groupCheck: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3'  },
      groupCheck: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3' },
      // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true,onInput,['onUpdate_modelValue']:onUpdateModelValue },
      // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true },
      // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true, onClickClear  },
      groupI8:{ 
        el:'group',
        container:{ is:'v-sheet', class:'pa-1', color:'amber-lighten-3'},
        schema:{
          // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3',onInput: logInline, onClbick:logInline },
          // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3'},
          // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3',onClickFormbaseGroupXGroupI8GroupCheck4:onClick },
          groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3', onClick  },
          // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true, onInput,['onUpdate_modelValue']:onUpdateModelValue },
          // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true,onClickClear, ['onUpdate_modelValue']:onUpdateModelValue },
          // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true, onInput },
          groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true, onClickClear  },
        }
      },
    }
  },

  arr:[ 
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY0 ', clearable:true }},
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY1 UPDATE', clearable:true }},
    // {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY2 UPDATE', onClick }},
    {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY1 UPDATE', clearable:true, onUpdateModelValue }},
    // {baseTitle: {el: 'text', cols:4, label: 'NESTED ARRAY2 INPUT', clearable:true, onInput, }},
  ],
   
  // view1: { 
  //   el:'wrap', cols:6,
  //   container:{ is:'v-card', title:'view1',  color:'brown-lighten-5'},
  //   schema:{
  //     viewText,
  //     viewCheck,
  //     view2: { 
  //       el:'wrap', cols:12,         
  //       container:{ is:'v-card', title:'view2', color:'brown-lighten-3'},
  //       schema:{
  //         viewText,          
  //         viewCheck
  //       }
  //     }
  //   }
  // },
  
  // tasks: {
  //   el: 'array', cols:6, container:{ is:'v-card', title:'ARRAY', color:'red-lighten-5'},
  //   schema: {
  //     // Add Task Button in Schema only 
  //     doneX1Test: { el: 'checkbox', cols:4, label: '1', color: 'red', offset: 0, cols: 2,  },
  //     // done1: { el: 'checkbox', cols:4, label: '1', color: 'red', offset: 0, cols: 2, onInput: logInline },
  //     title1: {el: 'text', cols:8, clearable:true  },      
      
  //     taS0k: {
  //       el: 'array', cols:12, container:{ is:'v-sheet', color:'green-lighten-5'},
  //       schema: {
  //         doneX1Test: { el: 'checkbox', cols:4, label: '2', color: 'green', offset: 0 },
  //         title2: { el: 'text', cols:8, clearable:true},
  //         // title2: { el: 'text', cols:8, clearable:true, clickOutside:(v, e, obj, index, id) => console.error(v, e, obj, id, index)},
          
  //         taskUP:{
  //           el: 'array', container:{is:'v-sheet', color:'blue-lighten-4' },
  //           schema: {
  //             done3: { el: 'checkbox', cols:4, label: '3', color: 'blue', offset: 0 },
  //             title3: {el: 'text', cols:4 , clearable:true },
  //             titleGreat: {el: 'text', cols:4 , clearable:true },
  //             groupI8:{ 
  //               el:'group',
  //               container:{ is:'v-sheet', class:'pa-1', color:'yellow-lighten-3'},
  //               schema:{
  //                 // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3',onInput: logInline, onClbick:logInline },
  //                 // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3'},
  //                 // groupCheck4: { el: 'checkbox', cols:2, label: 'Group', color: 'yellow-darken-3',onClickFormbaseGroupXGroupI8GroupCheck4:onClick },
  //                 groupCheck4: { el: 'checkbox', cols:3, label: 'Group', color: 'yellow-darken-3' },
  //                 // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true,onInput, ['onClick_clear']:onClickClear, onClick:(v,ev)  => ev.set('EV.SET = ?') },
  //                 groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true },
  //                 // groupTitle: {el: 'text', cols:6, label: 'Group', clearable:true, onClickClear  },
  //               }
  //             },
  //           }
  //         } 
  //       } 
  //     }
  //   }
  // }

 })

</script>
