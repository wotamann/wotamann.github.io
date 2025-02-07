<template>
  <v-container class="container-box-new">  
   <h4>Autogenerate 'Model' Structure from deep nested Schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="model-missing-formbase"
      :model= "myModel"
      :schema= "mySchema"
      @update="log"
    />
  
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logInline } from '@/lib.js'
  
  
  // Don't try to remove ':model' from <v-form-base :model= "myModel"/>
  // it will work, but you can get changes only update:modelValue event
  const myModel = ref({})
  
  const mySchema = ref({
    text:{ el:'text', nullValue:'custom nullvalue'},  
    check: { el: 'checkbox', label: 'check',nullValue:true },
    base: {
      // objects
      check: { el: 'checkbox', label: 'base check', onChange:logInline },   
      checkdeep: { 
        check: { el: 'checkbox', label: 'deep check' },
        checkdeep: { 
          check: { el: 'checkbox', label: 'double deep check' },
        }
      },
      checkgrouped:{ 
        el:'group', 
        container:{ is:'v-card', title:'Group', class:'pa-2', color:'blue-lighten-4'},      
        schema:{
          checkgrouped: { 
            check: { el: 'checkbox', label: 'check in group',color:'blue' },
            switch: { el: 'switch', label: 'Switch Group',color:'blue' },
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
