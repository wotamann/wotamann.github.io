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
    id="formbase"
    :model="myModel"
    :schema="mySchema"
    :cols="12"
    
    @update:modelValue="log"       
    >
      
      <!-- FORM SLOTS -->
      <template #slot-top-formbase><p class="slot form">Top Slot of 'Form'</p></template>
      <template #slot-bottom-formbase><p class="slot form">Bottom Slot of 'Form'</p></template>
      
      <!-- KEY SLOTS -->
      <!-- TOP of KEY -->
      <template #slot-top-key-formbase-text1="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>
      <template #slot-top-key-formbase-deep-switch="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>
      <!-- ITEM of KEY -->
      <template #slot-item-key-formbase-text2="{obj, id, index}"><p class="slot key">Slot replaces Item with Key '{{obj.key}}'</p></template>
      <!-- BOTTOM of KEY -->
      <template #slot-bottom-key-formbase-text1="{obj, index, id}"><p class="slot key">Slot at Bottom of Key '{{obj.key}}'</p></template>      
      
      <!-- TYPE SLOTS -->
      <template #slot-top-element-formbase-text="{obj}"><p class="slot element">Slot at Top of all with Type '{{obj?.schema?.el}}'</p></template>
      <template #slot-bottom-element-formbase-switch ="{obj}"><p class="slot element">Slot at Bottom of all with Type '{{obj?.schema?.el}}'</p></template>
      
      <!-- INJECT SLOTS INTO KEY  -->  
      <!-- INJECT progress into key [component_id]-->
      
      <!-- SIGNATURE 'slot-inject-[slotname]-[key|element|item]-[id]-[key]' -->
      <!--            slot-inject-progress-key-formbase-keyname -->

      <template #slot-inject-loader-key-formbase-text1="">
        <v-progress-linear
          :value="progress"
          :color="color"
          :height="12"
          indeterminate
        />
      </template>

      <!-- INJECT selection -->
      <template #slot-inject-loader-key-formbase-text4="{text}">
        INJECTED LOADER SLOT          
        <v-progress-linear color="blue" height="16" indeterminate />
      </template>

      <!-- INJECT prepend/append -inner text1-->
      <template #slot-inject-append-key-formbase-text1="{obj}" >
        <v-icon v-bind="obj" icon="mdi-circle"></v-icon>
      </template>
      
      <template #slot-inject-append-inner-key-formbase-text1="{obj}" @click="alert(1)">
        <v-icon v-bind="obj" icon="mdi-email"></v-icon>
      </template>

      <template #slot-inject-prepend-key-formbase-text1="{obj}" >
        <v-icon v-bind="obj" icon="mdi-printer"></v-icon>
      </template>

      <template #slot-inject-prepend-inner-key-formbase-text1="{obj}" >
        <v-icon v-bind="obj" icon="mdi-menu"></v-icon>
      </template>
              
      <!-- INJECT label into switch -->
      <template #slot-inject-label-key-formbase-deep-switch="{obj}">
        <span class="slot-label">Slot Label of <b>{{obj.key}}</b></span>
        <v-progress-circular
          :indeterminate="obj.value"
          size="24"
          color="red"
          class="ms-2"
        ></v-progress-circular>
      </template>

      <!-- INJECT label -->
      <template #slot-inject-label-key-formbase-deep-radio="{obj}">
          <v-sheet small label class="pa-4" color="green">
            Slot Label Deep Radio: {{obj.value}}
          </v-sheet>
      </template>

    </v-form-base>

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import Infoline from '@/components/infoline.vue'
import { log, logModel } from '@/lib.js'

// const progress =ref(0)

const optionsRadio = [
  { trueIcon: 'mdi-printer', value: 'printer', label:'print'  }, 
  { trueIcon: 'mdi-wifi', value: 'wifi', label:'wifi', },
  { trueIcon: 'mdi-bell', value: 'bell', label:'bell',},
]

const myModel =ref({
  text1: 'text1',
  text2: 'text2',
  text3: 'text3',
  text4: 'text4',
  deep: {
    radio: 'bell',
    switch: true
  }
})

const mySchema =ref({ 
  text1: { el: 'text', label: 'text1', onClickAppendInner: (e, obj) => alert(`Email ICON clicked has value ${obj.value}`),
  onClickAppend: (e, obj) => alert(`Email ICON clicked has value ${obj.value}`)
 },
  text2: { el: 'text', label: 'text2' },
  text3: { el: 'text', cols:6, label: 'text3' },
  text4: { el: 'text', cols:6, label:'text4' },
  deep: {
    radio: { el: 'radio', options:optionsRadio, inline:true, cols:6, label:'Radio-Inline TrueIcons', color:'success' },
    switch: { el:'switch', label:'Switch', cols:6}
  },
})

const progress = computed( () => {
  return Math.min(100, ( myModel.value.text1?.length * 5 ) )
})

const color = computed( () => ['error', 'warning', 'success', 'info'][Math.floor(progress.value / 26)] )
 
</script>
