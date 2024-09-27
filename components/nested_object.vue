<template>
  <v-container class="container-box">  
   <h4>Deep nested Objects </h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base 
        id="nested-object"
        :model= "myModel"
        :schema= "mySchema"
        @update:modelValue="log"
      />
   
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'

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
        check: { el: 'checkbox', label:'NESTED-A (Display@Last Pos)', color:'#a22',pos:1000 },         
        b:{
          check: { el: 'checkbox', label:'NESTED-A-B', color:'#2a2' },         
          c:{
            d:{
              text:'text',
              check:'checkbox'
            },
            check: { el: 'checkbox', label:'NESTED-A-B-C (Display@First Pos)', color:'#22a', pos:1 },         
          }
        },
      }
    } 
  })

</script>
