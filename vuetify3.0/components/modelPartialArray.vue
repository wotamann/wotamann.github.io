<template>
  <v-container class="container-box">  
   <h4>Object & Array in Model autocompleted from Schema</h4>
   <h4>Add Info to your form by using 'card' in schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="partial-arr-obj"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
      @update:modelValue= "log"
    />
    <!-- @click= "log" -->
    
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline'
  import log from '@/lib.js'

  const myModel = ref({
    obj:{
      a:{ done:true, title:'preset'}
    },
    arr:[
      {done:true, title:'preset'},
    ]
  })

  const mySchema =ref({
    
    card1:{ el:'card', cols:12, title:'build partial object in model ', color:'red-lighten-2'},

    obj: {
    a:{
      title: { el: 'text' },
      done: { el: 'checkbox' },
    },    
    b:{
      title: { el: 'text' },
      done: { el: 'checkbox' },
    },    
    c:{
      title: { el: 'text' },
      done: { el: 'checkbox' },
    }   
    },
   
    card2:{ el:'card', cols:12, title:'build partial array in model', color:'indigo-lighten-3'}, 

    arr: [
    {
      title: { el: 'text' },
      done: { el: 'checkbox' },
    },    
    {
      title: { el: 'text' },
      done: { el: 'checkbox' },
    },    
    {
      title: { el: 'text' },
      done: { el: 'checkbox' },
    }   
  ]
})

</script>
