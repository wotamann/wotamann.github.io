<template>
  <h4>Try drag & drop</h4>

  <!-- FORM-BASE-COMPONENT -->    
  <v-form-base 
    :model="myModel"
    :schema="mySchema"
    @drop="logElement"
    @dragstart="logElement"
    />
    <!-- @input="logElement" -->

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import VFormBase from '@/vformbase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logElement } from '@/lib'

  const onDragstart = (val, {event, obj} ) => event.dataTransfer.setData("data", val);
  const onDrop=(val, {event, obj} ) => event.dataTransfer.getData("data") 
  const onDragover = (val, {event, obj} ) =>  {
    event.dataTransfer.dropEffect='copy'
    // drop only on elements with prop 'onDrop' 
    obj.schema.onDrop  ? event.preventDefault() : null 
  }
    
  const myModel = ref({
    dragOnly: 'Drag only',
    dragDrop: 'Drag & Drop',
    drop: 'Drop Value from Target',
    noDragDrop: 'No Drag, No Drop',
  })

  const mySchema = ref({
    dragOnly: {  el:'text', draggable:true, class:'dragable', onDragstart },                 
    dragDrop: {  el:'text', draggable:true, class:'dragable', onDragover, onDrop, onDragstart },                 
    drop: {  el:'text', onDragover, onDrop,  class:'dropable'  },                 
    noDragDrop: {  el:'text', readonly:true, class:'nodragdrop' },                 
  })
    
</script>

<style scoped>
 :deep(.dragable) .v-input__control{ background-color: #ffffa786;color:#7e7c00;}
 :deep(.dropable) .v-input__control{ background-color: #dffed9;color:#187605;}
 :deep(.nodragdrop) .v-input__control{ background-color: #fed9d9;color:#610505;}
</style>
