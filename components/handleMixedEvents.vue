<template>
  <h4>Mix Component-Events with Inline-Events</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="formbase"
    :model= "myModel"
    :schema= "mySchema"
    :cols="4"
    @update:customEvent:formbase-component="logModel" 
    @update:customEvent:formbase-both="logNamedElement" 
    />
    <!-- @update:customEvent="logElement"  -->

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logElement, logInline, logModel, logNamedElement } from '@/lib'

  const el = 'text'

  const myModel = ref({
    component: 'component event',
    inline: 'inline event',
    both: 'component and inline event',
  })
  
  const mySchema = ref({
    component: { el },
    inline: {el, onUpdateModelValue:logInline },
    both: { el, onUpdateModelValue:logInline },
  })
</script>