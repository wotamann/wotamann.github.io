<template>
  <v-container class="container-box">  
   <h4>Use predefined Elements</h4>
  

    <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        :use-form="{ class:'pa-4', style:'backgroundColor:#EEBBBB'}"
        :model= "myModel"
        :schema= "mySchema"
        :cols=4
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
    //unset props will be auto-added       
  })
    
  const mySchema = ref({
    coloredButton: { map:'colored_button'},    
    stopButton: { map:'stop_button'},
    yesNo:{ map:'yes_no', color:'green'},
  })

  
</script>
