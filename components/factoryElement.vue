<template>
  <h4>Element Factory</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base       
    :model= "myModel"
    :schema= "mySchema"
    @update:customEvent="log"
  />
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import VFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { log } from '@/lib'
  
  // DEFINE FACTORY
  const greenSwitch = (on, off) => ({ el:'switch', label:on+'', cols:4, color:'#0b0', baseColor:'#cec', trueValue:on, falseValue:off })
  
  const myModel = ref({})
    
  const mySchema = ref({
    switch1: greenSwitch(true,false),
    switch2: greenSwitch('ON','OFF'),
    switch3: greenSwitch('YES','NO'),
  })

</script>
