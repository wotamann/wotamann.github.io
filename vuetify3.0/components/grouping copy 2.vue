<template>
  <h4>Add Layout to model structure by using 'group' to </h4>
  <v-form class="border-frame">

     <!-- FORM-BASE-COMPONENT -->
     <v-form-base 
      id="gruppe"
       :model="myModel"
       :schema="mySchema"
       :cols="6"
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
  withGroup:{ 
    nameA1:'Steve', 
    checkA1:true,
    // groupB:{ 
    //   nameB1:'Albert', 
    //   checkB1:true,
    //   groupC:{ 
    //     nameC1:'Nikolaus', 
    //     checkC1:true
    //   }
    // }
  },
  withoutGroup:{ 
    nameA1:'Steve', 
    checkA1:true,
    // groupB:{ 
    //   nameB1:'Albert', 
    //   checkB1:true,
    //   groupC:{ 
    //     nameC1:'Nikolaus', 
    //     checkC1:true
    //   }
    // }
  },
})
const mySchemaTemplate={
  nameA1: { el: 'text', label:'Name A1', color: 'red' },    
  checkA1: { el: 'checkbox', label: 'Checkbox A1', color: 'red', },
  groupB:{ 
      nameB1: { el: 'text', label:'Name B1', color:'purple' },    
      checkB1: { el: 'checkbox', label: 'Checkbox B1', color: 'purple' },          
      groupC:{ 
          nameC1: { el: 'text', label:'Name C1', color: 'amber' },    
          checkC1: { el: 'checkbox', label: 'Checkbox C1', color: 'amber' },          
        }
      }  
    }    
const mySchema = ref({

  // grouping on 'groupWithGroup'
  withGroup:{ el:'group', title:'Group Object', cols:8, class:'pa-2', color:'grey-lighten-4', schema:mySchemaTemplate },

  // without grouping use native object 'groupWithoutGroup'
  withoutGroup:mySchemaTemplate

})
</script>
