<template>
  <h4>Playground</h4>
      
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="basic-demo"
    :model= "myModel"
    :schema= "mySchema"
    :cols="4"
    @click="log"
  />
  <br/>
  <v-btn :color="myColor" @click="changeModel">EXTERNAL CHANGE SCHEMA-COLOR - {{ myColor }}</v-btn>
  <br/>
  <br/>
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log } from '@/lib.js'
  
  const colIndex = ref(0)
  const colors = ['red','green','amber','purple','blue', 'brown','orange','yellow']
  const myColor = computed( () => colors[colIndex.value] )

  const changeModel = () => { colIndex.value ++; colIndex.value = colIndex.value % colors.length }

  const myModel = ref({
    text: 'red'
  })

  const iconTemplate= {el:'icon', size:60, color:myColor }
  
  const mySchema =ref({ 
    text: {el:'card',color:myColor, title:myColor, cols:{ cols:9, offset:1 } },  
    icon0:{ ...iconTemplate, icon:'mdi-network' },
    icon1:{ ...iconTemplate, icon:'mdi-bluetooth' },
    icon2:{ ...iconTemplate, icon:'mdi-wifi' },
    
  })

</script>

<style>  
</style>