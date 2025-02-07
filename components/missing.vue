<style scoped>
</style>

<template>
   <h4>Handling of missing Properties in Model or Schema</h4>
   
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model="myModel"
      :schema="mySchema"
    />     

    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>

</template>

<script setup>
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'

  const myModel = ref({
    ModelAndSchema: 'Defined Model and Schema',
    // No Prop in mySchema - property value remains untouched  
    missingSchema: 'Missing Schema - Value in Model keeps untouched',  
  })
  const mySchema = ref({
    ModelAndSchema: { el:'text', label: 'Defined in Model and Schema' },
    // No Prop in myModel - property will be displayed & edited
    missingModel: { el:'text', label: 'The missing Model will be added automatically' }  
  })


</script>
