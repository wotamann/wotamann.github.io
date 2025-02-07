<template>
  <v-container class="container-box-new">  
   <h4>Selection depending from other Selection and hide if empty</h4>
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="formbase"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
      @update="log"
    />

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib.js'

  const items = [1,2,3,4]
  const itemsDeep = computed( ()=> myModel.value.base  )
  const itemsDeepHide = computed( ()=> myModel.value.base?.length === 0 && myModel.value.depending?.length === 0)

  const myModel = ref({
    base: [1,2],
    depending: [],
  })

  const mySchema =ref({
    base:{ el:'select', multiple:true, label:'Base Selection', items, clearable:true },
    depending:{ el:'select', multiple:true, label:'Depending Selection', items:itemsDeep, hidden:itemsDeepHide, clearable:true },
  })

</script>

<style>  
</style>