<template>
  <v-container class="container-box">  
   <h4>Partial Model autocompleted from deep nested Schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="partial-base"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
      @update:modelValue="log"
      @click="log"
    />
    <p>Model is only { base:{ check:true } - the Rest of  model is automatically generated -Click 'check'</p>
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'

  
  // Try to remove model also in <v-form-base :model= "myModel"/>
  // It will work, but you can get changes only from update:modelValue event

  // Create Model doesn't work with { el:'array',... } or {'el:'group',... } or {'el:'wrap',... } in Schema
  // in this cases the model must exist !!! 

  const myModel = ref({
    base:{
      check:true,
      // ... rest of deep nested model is missing and will be auto-completed 
    }
  })
  
  const mySchema = ref({
    // DEEP NESTED STRUCTURE
    base: {
      check: { el: 'checkbox', label: 'check' },
      groupWithGroup:{ el:'group', title:'Group Object', schema:{
        checkdeep: { 
          check: { el: 'checkbox', label: 'check in deep' },
        },
      } 
      },
      // arrays
      switch: [
        { el: 'switch', label: 'Switch 1' },
        { el: 'switch', label: 'Switch 2' },
      ],
      checkbox: [
        { el: 'checkbox', label: 'A' },
        { el: 'checkbox', label: 'B' },
        // nested array
        [
          { el: 'checkbox', label: 'C-A', color: 'teal' },
          { el: 'checkbox', label: 'C-B', color: 'teal' }
        ],
        { checkboxArray: [
          { el: 'checkbox', label: 'D-A', value: 'checked', color: 'red' },
          { el: 'checkbox', label: 'D-B', value: 'checked', color: 'red' }
        ]
        }
      ]
    }
  })
  
</script>
