
<style>
  #formbase-id-group { color:#0a33a3; background-color: #d2d2d23e; border: 1px solid #eee;  }
  /* .key-formbase-id-group-group-check { color:#ffffff; background-color: #296898bf} */
  /* .key-formbase-id-group-group-title { color:#ffffff; background-color: #296898bf} */
</style>

<template>
  <v-container class="container-box-new">  
   <h4>Use Component-Events in Formbase</h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base 
        id="formbase-id"
        :model= "myModel"
        :schema= "mySchema"
        :cols= "12"
        
        @click:prepend="logIcon"
        @click:append-inner="logIcon"                   
        @click:clear:formbase-id-group-groupTitle="logElement"
        @update:customEvent="logCustomEvent"      
          
      />
        
        <!-- WATCH ALL EVENTS - LOGGING ON CONSOLE  -->
        <!-- 
          SIGNATURE:   
          @EVENT = 'Logger'
          @EVENT:[FORMBASE ID]-[ELEMENT]  = 'log...'
          
          // WATCH ALL EVENTS - LOGGING ON CONSOLE 
          
          @update:modelValue:formbase-id-group-groupCheck="logElement" 
          @update:modelValue:formbase-id-array-1-arrTitle="logElement"      
          @update:modelValue="logModel"      
          @update:customEvent="logCustomEvent"      
          
          @focus="log"
          @focus:formbase-id-array-0-arr-title="log" 
          @focus:formbase-id-array-1-arrTitle="log"
          
          @click="log"      
          @click:clear="log"
          @click:prepend="log"  
          @click:prepend-inner="log"  
          @click:append="log"  
          @click:append-inner="log"  
          @click:prepend:formbase-id-title="logIcon" 
          @click:append-inner:formbase-id-title="logIcon"           
          @click:clear:formbase-id-group-groupTitle="logElement"
          @click:formbase-id-group-groupCheck="logElement" 
          
          @input="log" 
          @input:clear:formbase-id-group-groupTitle="logInput"
          
          @blur="log"
          @focus:formbase-id-array-1-arr-title="log" 
          
        -->
 
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted, nextTick, warn } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logIcon, logElement, logModel, logCustomEvent } from '@/lib.js'
   
  
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