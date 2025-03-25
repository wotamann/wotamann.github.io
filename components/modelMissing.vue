<template>
  <h4>Automatic generation of 'model' structure from deep nested schema</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    :container="{ el:'v-container', title:'My-Form', style:'backgroundColor:#fffeee', class:'fluid'}" 
    :model= "myModel"
    :schema= "mySchema"
    :cols="4"
    @update:customEvent="log"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib.js'

  const myModel = ref({})
  
  const mySchema = ref({
    A1: { el: 'v-checkbox', label: 'A1' }, 
    A2: {
      B1: { el: 'v-checkbox', label: 'A2 B 1', color:'red' },   
      B2: [
        { el: 'checkbox', label: 'A2 B2 0', color:'blue' },
        { el: 'v-checkbox', label: 'A2 B2 1', color:'blue', nullValue:true },
        [
          { el: 'v-switch', label: 'A2 B2 2 0', color:'green', nullValue:true },
          { el: 'v-switch', label: 'A2 B2 2 1', color: 'green', },
          { 
          // schema with group needs -> :config="{_buildModel:true}" - is Default Setting
            el:'v-group', cols:12,
            container:{ el:'window', subtitle:'Group 1', class:'pa-2'}, 
            schema: { 
              deep:{el: 'v-checkbox', label: 'deep', cols:3}, 
              deeper: { 
                el:'v-group', cols:8,
                container:{ el:'frame', subtitle:'Group 2', }, 
                schema: { 
                  deepest:{el: 'v-checkbox', label: 'deepest', cols:4},
                  arr:[
                    { el: 'v-checkbox', label: 'arr 0', color:'blue', nullValue:true, cols:4 },
                    { el: 'v-checkbox', label: 'arr 1', color:'green', nullValue:true, cols:4 },
                  ]
                }
              }
            }
          }
        ]
      ]  
    }
  })
  
</script>
