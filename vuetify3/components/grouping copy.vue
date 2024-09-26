<template>
  <h4>Use Type 'group' for wrapping content into Groups and control Display with 'row' Attribute</h4>
  <p>With 'group' model structure is used for grouping. For grouping without model structure use 'wrap' </p>
  <v-form class="border-frame">

     <!-- FORM-BASE-COMPONENT -->
     <v-form-base 
       :model="myModel"
       :schema="mySchema"
       @update:modelValue="log"
     />     

   </v-form>

   <!-- Stuff  -->    
   <infoline :model="myModel" :schema="mySchema"/>

</template>

<script setup>
 import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'

 import vFormBase from '@/vFormBase.vue'
 import Infoline from '@/components/infoline'
 import log from '@/lib'

const myModel = ref({
  // groupA:{ 
  //   nameA1:'Taleb', 
  //   checkA1:true,
  //   group1:{ 
  //     name1:'Jobs', 
  //     check1:false
  //   },        
    // group:{ 
      nameA1:'Steve', 
      checkA1:true,
    // },
    // groupB:{ 
      nameB1:'Elon', 
      checkB1:true
    // }
  // } 
})
const mySchema = ref({
    groupA: { el:'group', title:'Group A',subtitle:'This is a subtitle', cols:12, class:'pa-2 rounded-lg',  
      schema:{
        nameA1: { el: 'text', label:'Name A1' },    
        checkA1: { el: 'checkbox', label: 'Checkbox A1', color: 'red' },
        groupA1: { el:'group', label:'Group 1', cols:11, class:'pa-2',  
          schema:{
            nameB1: { el: 'text', cols:8, label:'Name B1' },    
            checkB1: { el: 'checkbox', label: 'Checkbox B1', color: 'blue' }
          }
        },
      }
    },
    group: { el:'group', title:'Group', cols:6, class:'pa-2',  
      schema:{
        nameA1: { el: 'text', label:'A1',color: 'green' },    
        checkA1: { el: 'checkbox', label: 'A1'  }
      }
    },        
    wrap: { el:'wrap', title:'WRAP', cols:5, class:'pa-2',    
      schema:{
        nameB1: { el: 'text', label:'B1' },    
        checkB1: { el: 'checkbox', label: 'B1'  }
      }
    }        
  })
</script>
