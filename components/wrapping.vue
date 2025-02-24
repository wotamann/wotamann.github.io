<template>
    <h4>Build Views from 'wrapped' Model </h4>
    
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model="myModel"
      :schema="mySchema"
      :cols="12"
      @update:model-value="log"
    />     

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import { log, logModel } from '@/lib'

const text = { el: 'text', label:'Text', cols:5 }
const check = { el: 'checkbox', color:'orange', label:'ORANGE',cols:4 }
const deepCheck = { el: 'checkbox', color:'blue', label:'BLUE', cols:3 }
const containerOutlined = (subtitle) => ({ el:'card', subtitle, variant:'outlined', color:'blue-darken-2', class:'pa-3'})
const containerElevated = (subtitle) => ({ el:'card', subtitle, variant:'elevated', color:'orange-lighten-4', class:'pa-3'})

const myModel = ref({
  text:'text', 
  check:true,
  deep:{
    deepCheck:true,
  }  
})

const mySchema = ref({
  vixew1: { 
    el:'v-view',
    container:containerOutlined('View'), 
    schema:{ text, check,
      viewNested: { 
        el:'view',
        cols:9,
        container:containerOutlined('View Inside'), 
        schema:{ text, check, deep:{ deepCheck} }
      }          
    }
  },
  Vixew2: { 
    el:'v-view',
    cols:6,
    container:containerOutlined('View Outside'), 
    schema:{ text, check }
  },
  vixew3: { 
    el:'view',
    cols:6,
    container:containerElevated('View Filled'), 
    schema:{ text, check, deep:{ deepCheck} }
  },
})
</script>
