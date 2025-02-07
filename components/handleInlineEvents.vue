<template>
  <h4>Define Inline-Events in Schema</h4>

    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
    />
    
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref, computed } from 'vue'
  import { logModel, logInput } from '@/lib.js'
  
  // IMPORTANT: USE RETURN VALUE IN INLINE FUNCTION TO MODIFY VALUE 
  const onInput = logInput
  const onUpdateModelValue = logModel
  const onClickClear = (val, ev) => {
    confirm (`INLINE CLICK-CLEAR | Delete '${ev.modelValueLast}'`) ? '': ev.modelValueLast  
    return // undefined or value 
  }
  const toUpperCase = val => {
    return val.toUpperCase() // return new uppercase value
  }
  
  const visible = ref(false)
  const iconVisible = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  const onClickAppendInner = (e) => { visible.value = !visible.value } // don't return value  
  
  const el = 'text'

  // --- MODEL ---
  const myModel = ref({
    updateModelValue: `Log updateModelValue & input`,
    clickClear: `Confirm clickClear`,
    modifyUppercase: `Change to Uppercase`,
    handleClick: `Handle Icon-Click`
  })
  
  // --- SCHEMA ---
  const mySchema = ref({
    updateModelValue:{ el, onInput, onUpdateModelValue },   
    clickClear: { el, clearable:true, onClickClear },
    modifyUppercase:{ el, onUpdateModelValue:toUpperCase, },   
    handleClick: { el, type:visibleType, appendInnerIcon:iconVisible, onClickAppendInner} 
  })
</script>