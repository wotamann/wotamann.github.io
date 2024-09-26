<template>
  <v-container class="container-box">  
   <h4>Basic Elements</h4>
  

    <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        :use-form="{ class:'pa-4', style:'backgroundColor:#ccddff'}"
        :model= "myModel"
        :schema= "mySchema"
      />
    <!-- FORM-BASE-COMPONENT -->
    
    
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline'
  import { ref } from 'vue'
  
  const onClick = (val,obj,event) => alert('Clicked')
  // const onClick = (val,obj,event) => console.log(val,obj,event);
  
  const myModel = ref({
    textfield:'text',
    //unset props will be auto-added       
  })
    
  // control Display Order in Schema
  const mySchema = ref({
    // title: {el:'card', title:'Formular', color:'#88aaee',cols:12},
    textfield: { el:'text', label:'text', hint:'type here', clearable:true }, 
    select:{ el:'select', multiple:false, label:'Select', items:[1,2,3,4] },
    checkbox:{ el:'checkbox', label:'Checkbox', color:'primary' },  // https://vuetifyjs.com/en/api/v-checkbox/#links
    button: { el:'btn', text:'Button', color:'red', block:true, onClick},  // https://vuetifyjs.com/en/api/v-btn/    
    buttonD: { el:'custom_button', text:'BASIC Button', block:true},  // https://vuetifyjs.com/en/api/v-btn/    
    yesNo:{ el:'yes_no'},
    // date1:{ el:'pickDate'},
    // color1:{ el:'pickColor'},
    iconA: { el:'icon', icon:'mdi-format-align-center', size:'42', color:'green'}
  })

  
</script>
