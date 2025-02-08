<style scoped>
  /* INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable */
  :deep(.slot){ font-size: 1rem; padding:8px;margin:4px  }
  :deep(.form){ padding:8px;  color: #001fb8; background-color: #001fb810 }
  :deep(.key){ color: #06b34e; background-color: #06b34e10 }
  :deep(.element){ color: #9c3a19; background-color: #9c3a1910 }
  :deep(.item) { color: #484; background-color: #44884410}
</style>

<template>
    <h4>Slots for component, keys, items, elements</h4>
     
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base
      id="id-formbase"
      :model="myModel"
      :schema="mySchema"
      >
      
        <!-- SLOT SIGNATURE 
        <template #slot-item-key-id-formbase-text2="{obj, id, index, attrs}"> 
        
        <template #slot-[top|item|bottom]-[element|key]-[id component]-[key]="{obj, id, index, attrs}"> 
        
          -->
        
          <!-- FORM SLOTS -->
        <template #slot-top-id-formbase="{id}"><p class="slot form">Top Slot of Component '{{ id }}'</p></template>
        <template #slot-bottom-id-formbase="{id}"><p class="slot form">Bottom Slot of Component '{{ id }}'</p></template>
        
        <!-- KEY SLOTS -->
        <!-- TOP of KEY -->
        <template #slot-top-key-id-formbase-text1="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>       
        <!-- ITEM of KEY -->
        <template #slot-item-key-id-formbase-text2="{obj, id, index, attrs}">
          <p class="slot item">Slot replace Item with Key '{{obj.key}}'</p>
        </template>
        <!-- BOTTOM of KEY -->
        <template #slot-bottom-key-id-formbase-text1="{obj, index, id}"><p class="slot key">Slot at Bottom of Key '{{obj.key}}'</p></template>      
        
        <!-- ELEMENTS SLOTS -->
        <template #slot-top-element-id-formbase-text="{obj}"><p class="slot element">Slot at Top of Element '{{obj?.schema?.el}}'</p></template>
        <template #slot-bottom-element-id-formbase-text ="{obj}"><p class="slot element">Slot at Bottom of Element '{{obj?.schema?.el}}'</p></template>
        
       

      </v-form-base>

      <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import { ref } from 'vue'
import Infoline from '@/components/infoline.vue'

const myModel =ref({})

const mySchema =ref({ 
  text1: { el: 'text', label: 'text1', cols:4},
  text2: { el: 'text', label: 'text2', cols:4},
  text3: { el: 'text', label: 'text3', cols:4}
})

</script>
