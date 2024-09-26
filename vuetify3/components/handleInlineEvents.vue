<template>
  <v-container class="container-box">  
   <h4>Use Inline-Events from Schema</h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <v-form-base 
        :id=id
        :model= "myModel"
        :schema= "mySchema"
        :cols="6"
        @blur="log"
        @focus="log"
        @click="log"
        />
        <!-- @input:modelValue="log"
        @update:modelValue="log" -->
     
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, nextTick } from 'vue'
  import Infoline from '@/components/infoline'
  import log from '@/lib.js'
  
  const visible = ref(false)
  const iconVisible = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  
  const myModel = ref({
    nested:{
      demo_input: 'text',
    },
    demo_updateModelValue: `text`  
  })

  const id =ref('handle-inline-event')
  const toUpper = (e,obj,ec) => {

    let el = document.getElementById(`${id.value}-updateModelValue` )
    let pos = el.selectionStart // id="handle-inline-event-updateModelValue" 
    console.log('el.selectionStart',pos);
    console.log('el.selectionStart ec',e,obj, ec);
        
    el.value=el.value?.toUpperCase()

     nextTick(()=>{
          el.focus();
          el.setSelectionRange(pos,pos);
          console.log('el.selectionStart POS',pos);
        })

        return true
  }
  
  const mySchema = ref({
    // demo_input1: { 
    //     el:'text', 
    //     onInput: (e,obj,ec) => {
    //       console.log('++INFPUT', e);
    //       console.log('++INFPUT', obj.value);
    //       console.log('++INFPUT', ec);
    //       return ec?.value?.toUpperCase()
    //       return e.toUpperCase()
    //       return 'NEWVALUE' 
    //       return
    //       return obj?.value.toUpperCase() // works only on native event 'INPUT' not on 'UPDATE:MODELVALUE'
    //     },
    //     hint:'onInput' 
    //   },
    nested:{ 
      demo_input: { 
        el:'text', 
        onInput: (e,obj,ec) => {
          console.log('++INFPUT', e);
          console.log('++INFPUT', obj.value);
          console.log('++INFPUT', ec);
          // return ec?.value?.toUpperCase()
          return e.toUpperCase()
          return 'NEWVALUE' 
          return
          return obj?.value.toUpperCase() // works only on native event 'INPUT' not on 'UPDATE:MODELVALUE'
        },
        hint:'onInput' 
      }
    },
    demo_updateModelValue: {
      el:'text', 
      // onUpdateModelValue: (e,o,ec) => ec?.value?.toUpperCase(),
      // onUpdateModelValue: (e,o,ec) => e.toUpperCase(),
      onUpdateModelValue: (e,obj,ec) => {
        console.log('++INF MODEL', e);
        console.log('++INF MODEL', obj.value);
        console.log('++INF MODEL', ec);
        
        return ec?.value?.toUpperCase()
        return e.toUpperCase()
        // return
        // return obj?.value.toUpperCase() // works only on native event 'INPUT' not on 'UPDATE:MODELVALUE'
        // return 'NEWVALUE' 
      },
      hint:'onUpdateModelValue: ',
    },
    wrap: { 
      el:'wrap', color:'#cde',  title:'Wrap', class:'pa-4',
      schema:{
        nested:{ 
          demo_input:{el:'text'}
        },
        view1Inlay: { 
          el:'wrap', title:'View Deep', cols:12, color:'#def' ,
          schema:{
            demo_updateModelValue:{el:'text', color:'red',
            onUpdateModelValue: (e,obj,ec) => {
              console.log('++INF WRAP MODEL', e);
              console.log('++INF WRAP MODEL', obj.value);
              console.log('++INF WRAP MODEL', ec);
              return e.toLowerCase()
              // return
              // return ec?.value?.toUpperCase()
              // return obj?.value.toUpperCase() // works only on native event 'INPUT' not on 'UPDATE:MODELVALUE'
              // return 'NEWVALUE' 
            },
            },          
          }
        },          
      }
    },
    group:{ el:'group', title:'Group', class:'pa-4', color:'#ada', schema:{ 
      demo_input: { el: 'text', color:'green' },
      subgroup:{ el:'group', title:'SubGroup', class:'pa-4', cols:12, color:'#afa', 
        schema:{ 
          demo_updateModelValue: { el: 'text', cols:12, onUpdateModelValue: (e,obj,ec) => {
              console.log('++INF GROUP MODEL', e);
              console.log('++INF GROUP MODEL', obj.value);
              console.log('++INF GROUP MODEL', ec);
              return e.toUpperCase()
              // return
              // return ec?.value?.toUpperCase()
              // return obj?.value.toUpperCase() // works only on native event 'INPUT' not on 'UPDATE:MODELVALUE'
              // return 'NEWVALUE' 
            }, },    
        }
      },  
      demo_updateModelValue: { el: 'text' },     
     }
    }

  })
    // email: { 
    //   el:'text', 
    //   clearable:true, 
    //   prependInnerIcon:'mdi-email', 
    //   onClickPrependInner: (e, obj) => alert(`Value ${obj.value}`),
    //   hint:'onClickPrependInner:(e,obj)=>alert(`Value ${obj.value}`' 
    // },
    // password: { 
    //   el:'text', 
    //   type:visibleType, 
    //   appendInnerIcon:iconVisible, 
    //   onClickAppendInner: (e) => {visible.value = !visible.value}, // don't return value, use {}  - (e) => {v = !v } 
    //   hint:'onClickAppendInner:()=>{visible.value=!visible.value}'  
    // }, 
    // textIcons:{ 
    //   el:'text', 
    //   cols:12,
    //   prependInnerIcon:'mdi-menu', 
    //   prependIcon:'mdi-credit-card-outline ', 
    //   appendIcon:'mdi-menu', 
    //   appendInnerIcon:'mdi-eye-outline', 
    //   onClickPrepend: () => 'Clicked Prepend', 
    //   onClickPrependInner: () => 'Clicked PrependInner',
    //   onClickAppend: () => 'Clicked Append', 
    //   onClickAppendInner: () => 'Clicked AppendInner',
    // },
  // })

</script>