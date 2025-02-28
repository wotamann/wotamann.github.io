<template>
  <h4>Combine component-events with inline-events</h4>

  <!-- FORM-BASE-COMPONENT -->
  <v-form-base 
    id="formbase-event"
    :model= "myModel"
    :schema= "mySchema"
    :cols="4"
    @update:customEvent:formbase-event-component="logNamedElement" 
    @update:customEvent:formbase-event-both="logNamedElement" 
    />
    <!-- @update:customEvent="logElement"  -->

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logInline, logNamedElement } from '@/lib'

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