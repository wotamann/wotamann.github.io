<template>
  <h4>Design layouts using 'group' </h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model="myModel"
    :schema="mySchema"
    @input="log"
    :config="{_buildModelFrame:true}"
  />
  <!-- :config="{_buildModelFrame:true}"  BUILD MODEL STRUCTURE  FALSE - DOESN'T WORK PROP WITH GROUPED SCHEMA -->
  <!-- :config="{_buildModelNode:true}"  BUILD MODEL STRUCTURE AND ADD ALL NODES with defaUlt values -->  

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