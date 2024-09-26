<template>
  <v-container class="container-box">  
   <h4>Autogenerate 'Model' Structure from deep nested Schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="missing-base"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
      @update:modelValue="log"
    />
    <p>Model is never defined but automatically generated</p>
  
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive } from 'vue'
  import Infoline from '@/components/infoline'
  import log from '@/lib.js'
  
  
  // Try to remove ':model' from <v-form-base :model= "myModel"/>
  // It will work, but you can get changes only from update:modelValue event
  const myModel = ref({})
  
  const mySchema = ref({
    base: {
      // objects
      check: { el: 'checkbox', label: 'base check' },
      checkdeep: { 
        check: { el: 'checkbox', label: 'deep check' },
        checkdeep: { 
          check: { el: 'checkbox', label: 'double deep check' },
        }
      },
      checkgrouped:{ 
        el:'group', 
        title:'Check in Group', color:'green-lighten-5',
        schema:{
          checkgrouped: { 
            check: { el: 'checkbox', label: 'check in group',color:'green' },
            switch: { el: 'switch', label: 'Switch Group' },
          },
        }
      }, 
      // arrays
      switch: [
        { el: 'switch', label: 'Switch A' },
        { el: 'switch', label: 'Switch B' },
      ],
      checkbox: [
        { el: 'checkbox', label: 'A' },
        { el: 'checkbox', label: 'B' },
        // nested array
        [
          { el: 'checkbox', label: 'C-A', color: 'red' },
          { el: 'checkbox', label: 'C-B', color: 'green' }
        ],
        { checkboxArray: [
          { el: 'checkbox', label: 'D-A', falseValue: 'Empty', value:'Checked' },
          { el: 'checkbox', label: 'D-B', falseValue: 'Unchecked', value:'Checked'  }
        ]
        }
      ]
    }
  })
  
</script>
