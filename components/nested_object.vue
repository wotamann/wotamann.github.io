<template>
  <v-container class="container-box">  
   <h4>Deep nested Objects - prebuild model '_buildModel=true'</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base
      :config="{ _buildModel:true}"  
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
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logElement } from '@/lib.js'

  const myModel = ref({    
    object: {
      a:{
         check: false,         
        b:{
          check: true,         
        }
      }
    }
    // buildModel: {
    //   a:{
    //      check: false,         
    //     b:{
    //       check: true,         
    //     }
    //   }
    // }
  })

  const mySchema = ref({
    object: {
      a:{
        check: { el: 'checkbox', label:'OBJECT A', color:'#c22' },         
        b:{
          check: { el: 'checkbox', label:'OBJECT A.B', color:'#c22' },         
        }
      },
    },
    hr:{el:'divider', cols:12},
    buildModel: {
      a:{
        check: { el: 'checkbox', label:'AUTO A', color:'#2cf', nullValue:true },         
        b:{
          check: { el: 'checkbox', label:'AUTO A.B', color:'#2cf' },         
        }
      },
    }
  })

</script>
