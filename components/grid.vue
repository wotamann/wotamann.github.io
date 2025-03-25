<template>
  <h4>Resize to change Layout, Offset and Color of Sheets</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="grid-demo"
    :model= "myModel"
    :schema= "mySchema"
  />
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, inject, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  
  const vuetify = ref(inject('$vuetify'))

  const sizeColor = computed(()=> {
    const {md,sm,lg, xl, xxl} = vuetify.value.display
    if (sm === true) return 'red';   
    if (md === true) return 'blue';   
    if (lg === true) return 'green';   
    if (xl === true) return 'amber';   
    if (xxl === true) return 'purple';   
  })
  const sizeText = computed(()=> {
    const {md,sm,lg, xl, xxl} = vuetify.value.display
    let text
    if (sm === true) text = 'sm';   
    if (md === true) text = 'md';  
    if (lg === true) text = 'lg';   
    if (xl === true) text = 'xl';   
    if (xxl === true) text = 'xxl';  
    return `size:'${text}'`     
  })
 
  const myModel = ref({
    responsive1:'Value-1',
    responsive2:'Value-2',
    responsive3:'Value-3',
    responsive4:'Value-4',
    responsive5:'Value-5',
    responsive6:'Value-5 - Multicolor'
  })

  // const sheetTemplate= (color, text) => ({ el:'card', text:text.value ? `size is ${text.value}` : '', color, height:'48', width:'auto', elevation:6 })
  const sheetTemplate= (color, text) => ({ el:'card', text, color, height:'48', width:'auto', elevation:6 })
  
  const mySchema =ref({
    responsive1:{ ...sheetTemplate('red',`cols:{ cols:12, offsetSm:4, sm:8 }`), cols:{ cols:12, offsetSm:4, sm:8 }, },
    responsive2:{ ...sheetTemplate('blue',`cols:{ cols:12, md:6, offsetMd:6 }`), cols:{ cols:12, md:6, offsetMd:6}, },
    responsive3:{ ...sheetTemplate('green',`cols:{ cols:12, offsetLg:8, lg:4 }`), cols:{ cols:12, offsetLg:8, lg:4}, },
    responsive4:{ ...sheetTemplate('amber',`cols:{ cols:12, offsetXl:10, xl:2 }`), cols:{ cols:12, offsetXl:10, xl:2}, },
    responsive5:{ ...sheetTemplate('purple',`cols:{ cols:12, offsetXxl:11, xxl:1 }`), cols:{ cols:12, offsetXxl:11, xxl:1}, },
    
    hr:{el:'divider', cols:12},
    // change colors on size
    responsive6:{ ...sheetTemplate(sizeColor,sizeText),  cols:{ cols:12, offsetXxl:3, xxl:6}, },
  })
  
</script>
