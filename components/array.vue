<template>
  <h4>Add, edit and remove items in nested array</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
    :model="myModel"
    :schema="mySchema"
    @click="log"
    />
    
   <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
   <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import { ref } from 'vue'
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log } from '@/lib'

const createTask = () =>  ({ done: false, title: 'titel added '+Math.floor(Math.random()*100), task:[] })
const createInnerTask = () =>  ({ done: false, title: 'titel added '+Math.floor(Math.random()*100) })

// IMPORTANT !!!
// don't return value in any following function, because inline event like 'onClick:removeOuterTask' would would manipulate model data with return value  
const addOuterTask = (val, ev) => { ev.model.tasks.push( createTask()) }
const addInnerTask = (val, ev) => { ev.model.tasks[ev.indexOfArrays[0]].task.push( createInnerTask() ) }
const removeOuterTask = (val, ev) => { ev.model.tasks.splice(ev.indexOfArrays[0],1) } // don't return value here from splice!!!
const removeInnerTask = (val, ev) => { ev.model.tasks[ev.indexOfArrays[0]].task.splice(ev.indexOfArrays[1],1) } // don't return value here from splice!!!

const myModel = ref({
  tasks: [
    { 
      title: 1,
      task: [
      { done: false, title: 'titel 1' },
      ]
    },
    {
      done:false,
      title: 2,
      task: [
      { done: false, title: 'titel 1' },
      { done: false, title: 'titel 2' },
      ]
    }
  ]
})

 const mySchema = ref({
  add: { el: 'btn', block:true, icon: 'mdi-plus', text:'Out-Task', color: 'blue-darken-3', onClick:addOuterTask },
  tasks: {
    el: 'array',
    container:{ el:'v-sheet', class:'my-4 pa-2', color:'grey-lighten-3' },
    cols: 12,
    schema: {
      done: { el: 'checkbox', cols:2, label: 'OUT' },
      title: {el: 'text', cols:6  },
      remove: { el: 'btn', cols:4, block:true, icon: 'mdi-delete', text:'OUT-Task', color: 'red-darken-3', onClick:removeOuterTask},
      add: { el: 'btn', block:true, cols:{ cols:11, offset:1}, icon: 'mdi-plus', text:'IN-TASK', color: 'blue-lighten-1', onClick: addInnerTask }, // don't return value here from splice!!!      
      
      task: {
        el: 'array',
        container:{ el:'v-sheet', class:'my-2 pa-2', color:'grey-lighten-2' },
        cols:{ cols:11, offset:1},              
        schema: {
          done: { el: 'checkbox', cols:2, label: 'IN', color: 'blue' },
          title: { el: 'text', cols:4, color: 'red', label:'Title Inside'},
          remove: { el: 'btn', cols:3, block:true, icon: 'mdi-delete', text:'IN-TASK', color: 'red-lighten-1', onClick:removeInnerTask}
        }
      }
    }
  }
 })

</script>
