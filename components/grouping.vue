<template>
  <h4>Design layouts using 'group' </h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
  :model="myModel"
  :schema="mySchema"
  @input="log"
  :config="{_buildModel:true}"
  />
  <!-- :config="{_buildModel:true}"  FALSE - DOESN'T WORK PROP WITH GROUPED SCHEMA -->
   
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib'

  const name = { el: 'v-text-field', label:'name', cols:8 }
  const check = { el: 'box',  cols:3 }

  const myModel = ref({})

  const mySchema = ref({
    name,
    shorthand:'text',
    group:{ 
      el:'group', 
      // container:{ el:'frame', subtitle:'Base', class:'pa-2', },
      container:'window',
      schema:{ 
        // name, 
        check, 
        shorthand:'text',
    
        // level:{ 
        //   el:'v-group',
        //   container:{ el:'frame', subtitle:'Level', class:'pa-2', }, 
        //   schema:{ name, check }
        // }
      }
    },
  })
</script>

<style scoped>
  /* :deep( .type-group-name) { background-color: #f07000;} 
  :deep( .key-group-check .v-input__control) { background-color: #f07000;} 
  :deep(.key-group-level-check .v-input__control) { background-color: #f07000;} 
  :deep( .key-group-level-name) { background-color: #f07000;} */
</style>