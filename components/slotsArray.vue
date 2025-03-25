<style scoped>
  .formbase-container { background-color: #fffee3; border:1px solid #ddd; padding:8px }
   :deep(  .slot) { font-size: 0.9rem; font-weight:400 ; width:100%; padding:6px; margin:2px  }
   :deep(  .form) { padding:8px;  color: #047a35; background-color: #49f28f3c;border: 1px solid #88e3ae; }
   :deep( .outside) { background-color: #9cc7ff25; border: 1px solid #376de8;}
   :deep( .outsidearr) { background-color: #b4d4fdc9; border: 1px solid #1641a6; }
   :deep( .outsidekey) { background-color: #71a3e4c9; border: 1px solid #1641a6; }
   :deep( .inside) { background-color: #ffd5db25; border: 1px solid #f55066; }
   :deep( .insidearr) { background-color: #febac3; border: 1px solid #ca3e51;}
   :deep( .insidekey) { background-color: #e47b89; border: 1px solid #ca3e51; }
   :deep( .counter) { font-size: 1rem; color:#ca3e51 }
</style>

<template>
  <h4>Slots & CSS in nested arrays</h4>
  
  <v-form-base
    :model="myModel"
    :schema="mySchema" 
    @update:modelValue="log"
  >
    <!-- SLOT @TOP/BOTTOM FORM -->
    <template #slot-top-formbase={id}>
      <h4 class="slot form">Slot at Top of Form '{{id}}'</h4>
    </template>        
    <template #slot-bottom-formbase={id}>
      <h4 class="slot form">Slot at Bottom of Form '{{id}}'</h4>
    </template>

    <!-- SLOT @TOP/BOTTOM OF ARRAY TASKS -->
    <template #slot-top-key-formbase-tasks="{obj}">
      <div class="slot outsidekey">Slot at Top of Key '{{obj.key}}'</div>
    </template>
    <template #slot-bottom-key-formbase-tasks="{obj}">
      <div class="slot outsidekey">Slot at Bottom of Key '{{obj.key}}'</div>
    </template>
    
    <!-- SLOT @TOP/BOTTOM OF ARRAY TASKS-IN -->
    <template #slot-top-key-formbase-tasks-0-tasks-in="{obj}">
      <div class="slot insidekey">Slot at Top of Key '{{obj.key}}'</div>
    </template> 
    <template #slot-bottom-key-formbase-tasks-0-tasks-in="{obj}">
      <div class="slot insidekey">Slot at Bottom of Key '{{obj.key}}'</div>
    </template>

    <!-- SLOT @TOP OF EACH ITEM IN ARRAY TASKS   -->
    <template #slot-top-array-formbase-tasks="{obj, idx, item}">
      <div class="slot outsidearr">Slot at Top of Item {{idx}} in Array '{{obj.key}}'</div>
    </template>
    <template #slot-bottom-array-formbase-tasks="{obj, idx}">
      <div class="slot outsidearr">Slot at Bottom of Item {{idx}} in Array '{{obj.key}}'</div>
    </template> 

    <!-- SLOT @KEY IN ARRAY TASKS  -->
    <template #slot-top-key-formbase-tasks-0-out="{obj, idx}">
      <div class="slot outside">Slot at Top of Key '{{obj.key}}'</div>
    </template>
    <template #slot-bottom-key-formbase-tasks-0-out="{obj, idx}">
      <div class="slot outside">Slot at Bottom of Key '{{obj.key}}'</div>
    </template>

    <!-- SLOT @TOP OF EACH ITEM IN ARRAY TASKS-IN-->
    <template #slot-top-array-formbase-tasks-0-tasks-in="{obj, idx, item}">
      <div class="slot insidearr">Slot at Top of Item {{ idx }} in Array '{{obj.key}}'</div>
    </template>
    
    <!-- SLOT @KEY IN ARRAY TASKS-IN -->
    <template #slot-top-key-formbase-tasks-0-tasks-in-0-in="{obj, idx}">
      <div class="slot inside">Slot at Top of Key '{{obj.key}}' in tasksIn[{{ idx }}]</div>
    </template>
    <template #slot-bottom-key-formbase-tasks-0-tasks-in-0-in="{obj, idx}">
      <div class="slot inside">Slot at Bottom of Key '{{obj.key}}' in tasksIn[{{ idx }}]</div>
    </template>
    
  
    <!-- INJECT SLOT IN COMPONENT
      <template #slot-inject-[verb]-[container]-[id]-[path]="{ ... }">
      <template #slot-inject-[verb]-[el]-[element]="{...}">
      <template #slot-inject-[verb]-[el]-[path-element]="{...}">
      <template #slot-inject-[verb]-[key]-[key]="{...}">
      <template #slot-inject-[verb]-[key]-[path-key]="{...}">
    -->

    <template #slot-inject-counter-el-v-text-field="{counter, max, value}">
      <div class="counter">Injected Counter:{{ value }}/{{ max }}</div>
    </template>
    
    <!-- <template #slot-inject-label-container-formbase-tasks-0="{obj, idx, id, index, item}"> -->
    <template #slot-inject-label-container-formbase-tasks-0-tasks-in="{obj, idx, id, index, item}">
      <span class="form">Inject label container tasks-0</span>
    </template>
      
    <template #slot-inject-label-el-v-checkbox="{obj, idx, id, index, item}">
    <!-- <template #slot-inject-label-el-formbase-tasks-1-v-text-field="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-el-v-checkbox="{obj, idx, id, index, item}"> -->
      <div class="outsidearr">Inject label element v-checkbox</div>
    </template>

    <!-- <template #slot-inject-label-key-title="{obj, idx, id, index, item}"> -->
    <!-- <template #slot-inject-label-key-formbase-tasks-1-tasks-in-0-inner="{obj, idx, id, index, item}"> -->
    <template #slot-inject-label-key-inner="{obj, idx, id, index, item}">
      <span class="insidearr">Inject label key inner</span>
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
const sss = ref('123')
const getRandomBool = () => Math.random() >= 0.5
const getRandomInt = () => Math.floor(Math.random() * 1000)
const getInnerTask= () => { return { inner: getRandomBool(), title: 'Inner ' + getRandomInt() } }
const getOuterTask= () => { return { out: getRandomBool(), title: 'Out ' + getRandomInt(), tasksIn:[{...getInnerTask()}, {...getInnerTask()} ] } }

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
      title: { el: 'text', color: 'blue', cols:4 },
      tasksIn: {
        el: 'array',
        cols: 6,
        schema: {
          inner: { el: 'checkbox', label: 'In',  color: 'red', cols: 4, },
          title: { el: 'text', color: 'red', maxlength:15, col:8 }          
        }
      }          
    }
  }
})

</script>
