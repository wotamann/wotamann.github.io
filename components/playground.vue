<template>
  <v-container class="container-box">  
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
    <hr/>
    <br/>
    <v-btn :color="color" @click="changeModel">EXTERNAL CHANGE SCHEMA-COLOR - {{ color }}</v-btn>
    <br/>
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log } from '@/lib.js'
  
  const colIndex = ref(0)
  const colors = ['red','green','amber','purple','blue', 'brown','orange','yellow']
  const color = computed( () => colors[colIndex.value] )
  const changeModel = () => { colIndex.value ++; colIndex.value = colIndex.value % colors.length }

  const myModel = ref({
    text: color
  })

  const iconTemplate= {el:'icon', size:60, color:color }
  
  const mySchema =ref({ 
    text: {el:'card',color:color, title:color, cols:{ cols:9, offset:1 } },  
    icon0:{ ...iconTemplate, icon:'mdi-network' },
    icon1:{ ...iconTemplate, icon:'mdi-bluetooth' },
    icon2:{ ...iconTemplate, icon:'mdi-wifi' },
    
  })

</script>

<style>  
</style>