<template>
  <h4>Selections with injected slots</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base  
    :model= "myModel"
    :schema= "mySchema"             
    @update:modelValue="logModel"
    @update:customEvent:formbase-select-custom="logCustomEvent"
  >

    <!-- 
    <template #slot-inject-label-el-v-select="{obj, idx, id, index, item}"> 
      <template #slot-inject-label-key-formbase-select-custom="{obj, idx, id, index, item}">
      <mark>Custom select - injected Label Slot</mark>
    </template>
    -->
    

    <!-- 
    <template #slot-inject-el-v-select-label="{obj, idx, id, index, item}">
      <mark>v-select - injected Label</mark>
    </template> 
    
    <template #slot-inject-key-formbase-select-custom-label="{obj, idx, id, index, item}">
      <mark>key-custom-select - injected Label</mark>
    </template>  
    -->

    <template #slot-inject-counter-el-v-select="{counter, max, value}">
      <mark>Selected {{counter}} Items</mark>
    </template>  

    <template #slot-inject-selection-key-formbase-select-custom="{obj, idx, id, index, item}">
      <v-chip v-if="index < 2" :text="item.title" color="orange-darken-4"></v-chip>      
      <span v-if="index===2" class="text-grey text-caption align-self-center">
        (+{{ obj.value.length-2 }} others)
      </span>
    </template>

  </v-form-base>  

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logCustomEvent, logModel, logInline } from '@/lib'
  
  const color='orange-darken-4'
  const cols = { cols:6, offset: 0}
  
  const items = ['A','B','C','D']
  const itemObject = [{ text:'AA', value:1},{text:'BB', value:2},{text:'CC', value:3},{text:'DD', value:4}]
    
  const itemProps = (item)=> ({title: item.value, subtitle: item.text })

  const myModel = ref({})
    
  const mySchema = ref({
    select:{ el:'select', label:'Select', items, color, cols},
    
    selectMultiple:{ el:'select', label:'Multiple select', items, multiple:true, color, cols },
    
    selectObject:{ el:'select', label:'Select from array of objects', items:itemObject, itemTitle:'text', itemValue:'value', color, cols },  
    
    selectCustom:{ 
      el:'select', 
      label:'Custom select element', 
      items:itemObject, 
      itemProps,  // custom item properties 
      chip:true,  // display 'chips' instead of 'text' 
      multiple:true, // multiple selection allowed
      menuProps:{ scrim: false },  // scrim layer 
      returnObject:true, // return object instead of value
      color, 
      cols    
    },  
  }) 
</script>