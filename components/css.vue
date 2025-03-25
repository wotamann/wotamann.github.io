<style scoped>
  /* 
  INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable 
  FOR STYLE SCOPED USE    :deep (.my-class) { color:#FFF }
  */

  /* CSS Component --- ID or Container */
  /* #form-base-css{ background-color: #dddddd33 } */
  .container-form-base-css{ background-color: #f7f9866c; padding: 16px;}
    
  /* CSS Item --- add CSS to every yitem in formbase  */
  :deep(.key-form-base-css){ border: 1px dotted #555}

  /* CSS Element --- el-component_id-[control-type] */
  /* :deep(.el-form-base-css-checkbox .v-label{ color:#6e0a0a ; font-size: 1.5rem; font-weight:bolder; } */
  :deep(.el-v-checkbox){ background-color:#eb478330; margin:0px }
  :deep(.el-v-checkbox .v-label){  color:#eb4783 ; font-size: 1.1rem; font-weight:600; }
 
  /* CSS Props   prop-[(sub)prop of schema]  */
  :deep(.key-btn .v-btn ){ background-color: #846510a5!important; }
  :deep(.key-switch){ background-color: #19880b30; }
  :deep(.key-switch .v-label){ color: #19880b; font-size:1.1rem; font-weight:600 }
  /* CSS Keys with path     key- [component id]-[path to key]  -----------------------------*/
  :deep(.key-form-base-css-name){ background-color: #4a8aff28; color:#4a8affff }
  :deep(.key-form-base-css-name input){ background-color: #4a89ff61; color:#4a8affff }
  :deep(.key-form-base-css-name input:focus){ background-color: #4a8aff; color:#FFF }
  
  :deep(.key-form-base-css-radios-radio1 .v-icon) { font-weight:600; font-size: 1.1rem; color: #c80cb2}
  :deep(.key-form-base-css-radios-radio1 .v-label) { font-weight:600; font-size: 1.1rem; color: #856306}
  :deep(.key-radio2 .v-label) { font-weight:600; font-size: 1.1rem; color: #7f1796}
  /* #form-base-css .key-radio2{ background-color:#5e15884f; font-weight:600; font-size: 1.1rem; color: #179622} */
  

  
</style>

<template>
  <h4>Play around with CSS</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    id="form-base-css"
    :model="myModel"
    :schema="mySchema"
    :cols="4"
  />    
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>    
</template>

<script setup>
import { ref } from 'vue'
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'

const options = [
  { value: 'A', label: 'A' }, 
  { value: 'B', label:'B' },
  { value: 'C', label:'C' },
]

const myModel = ref({}) 

const mySchema = ref({
  /* key-form-base-css  key-name key-form-base-css-name el-v-text-field el-form-base-css-v-text-field */ 
  name: { el:'text', label: 'Name', cols: 4, appendIcon: 'mdi-menu' },
  btn: { el:'btn', icon: 'mdi-printer', text:' printer', block:true, },          
  checkbox: { el:'checkbox', label: 'Red',  },
  switch: { el:'switch', label: 'Green', color:'green' },
  radios:{
    radio1: { el:'radioGroup', label: 'Radio', options, inline:false, },
    radio2: { el:'radioGroup', label: 'Radio - Inline', options, inline:true, },
  }
})

</script>
