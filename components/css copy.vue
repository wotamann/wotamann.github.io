<style>
  /* 
  INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable 
  FOR STYLE SCOPED USE    :deep (.my-class) { color:#FFF }
  */

  /* CSS Component --- Container */
  #form-base-css.form-base-css-container{ background-color: #e0f3ff4e ; padding:8px}
  
  #form-base-css input { background-color: #ff2a5f09; color:#920f30b9 }
  #form-base-css input:focus { background-color: #921232b9; color:#FFF }

  /* CSS Item --- add CSS to every item in formbase  */
  #form-base-css .item { padding:1rem; border: 1px dotted #76746d}

  /* CSS Type --- type-component_id-[control-type] */
  /* #form-base-css .type-form-base-css-checkbox .v-label{ color:#6e0a0a ; font-size: 1.5rem; font-weight:bolder; } */
  #form-base-css .el-v-checkbox { background-color:#ddd; border:1px solid #888 }
  #form-base-css .el-v-checkbox .v-label{  color:#141fe8 ; font-size: 1.5rem; font-weight:bolder; }
 
  /* CSS Props   prop-[(sub)prop of schema]  */
  #form-base-css .key-bool { background-color: #51b0af41; border:1px solid #3a6564ff }
  /* VARIANT PROP or TYPE  */ 
  #form-base-css .el-v-text-field { background-color: #5e158818; border:1px solid #5e1588; }

  /* CSS Keys     key- [component id]-[path to key]  -----------------------------*/
  #form-base-css .key-form-base-css-controls-btn-btn0 .v-btn--block { background-color: #6ea4ca!important;  }
  
  /* CSS Keys     key- [component id]-[path to key]  -----------------------------*/
  #form-base-css .key-form-base-css-name input { background-color: #4a8aff28; color:#4a8affff }
  #form-base-css .key-form-base-css-name input:focus { background-color: rgb(38, 97, 205); color:#FFF }
  
  /* CSS Keys     key- [component id]-[path to key]  -----------------------------*/
  #form-base-css .key-form-base-css-controls-bool-switch .v-label{ font-weight:bolder; font-size: 1.2rem; color: #179622!important}
  #form-base-css .key-radio1 .v-label{ font-weight:bolder; font-size: 1.2rem; color: #7f1796}
  /* #form-base-css .key-radio2{ background-color:#5e15884f; font-weight:bolder; font-size: 1.2rem; color: #179622} */
  
</style>

<template>
  <h4>Play around with CSS</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base
    id="form-base-css"
    :model="myModel"
    :schema="mySchema"
  />    
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>    
</template>

<script setup>
import { ref } from 'vue'
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'

// String
const options = [
  { iconL: 'mdi-format-align-left', text:'Left',value: 'L', color:'red' }, 
  { iconL:  'mdi-format-align-center', text:'Center', value: 'C', color:'primary' },
  { iconR: 'mdi-format-align-right', text:'Right', value: 'R', color:'success' },
]
const optionsRadio = [
  { value: 'B', color:'blue', label: 'Blue' }, 
  { value: 'R', color:'red', label:'Red' },
  { value: 'G', color:'green', label:'Green' },
]


const myModel = ref({
  name: 'Base',
  password: '123456',
  email: 'base@mail.com',
  checkbox: true,
  controls: {
    checkbox: true,
    bool:{
      checkbox: true,
      switch: true,
    },
    btn:{
      btnsingle:'C',
      btnmulti: ['L'],
    },
    iconLabel:null,
    iconValue: 'print',          
    radios: {
      radio1: 'B',
      radio2: ['G', 'R'],
    }
  }
 }) 
const mySchema = ref({
  name: { el:'text', label: 'Name', cols: 4, appendIcon: 'mdi-menu' },
  password: { el:'password', label: 'Password', cols: 4 },
  email: { el:'email', label: 'Email', cols: 4, spacer: true },
  checkbox: { el:'checkbox', label: 'Red', color: 'red', cols: 3 },
  controls: {
    checkbox: { el:'checkbox', label: 'Blue', color: 'blue', cols: 3 },
    bool:{
      checkbox: { el:'checkbox', label: 'Green', color: 'green', cols: 3 },
      switch: { el:'switch', label: 'Green', color: 'green', cols: 3 },
    },
    // Buttons
    btn:{
      btnsingle: { el:'btnToggle', options, cols: 6 },
      btnmulti: { el:'btnToggle', options, multiple:true, tooltip: 'Multi Button', cols: 6 },
      btn0: { el:'btn', iconR: 'mdi-printer', text:'printer', block:true, cols:4 },          
      btn1: { el:'btn', iconR: 'mdi-wifi', text:'wifi',  block:true, cols:4 },          
      btn2: { el:'btn', iconL: 'mdi-bluetooth', text:'bluetooth',block:true, cols:4 },          
    },
    // Radios
    radios:{
      radio1: { el:'radioGroup', label: 'Radio', options, inline:false, cols: 6  },
      radio2: { el:'radioGroup', label: 'Radio - Inline', options: optionsRadio, inline:true, tooltip: 'Color & Multi Radio', cols: 6},
    }
  }
})

</script>
