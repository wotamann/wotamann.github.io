<style scoped>
  :deep(.treeview-background-red) { background-color: #fffafa;color:#e01c3d;} 
  :deep(.treeview-background-blue) { background-color: #f8f8ff;color:#2246d8;} 
</style>

<template>
  
    <h4>Treeview Examples</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema" 
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logAll, logPlain, logClick, logInline,logModel, logElement } from '@/lib'

  // INFO: itemValue:'ID' -> 'ID' must be unique !!!!
  // INFO: itemValue:'title' -> 'title' must be unique !!!!
  const items = [
  {
  id: 1,
  title: 'Applications :',
  children: [
    { id: 2, title: 'Calendar : app' },
    { id: 3, title: 'Chrome : app' },
    { id: 4, title: 'Webstorm : app' },
  ],
  },
  {
  id: 5,
  title: 'Documents :',
  children: [
    {
      id: 6,
      title: 'vuetify :',
      children: [
        {
          id: 7,
          title: 'src-v:',
          children: [
            { id: 8, title: 'index : ts' },
            { id: 9, title: 'bootstrap : ts' },
          ],
        },
      ],
    },
    {
      id: 10,
      title: 'material2 :',
      children: [
        {
          id: 11,
          title: 'src-m:',
          children: [
            { id: 12, title: 'v-btn : ts' },
            { id: 13, title: 'v-card : ts' },
            { id: 14, title: 'v-window : ts' },
          ],
        },
      ],
    },
  ],
  },
  {
  id: 15,
  title: 'Downloads :',
  children: [
    { id: 16, title: 'October : pdf' },
    { id: 17, title: 'November : pdf' },
    { id: 18, title: 'Tutorial : html' },
  ],
  },
  {
  id: 19,
  title: 'Videos :',
  children: [
    {
      id: 20,
      title: 'Tutorials :',
      children: [
        { id: 21, title: 'Basic layouts : mp4' },
        { id: 22, title: 'Advanced techniques : mp4' },
        { id: 23, title: 'All about app : dir' },
      ],
    },
    { id: 24, title: 'Intro : mov' },
    { id: 25, title: 'Conference introduction : avi' },
  ],
  },
]
  
  const myModel = ref({})

  const mySchema = ref({
    treeviewMultiSelectTitle: { el:'treeview', items, itemValue:'title', selectStrategy:'multi', selectable:true, class:'treeview-background-red'  },
    treeviewId: { el:'treeview', items:items, itemValue:'id', class:'treeview-background-blue', onClick:logClick },
  })
 
</script>
