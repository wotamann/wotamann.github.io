<style scoped>
  /* INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable */
  /* CSS Item --- set all items  */
  :deep( #formbase ) { background-color: #fafafa; border:1px solid #ddd; margin-top: 6px; }
  :deep( #formbase ) .slot{ font-size: 0.9rem; font-weight:400 ; width:100%; padding:6px;  }
  :deep( #formbase ) .form{ padding:8px;  color: #b8b500; background-color: #fffd8f20 }
  :deep( #formbase ) .key{ color: #06b34e; background-color: #06b34e20 }
  :deep( #formbase ) .type{ color: #9906b3; background-color: #9906b320 }
  :deep( #formbase ) .item { padding:0.5rem; border: 1px dotted #a2bdf062}
</style>

<template>
  <v-container class="container-box">  
    <p>Slots for Form, Keys, Items, Types and Tooltips</p>
     
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
        <template #slot-top-type-formbase-text="{obj}"><p class="slot type">Slot at Top of all with Type '{{obj?.schema?.el}}'</p></template>
        <template #slot-bottom-type-formbase-switch ="{obj}"><p class="slot type">Slot at Bottom of all with Type '{{obj?.schema?.el}}'</p></template>
        
        <!-- INJECT SLOTS INTO KEY  -->  
        <!-- INJECT progress into key [component_id]-->
        
        <!-- SIGNATURE 'slot-inject-[slotname]-[key|type|item]-[id]-[key]' -->
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
   
  </v-container>
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
  text4: { el: 'text', cols:6, type:'text4' },
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
