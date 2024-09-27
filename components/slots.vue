<style>
  /* INFO-SCOPED: Don't use '<style scoped>' because scoped CSS is inside a child-component not accessable */
  /* CSS Item --- set all items  */
  #form-base { background-color: #fafafa; border:1px solid #ddd; margin-top: 6px; }
  #form-base .slot{ font-size: 0.9rem; font-weight:400 ; width:100%; padding:6px;  }
  #form-base .form{ padding:8px;  color: #b8b500; background-color: #fffd8f20 }
  #form-base .key{ color: #06b34e; background-color: #06b34e20 }
  #form-base .type{ color: #9906b3; background-color: #9906b320 }
  #form-base .item { padding:0.5rem; border: 1px dotted #a2bdf062}
</style>

<template>
  <v-container class="container-box">  
    <p>Slots for Form, Keys, Items, Types and Tooltips</p>
     
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        id="form-base"
        v-model="myModel"
        :schema="mySchema"
        :cols="6"
        @update:modelValue="log"       
      >
        <!-- @click="log"        -->

        <!-- FORM SLOTS -->
        <template #slot-top-form-base><p class="slot form">Top Slot of 'Form'</p></template>
        <template #slot-bottom-form-base><p class="slot form">Bottom Slot of 'Form'</p></template>
        
      <!-- KEY SLOTS -->
        <!-- TOP of KEY -->
        <template #slot-top-key-form-base-name1="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>
        <template #slot-top-key-form-base-deep-switch="{obj}"><p class="slot key">Slot at Top of Key '{{obj.key}}'</p></template>
        <!-- ITEM of KEY -->
        <template #slot-item-key-form-base-name2="{obj, id, index}"><p class="slot key">Slot replaces Item with Key '{{obj.key}}'</p></template>
        <!-- BOTTOM of KEY -->
        <template #slot-bottom-key-form-base-name1="{obj, index, id}"><p class="slot key">Slot at Bottom of Key '{{obj.key}}'</p></template>      
        
      <!-- TYPE SLOTS -->
        <template #slot-top-type-form-base-text="{obj}"><p class="slot type">Slot at Top of all with Type '{{obj?.schema?.el}}'</p></template>
        <template #slot-bottom-type-form-base-switch ="{obj}"><p class="slot type">Slot at Bottom of all with Type '{{obj?.schema?.el}}'</p></template>
        
      <!-- INJECT SLOTS INTO KEY  -->  
        <!-- INJECT progress into key [component_id]-->
        
        <!-- SIGNATURE 'slot-inject-[slotname]-[key|type|item]-[id]-[key]' -->
        <!--            slot-inject-progress-key-form-base-keyname -->

        <!-- <template #slot-inject-progress-key-form-base-nameSlot="">
          <v-progress-linear
            :value="progress"
            :color="color"
            absolute
            height="9"
          />
        </template> -->

        <!-- INJECT selection -->
        <template #slot-inject-loader-key-form-base-name4="{text}">
          INJECTED LOADER SLOT          
          <v-progress-linear color="blue" height="16" indeterminate />
        </template>

        <!-- INJECT prepend/append -inner name1-->
        <template #slot-inject-append-key-form-base-name1="{obj}" >
          <v-icon v-bind="obj" icon="mdi-circle"></v-icon>
        </template>
        
        <template #slot-inject-append-inner-key-form-base-name1="{obj}" @click="alert(1)">
          <v-icon v-bind="obj" icon="mdi-email"></v-icon>
        </template>

        <template #slot-inject-prepend-key-form-base-name1="{obj}" >
          <v-icon v-bind="obj" icon="mdi-printer"></v-icon>
        </template>

        <template #slot-inject-prepend-inner-key-form-base-name1="{obj}" >
          <v-icon v-bind="obj" icon="mdi-menu"></v-icon>
        </template>
                
        <!-- INJECT label into switch -->
        <template #slot-inject-label-key-form-base-deep-switch="{obj}">
          <span class="slot-label">Label <b>Slot of Key</b> '{{obj.key}}'</span>
          <v-progress-circular
            :indeterminate="obj.value"
            size="24"
            color="red"
            class="ms-2"
          ></v-progress-circular>
        </template>

        <!-- INJECT label -->
        <template #slot-inject-label-key-form-base-deep-radio="{option}">
            <v-chip small label color="blue">
              Slot-{{option}}
            </v-chip>
        </template>

      </v-form-base>

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
   
  </v-container>
</template>

<script setup>
import vFormBase from '@/vFormBase.vue'
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import Infoline from '@/components/infoline'
import { log, logMV } from '@/lib.js'

const myModel =ref({
  name1: 'name1',
  name2: 'name2',
  name3: 'name3',
  name4: 'name4',
  deep: {
    radio: 'A',
    switch: true
  }
})

const mySchema =ref({ 
  name1: { el: 'text', label: 'name1', onClickAppendInner: (e, obj) => alert(`Email ICON clicked has value ${obj.value}`),
  onClickAppend: (e, obj) => alert(`Email ICON clicked has value ${obj.value}`)
 },
  name2: { el: 'text', label: 'name2' },
  name3: { el: 'text', label: 'name3' },
  name4: { el: 'text', type:'name4' },
  deep: {
    radio: { el: 'radio', label: 'Radio' },
    switch: { el:'switch', label:'Switch'}
  }
})

const progress = computed( () => {
  let len = myModel.nameSlot ? myModel.nameSlot.length : 0;
  return Math.min(100, ( len * 10) )
})

const color = computed( () => ['error', 'warning', 'success'][Math.floor(progress / 40)] )
 
</script>
