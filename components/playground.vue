<template>
  <v-container class="container-box">  
   <h4>Playground</h4>
      
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="basic-demo"
      :model= "myModel"
      :schema= "mySchema"
      :cols="2"
      @update:modelValue="log"
      @click="log"
    />
    <v-btn :color="colorArr" @click="changeModel">EXTERNAL CHANGE Model-TEXT & SCHEMA-COLOR {{ ix }}</v-btn>
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, computed, inject } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'
  

  
  const vuetify = ref(inject('$vuetify'))

  const ix = ref(0)
  const h = ref(true)
  const hidden =computed(()=> h )
  
  const items = [1,2,3,4]
  const itemsDeep = computed( ()=> myModel.value.selectBase )
  const itemsDeepHide = computed( ()=> itemsDeep.value.length === 0 )
  const rules= {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: (a,b) => {
      console.log('rules.email-----------',a,b);
      return (`The email and password you entered don't match`)
    }
  }
  const drop = ( { value:{drag, drop} }) =>  `${drop?.toUpperCase()} + ${drag?.toUpperCase()}`


  const changeModel = () => { ix.value ++; ix.value = ix.value % 5 }
  const textArr = computed( () => ['AA','BB','CC','DD','EE'][ix.value] )
  const colorArr = computed( () => ['red','#CC3','#A8f','purple','yellow'][ix.value] )

  const myModel = ref({
    text: textArr,
    // obj:{
    //   a:{ done:true, title:'defined'}
    // },
    // arr:[
    //   {done:true, title:'defined'},
    // ]
    // icon:'START FROM ME',
    // icon2:'222 is two'
  })

  const mySchema =ref({
    
   
    text: {el:'text',color:colorArr, hint:'Click in Textfield', cols:12, label:textArr},  
    // text: {el:'text',color:colorArr, hint:'this is a custom text-field', cols:12, label:'Custom Component'},  
    // check1:{ el:'checkbox', color:'red', },
    icon2:{ el:'icon', size:120,color:'green-darken-2', icon:'mdi-domain', drop },
    icon:{ el:'icon', color:'red', size:60, end:true, icon:'mdi-vuetify', draggable:true, order:-1 },
    // check2:{ el:'checkboxbtn', color:'green', },
    
    // radiogroup:{ el:'radio',inline:true, cols:{ cols:'12', lg:'4', md:'6', offsetSm:'2', sm:'8'}, label:'GROUP RESP', options:[{label:'test',color:'indigo', value:'A'}, { value:'B'}, { value:'C'}] },
    // radiogroup1:{ el:'radio',inline:false, label:'GROUP', options:[{label:'test',color:'indigo', value:'A'}, { value:'B'}, { value:'C'}] },
    // buttongroup:{ el:'btntoggle', color:'blue' ,dark:true, multiple:true, options:[{ value:'A'}, { value:'B'}, { value:'C'}] },
    // buttongroup:{ el:'btntoggle', color:'blue' ,dark:true, multiple:true, options:[{ value:'A'}, { value:'B'}, { value:'C'}] },
    
    // responsive1:{ ...sheet('red'), cols:{ cols:'12', offsetSm:'4', sm:8 }, },    
    // selectBase:{ el:'select', multiple:true, label:'Base', items },
    // selectDeep:{ el:'select', multiple:true, label:'Dependend', items:itemsDeep, noDataText:'Select one or more...' },
    // selectDeep:{ el:'select', multiple:true, label:'Dependend', items:itemsDeep, hidden:itemsDeepHide },
  })

</script>

<style>  
</style>