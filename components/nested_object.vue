<template>
  <v-container class="container-box">  
   <h4>Deep nested Objects </h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base 
        id="formbase-deep"
        :config="{ 
          _useOrder:true
        }"
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
    based: 'YES',         
    nested: {
      a:{
        check: false,         
        b:{
          check: true,         
          c:{
            check: false      
          }
        }
      }
    }
  })

  const mySchema = ref({
    based: { el: 'checkbox', label:'BASED YES/NO', trueValue:'YES', falseValue:'NO', color:'#181' },         
    nested: {
      a:{
        check: { el: 'checkbox', label:'NESTED-A (Display@Last Pos)', color:'#c22', _order:9000 },         
        b:{
          check: { el: 'checkbox', label:'NESTED-A-B', color:'#2cf' },         
          c:{
            check: { el: 'checkbox', label:'NESTED-A-B-C', color:'#da2' },         
            d:{
              check: { el: 'checkbox', label:'NESTED-A-B-C-D ', color:'#22f' },
            },
          }
        },
      }
    } 
  })

</script>
