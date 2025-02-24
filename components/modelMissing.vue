<template>
  <h4>Autogenerate 'Model' Structure from deep nested Schema</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
  :config="{_useOrder:true}"
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
    
  // Don't try to remove ':model' from <v-form-base :model= "myModel"/>
  // it will work, but you can get changes only update:modelValue event
  // const myModel = ref({ A2:{ B2: [true,true,[ true,true, {deep:true} ]]}})

  const myModel = ref({
  // A1: true,
  // A2: {
  //   B1: true,
  //   B2: [
  //     null,
  //     true,
  //     [
  //       true,
  //       false,
  //       {
  //         deep: true,
  //         deeper: {
  //           deep: false,
  //           arr: [
  //             true
  //           ]
  //         }
  //       }
  //     ]
  //   ]
  // }
})
  
  // const mySchema = ref({ })
  const mySchema = ref({
    A1: { el: 'box', nullValue:'YES' }, 
    A2: {
      B1: { el: 'v-checkbox', label: 'A2 B 1 checkBox', color:'red' },   
      B2: [
        { el: 'checkbox', label: 'A2 B2 0', color:'blue' },
        { el: 'v-checkbox', label: 'A2 B2 1', color:'blue', nullValue:true },
        [
          { el: 'v-switch', label: 'A2 B2 2 0', color:'green', nullValue:true },
          { el: 'v-switch', label: 'A2 B2 2 1', color: 'green', },
          { 
          // schema with group needs -> :config="{_buildModel:true}"  Default Setting
            el:'v-group', cols:12,
            container:{ el:'window', subtitle:'Level', class:'pa-2'}, 
            schema: { 
              deep:{el: 'v-checkbox', label: 'A2 B2 2 1', cols:3}, 
              deeper: { 
                el:'v-group', cols:8,
                container:{ el:'frame', subtitle:'Level', }, 
                schema: { 
                  deep:{el: 'box', label: 'deep', cols:4, nullValue:'34v9m83'},
                  arr:[
                    { el: 'v-checkbox', label: '1', color:'blue', nullValue:true, cols:4 },
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
