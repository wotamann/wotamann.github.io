<style scoped>
  /* INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable */
  :deep(.slot){ font-size: 1rem; padding:4px;margin:2px  }
  :deep(.form){ padding:8px;  color: #001fb8; background-color: #001fb808 }
  :deep(.key){ color: #06b34e; background-color: #06b34e08 }
  :deep(.element){ color: #9c3a19; background-color: #9c3a1908 }
  :deep(.item) { color: #675600; background-color: #67560008}
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
          <template #slot-[top|item|bottom]-[el|key]-[id]-[key-path]="{obj, id, index, attrs}">
        -->
        
        <!-- FORM SLOTS TOP/BOTTOM OF V-FORM-BASE-->
        <template #slot-top-id-formbase="{id}"><p class="slot form">Top Slot of Component '{{ id }}'</p></template>
        <template #slot-bottom-id-formbase="{id}"><p class="slot form">Bottom Slot of Component '{{ id }}'</p></template>
        
        <!-- SLOTS AT [TOP|BOTTOM] OF ELEMENT WITH [PATH][KEY]  -->
        <template #slot-top-key-id-formbase-text1="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>               
        <template #slot-bottom-key-id-formbase-text1="{obj, index, id}"><p class="slot key">Slot at Bottom of Key '{{obj.key}}'</p></template>      
        
        <!-- SLOTS AT [TOP|BOTTOM] FOR ALL ELEMENTS 'V_TEXT_FIELD'  -->
        <template #slot-top-el-id-formbase-v-text-field="{obj}"><p class="slot element">Slot at Top of Element '{{obj?.schema?.el}}'</p></template>
        <template #slot-bottom-el-id-formbase-v-text-field ="{obj}"><p class="slot element">Slot at Bottom of Element '{{obj?.schema?.el}}'</p></template>
        
        <!-- SLOT REPLACE ELEMENT AND SLOT-TEXTFIELD UPDATING MODEL-->
        <template #slot-item-key-id-formbase-text2="{obj, id, index, attrs}">
          <div class="item" :style="{ padding:'8px' }">
            <span class="item">Replace '{{obj?.schema?.el}}' element' adressed by key '{{obj.key}}', insert 'textfield' and update model from slot</span>
            <v-text-field 
              :value="obj.value" 
              label="slot updates text2" 
              @update:modelValue="event => attrs.model[obj.key] = event" 
            />
          </div>
        </template>

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
