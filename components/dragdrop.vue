<template>
  <v-container class="container-box">
    <h4>Try to Drag & Drop </h4>

        <!-- FORM-BASE-COMPONENT -->    
        <v-form-base 
          id="dragdrop"
          :model="myModel"
          :schema="mySchema"
          :cols="6"
          @update:modelValue="log"
          @dragstart="logDragstart"
          @drop="logDrop"
        />
       
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
    
  </v-container>
</template>

<script setup>
import VFormBase from '@/vFormBase'
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import Infoline from '@/components/infoline'
import { log, logMV } from '@/lib'

// DROP destruct value, FN must return a (modified) value
const dropFN = ( { value:{drag, drop} }) =>  `${drop?.toUpperCase()} + ${drag?.toUpperCase()}`

const myModel = ref({
  name1: 'Drag but No Drop',
  name2: 'Drag & Drop Value from Source',
  name3: 'Drop Value from Source',
  name4: 'Drop Value from Target',
  name5: 'Drop and modify Value',
  name6: 'No Drag, No Drop',
})

const mySchema = ref({
  name1: {  el:'text', draggable:true, class:'red lighten-5' },                 
  name2: {  el:'text', draggable:true, drop:true,  color:'amber' },                 
  name3: {  el:'text', drop:({value}) => value.drag, color:'amber' },                 
  name4: {  el:'text', drop:({value}) => value.drop, color:'amber'  },                 
  name5: {  el:'text', draggable:false, hint:'drop to uppercase', drop:dropFN,  color:'amber' },                 
  name6: {  el:'text', color:'red' },                 
})
    
const logDragstart = (val) => {
  console.log('APP DRAGSTART VALUE #', val?.obj?.value);
  console.log('APP DRAGSTART EVENT #', val);
}
const logDrop = (val) => {
  console.log('APP DROP VALUE #', val?.obj?.value);
  console.log('APP DROP EVENT #', val);
}    

</script>
<style>
 #dragdrop-name1 .v-input__control{ background-color: #3d9f2a46;color:#28a40f;}
 #dragdrop-name2 .v-input__control{ background-color: #3d9f2a46;color:#28a40f;}
 #dragdrop-name6 .v-input__control{ background-color: #ffaaaa68;color:#850303;}
  
</style>
