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

  // Schema NAME, CHECK
  const name = { 
    el: 'text', 
    label:'Text', 
    cols:8, 
    onInput:(val,obj,ev)=> console.log(`INLINE FN INPUT KEY ${obj.key} has VALUE ${val} ON PATH ${ev.path}`) 
  }

  const check = { 
    el: 'checkbox', 
    label: 'Check', 
    cols:3, 
    color:'red', 
    // onClick:(val,b,c)=> console.log('INLINE FN CLICK',val,b,c),
    // onUpdateModelValue:(val,b,c)=> console.log('INLINE FN UPDATE',val,b,c),
    onInput:(val,obj,ev)=> console.log(`INLINE FN INPUT KEY ${obj.key} has VALUE ${val} ON PATH ${ev.path}`) 
  }

  const levelObject = {
    name:'level1', 
    check:true,  
    level:{
      name:'level2', 
      check:false,  
      level:{
        name:'level3', 
        check:true,  
        level:{
          name:'level4', 
          check:false,  
        }
      }
    }
  }

  const myModel = ref({
    noGroup:levelObject,
    useGroup:levelObject,
  })

  const mySchema = ref({
    // NO GROUPING ELEMENT FOR LAYOUT
    noGroup:{
      name, 
      check,  
      level:{ 
        name, 
        check,  
        level:{ 
          name, 
          check,  
          level:{
            name, 
            check,  
            }
        }
      }
    },
    // USE GROUPING ELEMENT FOR LAYOUT
    useGroup:{ el:'group', title:'Group Level 1', cols:11, class:'pa-2', color:'blue-lighten-4', 
      schema:{
        name, 
        check,  
        level:{ el:'group', title:'GroupLevel 2', cols:11, class:'pa-2', color:'red-lighten-4', 
          schema:{
            name, 
            check,  
            level:{ el:'group', title:'Group Level 3', cols:11, class:'pa-2', color:'yellow-lighten-4', 
              schema:{
                name, 
                check,  
                level:{ el:'group', title:'Group Level 4', cols:11, class:'pa-2', color:'green-lighten-4', 
                  schema:{
                    name, 
                    check,  
                  }
                }
              }
            }
          }
        }
      }
    },
      
  })

</script>
