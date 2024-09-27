<template>
  <v-container class="container-box">  
    <h4>Resize to change Layout, Offset and Color of Sheets</h4>
    
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="grid-demo"
      :model= "myModel"
      :schema= "mySchema"
      @click="log"
    />

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, inject, computed } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'

  const vuetify = ref(inject('$vuetify'))

  const colorSized = computed(()=> {
    const {md,sm,lg, xl, xxl} = vuetify.value.display
    if (sm === true) return 'grey';   
    if (md === true) return 'blue';   
    if (lg === true) return 'purple';   
    if (xl === true) return 'amber';   
    if (xxl === true) return 'indigo';   
  })
  const myModel = ref({
    responsive1:'Value-1',
    responsive2:'Value-2',
    responsive3:'Value-3',
    responsive4:'Value-4',
    responsive5:'Value-5 - Multicolor'
  })

  const sheetTemplate= (color) => ({ el:'sheet', color, height:'32', width:'auto', elevation:6 })

  const mySchema =ref({
    responsive1:{ ...sheetTemplate('red'), cols:{ cols:'12', offsetSm:4, sm:8 }, },
    responsive2:{ ...sheetTemplate('blue'), cols:{ cols:'12', md:6, offsetMd:6}, },
    responsive3:{ ...sheetTemplate('green'), cols:{ cols:'12', offsetLg:8, lg:4}, },
    responsive4:{ ...sheetTemplate('amber'), cols:{ cols:'12', offsetXl:10, xl:2}, },
    
    hr:{el:'divider', cols:12},
    // change colors
    responsive5:{ ...sheetTemplate(colorSized),  cols:{ cols:'12', offsetXxl:3, xxl:6}, },
  })

</script>

<style>  
</style>