<style scoped>
  #formbase.formbase-container { background-color: #fffee3; border:1px solid #ddd; padding:8px }
  #formbase :deep(  .slot) { font-size: 0.9rem; font-weight:400 ; width:100%; padding:6px; margin:2px  }
  #formbase :deep(  .form) { padding:8px;  color: #047a35; background-color: #49f28f3c;border: 1px solid #88e3ae; }
  #formbase :deep( .outside) { background-color: #9cc7ff25; border: 1px solid #376de8;}
  #formbase :deep( .outsidearr) { background-color: #b4d4fdc9; border: 1px solid #1641a6; }
  #formbase :deep( .outsidekey) { background-color: #71a3e4c9; border: 1px solid #1641a6; }
  #formbase :deep( .inside) { background-color: #ffd5db25; border: 1px solid #f55066; }
  #formbase :deep( .insidearr) { background-color: #febac3; border: 1px solid #ca3e51;}
  #formbase :deep( .insidekey) { background-color: #e47b89; border: 1px solid #ca3e51; }
  
  :deep( .key-formbase-tasks-1 ) { background-color: #7be47d30; border: 1px solid #ccc; }
  :deep( .key-formbase-tasks-1-tasks-in-1 ) { background-color: #7be47d30; border: 1px solid #ccc; }
  /* :deep( .key-formbase-tasks-1-tasks-in-1-tasks-duo-1 ) { background-color: #7be47d30; border: 1px solid #ccc; }
  :deep( .key-formbase-tasks-1-tasks-in-1-tasks-duo-1-title ) { background-color: #52b95355; border: 1px solid #ccc; } */
  :deep( .container-formbase-tasks-0 ) { background-color: #e4e27b50; border: 1px solid #ccc; }
  :deep( .container-formbase-tasks-0-tasks-in-1 ) { background-color: #e4e27b50; border: 1px solid #ccc; }
  /* :deep( .container-formbase-tasks-1-tasks-in-1-tasks-duo-1 ) { background-color: #e4e27b50; border: 1px solid #ccc; } */
</style>

<template>
  <h4>Slots & CSS in nested arrays</h4>v
  
  <v-form-base
    id="formbase"
    :row="{noGutters:true}"
    :model="myModel"
    :schema="mySchema" 
    @update:modelValue="log"
  >
   
    
    <template #slot-inject-label-container-formbase-tasks="{obj, idx, id, index, item}">
      <span class="outsidearr">CONT</span>
    </template>

    <!-- <template #slot-inject-label-key-in="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-key-formbase-tasks-1="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-key-formbase-tasks-1-tasks-in-0-title="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-key-in="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-el-v-checkbox="{obj, idx, id, index, item}"> -->
    <template #slot-inject-label-key-formbase-tasks-1-tasks-in-0-title="{obj, idx, id, index, item}">
    <!-- <template #slot-inject-label-el-formbase-tasks-1-tasks-in-0-v-text-field="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-el-v-text-field="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-el-v-text-field="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-key-in="{obj, idx, id, index, item}"> -->
      <span class="insidearr">KEY</span>
    </template>

  </v-form-base>

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib.js'

const getRandomBool = () => Math.random() >= 0.5
const getRandomInt = () => Math.floor(Math.random() * 1000)
const getDuoTask= () => { return { do: getRandomBool(), title: 'do' + getRandomInt() } }
const getInnerTask= () => { return { in: getRandomBool(), title: 'Inner' + getRandomInt(), tasksDuo:[{...getDuoTask()},{...getDuoTask()},] } }
const getOuterTask= () => { return { out: getRandomBool(), title: 'Outer' + getRandomInt(), 
tasksIn:[{...getInnerTask()}, {...getInnerTask()} ] } }

const myModel =ref({
  tasks:[
    getOuterTask(),
    getOuterTask(),
  ]        
})

const mySchema =ref({
  tasks: {
    el: 'array',
    cols:12,
    schema: {
      out: { el: 'checkbox', label: 'Out', color: 'blue', cols: 2 },
      title: { el: 'text', color: 'blue', cols:2 },
      tasksIn: {
        el: 'array',
        cols: { offset:1, col:7 },
        schema: {
          in: { el: 'checkbox', label: 'In', color: 'red', cols: 2 },
          title: { el: 'text', color: 'red', cols:2 },
          // tasksDuo: {
          //   el: 'array',
          //   cols: { offset:1, col:7 },
          //   schema: {
          //     do: { el: 'checkbox', label: 'Do', color: 'green', cols: 2, },
          //     title: { el: 'text', color: 'red', cols:4 }          
          //   }
          // }               
        }
      }          
    }
  }
})

</script>
