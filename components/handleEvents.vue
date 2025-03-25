<template>
    <h4>Use Component-Events in Formbase</h4>
    
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="formbase-container"
      :model= "myModel"
      :schema= "mySchema"
      @click:prepend="logIcon"
      @click:append-inner="logIcon"                   
      @focus:formbase-container-group-groupTitle="logFocus"
      @click:clear:formbase-container-group-groupTitle="logElement"
      @update:customEvent:formbase-container-array-0-arr-title="logElement"      
      @update:customEvent="logCustomEvent"      
    />

    <!-- WATCH ALL EVENTS - LOGGING ON CONSOLE  -->
    <!-- 
      SIGNATURE:   
      @EVENT = 'Logger'
      @EVENT:[FORMBASE ID]-[ELEMENT]  = 'log...'
      
      // WATCH ALL EVENTS - LOGGING ON CONSOLE 
      
      @update:modelValue:formbase-container-group-groupCheck="logElement" 
      @update:modelValue:formbase-container-array-1-arrTitle="logElement"      
      @update:modelValue="logModel"      
      @update:customEvent="logCustomEvent"      
      
      @focus="log"
      @focus:formbase-container-array-0-arr-title="log" 
      @focus:formbase-container-array-1-arrTitle="log"
      
      @click="log"      
      @click:clear="log"
      @click:prepend="log"  
      @click:prepend-inner="log"  
      @click:append="log"  
      @click:append-inner="log"  
      @click:prepend:formbase-container-title="logIcon" 
      @click:append-inner:formbase-container-title="logIcon"           
      @click:clear:formbase-container-group-groupTitle="logElement"
      @click:formbase-container-group-groupCheck="logElement" 
      
      @input="log" 
      @input:clear:formbase-container-group-groupTitle="logInput"
      
      @blur="log"
      @focus:formbase-container-array-1-arr-title="log" 
      
    -->

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted, nextTick, warn } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logIcon, logElement, logFocus, logCustomEvent } from '@/lib.js'
     
  // MODEL
  const myModel = ref({
    check:true,
    title:'title',
    group: {
      groupCheck:true,
      groupTitle:'groupTitle',
    },
    array:[
      { arrTitle:'arrTitle 0'},
      { arrTitle:'arrTitle 1'}
    ]
  })
  
  // --- SCHEMA --- 
  const mySchema = ref({
    check: { el: 'checkbox', cols:2, label: 'check' },
    title: { el:'text', cols:9, lable:'title', appendInnerIcon:'mdi-menu', prependIcon:'mdi-menu'  }, 

    group:{ 
      el:'group',
      container:{ el:'v-sheet'},
      schema:{
        groupCheck: { el: 'checkbox', cols:2, label: 'groupCheck' },
        groupTitle: {el: 'text', cols:8, label: 'groupTitle', clearable:true  },
      }
    },
    array:[ 
      {arrTitle: {el: 'text', cols:8, label: 'arrTitle 0', clearable:true }},
      {arrTitle: {el: 'text', cols:8, label: 'arrTitle 1', clearable:true }},
    ],
  })

</script>