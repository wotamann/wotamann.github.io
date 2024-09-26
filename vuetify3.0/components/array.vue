<template>
  <v-container class="container-box">
  
  <h4>Add, Edit and Drag to Remove Items in dynamic nested Value-Array</h4>
  
     <!-- FORM-BASE-COMPONENT -->
     <v-form-base 
      id="array"
      :model="myModel"
      :schema="mySchema"
      :cols="6"
      @click="log"      
      @update:modelValue="log"      
    />  

    <!-- {{ myModel.tasks[0].task }} -->
      <!-- @update:model="log"       -->
   <!-- Stuff  -->    
   <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline'
import log from '@/lib'

const items = [1, 2, 3]

const get = (object, path, defaultValue) => path.split('.').reduce((o, p) => o ? o[p] : defaultValue, object)
const set = (object, path, value) => path.split('.').reduce((o,p,i) => o[p] = path.split('.').length === ++i ? value : o[p] || {}, object)

// const getTask = () =>  ({ done: false, title: Math.floor(Math.random() * 10) })
const getTask = () =>  ({ done: false, title: 'titelX' })
const addTask = (index) => { myModel.value.tasks[0].task.push(getTask()) }
// const addTask = (index) => { myModel.value.tasks[index[0]].task.push(getTask()) }
const removeTask = (index) => myModel.value.tasks[index[0]].task.splice(index[1], 1) 
const addItem = () => {
  myModel.value.tasks.push({
    title: myModel.value.tasks.length + 1,
    // task: [ getTask() ]
  })
}   
const addItemIn = () => {
  myModel.value.tasks.push({
    title: myModel.value.tasks.length + 1,
    // task: [ getTask() ]
  })
}   

const logInt =  (val)=> {
  console.log('ARRAY LOG', val);
      let { on, id, index, key, value, obj } = log(val)
      // add item
      if (key === 'add' && id === 'array') {
        $nextTick( addItem() )
      }
      // add task
      if (key === 'add' && id.includes('array-tasks-') ) {
        setTimeout( () => addTask(index), 250)
      }
      // remove task with checkbox
      if (key === 'done' && value === true) {
        setTimeout(() => removeTask(index), 100)
      }
      // remove task with drop
      if (key === 'delete' && obj.dragEvent) {
        setTimeout(() => removeTask(obj.dragEvent.index), 100)
      }
}

const myModel = ref({
  tasks: [
    { 
      title: 1,
      task: [
      { done: false, title: 'titel01' },
      { done: false, title: 'titel02' },
      { done: false, title: 'titel03' },
      ]
    },
    {
      done:false,
      title: 2,
      task: [
      { done: false, title: 'titel11' },
      { done: false, title: 'titel12' },
      ]
    }
  ]
 })

 const del =(v,a) =>{
  console.log('DELETE', v);
  console.log('DELETE', a);
  myModel.value.tasks[0]?.task.splice(1,1)
 }
 const mySchema = ref({
  tasks: {
    el: 'array',
    cols: 12,
    color:'#99ccff33',
    schema: {
      // Add Task Button in Schema only 
      done: { el: 'checkbox', cols:2, label: 'OUT', color: 'red', offset: 0, cols: 2, onClick:(ev, obj, emitted) => console.log('LOG # IN SCHEMA CLICK-EVENT #', ev, obj, emitted) },
      title: {el: 'text', cols:8  },
      add: { el: 'btn', cols:2, iconL: 'mdi-plus', text:'Add Out-Task', color: 'blue lighten-4', 
        onClick:(ev, obj, emitted) => {
          console.log('# CLICKEVENT OUT', ev, obj, emitted)   
          setTimeout( () => addItem(), 250)   
        }
      },
      // // delete: { el: 'btn', cols:2, iconL: 'mdi-delete', text:'Drop', color: 'blue lighten-4', drop:true, tooltip:'Drop Task to remove' },
      task: {
        el: 'array',
        color:'#99ccff15',
        offset:0,
        cols:12,              
        // key: 'title',
        schema: {
          done: { el: 'checkbox', cols:2, label: 'IN', color: 'green', offset: 0, cols: 2 },
          title: { el: 'text', cols:5, color: 'red', label:'Title Inside'},

          add: { el: 'btn', cols:2, iconL: 'mdi-plus', text:'Add IN-Task', color: 'blue lighten-4',
            onClick:(ev, obj, ec) => {
              console.log('##CLICKEVENT IN', ec, ec.globalModel.tasks[1].task ) 
              
              // myModel.value.tasks[ec.idx[0]].task.splice(ec.idx[1],0,getTask())
              // ec.globalModel.tasks[ec.idx[0]].task.push(getTask())   
              ec.globalModel.tasks[ec.idx[0]].task.splice(ec.idx[1],0,getTask())
            }
          },
          delete: { el: 'btn', cols:2, iconL: 'mdi-plus', text:'Delete IN-Task', color: 'red lighten-4',
            onClick:(ev, obj, ec) => {
              
              console.log('# CLICKEVENT OBJ ', ec.idx[0], ec.idx[1], obj ) 
              console.log('# CLICKEVENT IN', ec.globalModel.value ) 
              
              // myModel.value.tasks[ec.idx[0]].task.splice(ec.idx[1],1)
              ec.globalModel.tasks[ec.idx[0]].task.splice(ec.idx[1],1)
            //  return '1234567890'
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