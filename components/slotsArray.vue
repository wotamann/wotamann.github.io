<style>
  #slot-form { background-color: #fafafa; border:1px solid #ddd;  }
  #slot-form .slot{ font-size: 0.9rem; font-weight:400 ; width:100%; padding:6px; margin:2px  }
  #slot-form .form{ padding:8px;  color: #047a35; background-color: #49f28f3c;border: 1px solid #88e3ae; }
  #slot-form .outside { background-color: #9cc7ff25; border: 1px solid #376de8;}
  #slot-form .outsidearr { background-color: #b4d4fdc9; border: 1px solid #1641a6; }
  #slot-form .outsidekey { background-color: #71a3e4c9; border: 1px solid #1641a6; }
  #slot-form .inside { background-color: #ffd5db25; border: 1px solid #f55066; }
  #slot-form .insidearr { background-color: #febac3; border: 1px solid #ca3e51;}
  #slot-form .insidekey { background-color: #e47b89; border: 1px solid #ca3e51; }
</style>
<template>
  <h4>Showcase for slots in nested arrays</h4>

  <!-- 
    If 'myModel' is an array you can wrap it into an Object like this. 
    :model="{arr: myModelArray}"
  -->
  
  <v-form-base
    id="slot-form"
    :model="myModel"
    :schema="mySchema" 
    :row="{ justify:'space-around',  noGutters:true, align:'end', alignContent:'stretch' }"
    :cols="5"
    @update:modelValue="log"
  >
      <!-- SLOT @TOP/BOTTOM FORM -->
      <template #slot-top-slot-form={id}>
        <h4 class="slot form">Slot at Top of Form '{{id}}'</h4>
      </template>        
      <template #slot-bottom-slot-form={id}>
        <h4 class="slot form">Slot at Bottom of Form '{{id}}'</h4>
      </template>

      <!-- SLOT @TOP/BOTTOM OF ARRAY TASKS -->
      <template #slot-top-key-slot-form-tasks="{obj}">
        <div class="slot outsidekey">Slot at Top of Key '{{obj.key}}'</div>
      </template>
      <template #slot-bottom-key-slot-form-tasks="{obj}">
        <div class="slot outsidekey">Slot at Bottom of Key '{{obj.key}}'</div>
      </template>
      
      <!-- SLOT @TOP/BOTTOM OF ARRAY TASKS-IN -->
      <template #slot-top-key-slot-form-tasks-0-tasksIn="{obj}">
        <div class="slot insidekey">Slot at Top of Key '{{obj.key}}'</div>
      </template> 
      <template #slot-bottom-key-slot-form-tasks-0-tasksIn="{obj}">
        <div class="slot insidekey">Slot at Bottom of Key '{{obj.key}}'</div>
      </template>

      <!-- SLOT @TOP OF EACH ITEM IN ARRAY TASKS   -->
      <template #slot-top-array-slot-form-tasks="{obj, idx, item}">
        <div class="slot outsidearr">Slot at Top of Item {{idx}} in Array '{{obj.key}}'</div>
      </template>
      <template #slot-bottom-array-slot-form-tasks="{obj, idx}">
        <div class="slot outsidearr">Slot at Bottom of Item {{idx}} in Array '{{obj.key}}'</div>
      </template> 

      <!-- SLOT @KEY IN ARRAY TASKS  -->
      <template #slot-top-key-slot-form-tasks-0-out="{obj, idx}">
        <div class="slot outside">Slot at Top of Key '{{obj.key}}'</div>
      </template>
      <template #slot-bottom-key-slot-form-tasks-0-out="{obj, idx}">
        <div class="slot outside">Slot at Bottom of Key '{{obj.key}}'</div>
      </template>

      <!-- SLOT @TOP OF EACH ITEM IN ARRAY TASKS-IN-->
      <template #slot-top-array-slot-form-tasks-0-tasksIn="{obj, idx, item}">
        <div class="slot insidearr">Slot at Top of Item {{ idx }} in Array '{{obj.key}}'</div>
      </template>
      
      <!-- SLOT @KEY IN ARRAY TASKS-IN -->
      <template #slot-top-key-slot-form-tasks-0-tasksIn-0-in="{obj, idx}">
        <div class="slot inside">Slot at Top of Key '{{obj.key}}' in tasksIn[{{ idx }}]</div>
      </template>
      <template #slot-bottom-key-slot-form-tasks-0-tasksIn-0-in="{obj, idx}">
        <div class="slot inside">Slot at Bottom of Key '{{obj.key}}' in tasksIn[{{ idx }}]</div>
      </template>


      <!-- INJECT SLOT IN COMPONENT <template #slot-inject-[verb]-key-[id]-[key]="{obj}"> -->
      <template #slot-inject-label-key-slot-form-tasks-1-out="{obj, idx, id, index, item}">
        <span class="outsidearr">INJECTED LABEL</span>
      </template>
      <template #slot-inject-label-key-slot-form-tasks-0-tasksIn-1-in="{obj, idx, id, index, item}">
        <span class="insidearr">INJECT LABEL</span>
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
const getInnerTask= () => { return { in: getRandomBool(), title: 'Inner' + getRandomInt() } }
const getOuterTask= () => { return { out: getRandomBool(), title: 'Outer' + getRandomInt(), tasksIn:[{...getInnerTask()}, {...getInnerTask()} ] } }

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
    rows:{justify:'space-around',  noGutters:true, align:'end', alignContent:'stretch'},
    schema: {
      out: { el: 'checkbox', label: 'Out', color: 'blue', cols: 2 },
      title: { el: 'text', color: 'blue', cols:4 },
      tasksIn: {
        el: 'array',
        row:{ align:'start'} ,
        cols: 6,
        schema: {
          in: { el: 'checkbox', label: 'In', color: 'red', cols: 4, },
          title: { el: 'text', color: 'red', col:8 }          
        }
      }          
    }
  }
})

</script>
