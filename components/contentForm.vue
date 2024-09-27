<template>
  <v-container class="container-box">  
   <h4>Playground</h4>
      
    <!-- FORM-BASE-COMPONENT -->

    <!-- look different 'form' attribute -->
    <v-form-base form="v-card" :model= "myModel" :schema= "mySchema" @update:modelValue="log" />
    <br/>
    <v-form-base :form="{el:'v-sheet', color:'green-lighten-5'}" :model= "myModel" :schema= "mySchema" @update:modelValue="log" />
    <br/>
    <v-form-base :form="{ el:'div', class:'form pa-4'}" :model= "myModel" :schema= "mySchema" @update:modelValue="log" />
    <br/>
    <v-form-base :model= "myModel" :schema= "mySchema" @update:modelValue="log" />

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, computed } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'

  const myModel = ref({
    text:'text'
  })

  const mySchema =ref({
    text:'text'
  })

</script>

<style> 
 .form { background-color: #91b3f225;} 
</style>