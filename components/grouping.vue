<style scoped>
  /* ::v-deep .type-group-text { background-color: #f07000;} */
  /* ::v-deep .key-group-without-group-check .v-input__control { background-color: #f07000;} */
  /* ::v-deep .key-group-without-group-level-check .v-input__control { background-color: #f07000;}  */
  /* ::v-deep .key-group-use-group-level-name { background-color: #f07000;} */
</style>

<template>
  <h4>Add Layout to model structure by using 'group' to </h4>
  <v-form class="border-frame">

     <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="group"
      :model="myModel"
      :schema="mySchema"
      :cols="6"
      @input="log"
    />     
   
   </v-form>

   <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
   <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

</template>

<script setup>
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib'

  // Schema NAME, CHECK
  const name = { el: 'text', label:'name', cols:8 }
  const check = { el: 'checkbox', label: 'check', cols:3 }

  const myModel = ref({
    withoutGroup:{
      name:'base', 
      check:true,  
      level:{
        name:'level 1', 
        check:false,  
      }
    },
    useGroup:{
      name:'base', 
      check:true,  
      level:{
        name:'level 1', 
        check:true,  
      }
    },
  })

  const mySchema = ref({
    // NO GROUPING ELEMENT FOR LAYOUT
    withoutGroup:{
      name, 
      check,  
      level:{ 
        name, 
        check        
      }
    },
    // USE GROUPING ELEMENT FOR LAYOUT
    useGroup:{ 
      el:'group',  
      cols:12,
      container:{ is:'v-sheet', class:'pa-2', color:'blue-lighten-5'}, // default is:'div' 
      schema:{
        name, 
        check,  
        level:{ 
          el:'group',
          container:{ is:'v-sheet', class:'pa-2', color:'blue-lighten-4'}, 
          schema:{
            name, 
            check       
          }
        }
      }
    },
      
  })

</script>
