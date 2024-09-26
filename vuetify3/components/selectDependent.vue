<template>
  <v-container class="container-box">  
   <h4>Selection depending from other Selection and hide if empty</h4>
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="selection-depending"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
      @update:modelValue="log"
    />

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, computed } from 'vue'
  import Infoline from '@/components/infoline'
  import log from '@/lib.js'

  const items = [1,2,3,4]
  const itemsDeep = computed( ()=> myModel.value.selectBase )
  const itemsDeepHide = computed( ()=> itemsDeep.value.length === 0 )

  const myModel = ref({
    selectBase: [1,2],
    selectDepending: [],
  })

  const mySchema =ref({
    selectBase:{ el:'select', multiple:true, label:'Base', items, clearable:true },
    selectDepending:{ el:'select', multiple:true, label:'Depending', items:itemsDeep, hidden:itemsDeepHide },
    // selectDepending:{ el:'select', multiple:true, label:'Dependend', items:itemsDeep, noDataText:'Select one or more...' },
  })

</script>

<style>  
</style>