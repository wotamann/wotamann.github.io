<template>
  <v-container class="container-box-new">
  
    <h4>Create multiple views based on same 'wrapped' model </h4>
    
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="wrap-base"
      :model="myModel"
      :schema="mySchema"
      :cols="12"
      @update:model-value="log"
    />     

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib'

const text1 = { el: 'text', label:'Text', cols:9,}
const check1 = { 
  el: 'checkbox',
  color:'red',
  cols:2 
}

const myModel = ref({
  text1:'Text', 
  check1:true  
})
const mySchema = ref({
  Level0: { 
    el:'wrap', 
    container:{ is:'v-sheet', color:'green-lighten-3', class:'pa-1' },
    schema:{
      text1,
      check1,
      Level1: { 
        el:'wrap', 
        cols:9,
        container:{ is:'v-sheet', color:'green-lighten-4', class:'pa-1' },
        schema:{
          text1,
          check1,
          Level2: { 
            el:'wrap',          
            cols:9,
            container:{ is:'v-sheet', color:'green-lighten-5', class:'pa-1' },
            schema:{
              text1,          
              check1
            }
          },
        }
      }          
    }
  },
  Base0: { 
    el:'wrap',          
    cols:6,
    container:{ is:'v-sheet', color:'blue-lighten-3', class:'pa-1' },
    schema:{
      text1,          
      check1
    }
  },
  Base1: { 
    el:'wrap',          
    cols:6,
    container:{ is:'v-sheet', color:'blue-lighten-4', class:'pa-1' },
    schema:{
      text1,          
      check1
    }
  },

})

</script>
