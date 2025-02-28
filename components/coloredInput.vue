<template>
  <h4 :style="{color}">Color Elements - {{color}}</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    :model= "myModel"
    :schema= "mySchema"             
    @update:customEvent="logCustomEvent"
  />

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref, computed } from 'vue'
  import { logCustomEvent, logInline, logButton, logIcon } from '@/lib' 
  
  const items = [1,2,3]
  const color = computed( ()=> myModel.value.color  )  
  const showColor = () => mySchema.value.color.hidden = !mySchema.value.color.hidden

  const myModel = ref({
    text:'texty',
    selectMultiple:[2,3],
    switch:true,
    checkbox:true,
    color:'#1A89EBFF'
  })
    
  const mySchema = ref({
    // Props order in schema determines display order
    text: { el:'text', label:'label', color },     
    selectMultiple:{ el:'select', label:'select multiple', items, multiple:true, color },    
    checkbox:{ el:'box', label:'checkbox', cols:2, color }, 
    switch:{ el:'switch', label:'switch', cols:2, color },  
    iconB: { el:'icon', icon:'mdi-wifi', size:'2.4rem', cols:1, color },
    iconW: { el:'icon', icon:'mdi-bluetooth', size:'2.4rem', cols:1, color },
    button: { el:'v-btn', text:'Set Color', block:true, color, onClick:showColor },  
    // 
    color: { el:'v-colorPicker', mode:'hex', hideInputs:true ,hidden:true  },
  })
</script>
