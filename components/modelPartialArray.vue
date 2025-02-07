<template>
  <v-container class="container-box-new">  
   <h4>Create object and array in non existing model from schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="partial-formbase"
      :model= "myModel"
      :schema= "mySchema"
      @update= "logModel"
    />
    
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logModel } from '@/lib.js'

  const myModel = ref({})

  const mySchema =ref({
    card1:{ el:'card', cols:12, title:'build model object', color:'red-lighten-2'},
    obj: {
      a:{
        title: { el: 'text', nullValue:'object' },
        done: { el: 'checkbox' },
      },    
      b:{
        title: { el: 'text' },
        done: { el: 'checkbox' },
      },    
    },
   
    card2:{ el:'card', cols:12, title:'build model array', color:'indigo-lighten-1'}, 
    arr: [
      {
        title: { el: 'text', nullValue:'array' },
        done: { el: 'checkbox' },
      },    
      {
        title: { el: 'text',  },
        done: { el: 'checkbox' },
      },    
    ]
})

</script>
