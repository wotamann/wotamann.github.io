<template>
  <h4>Build Object/Array Model from Schema</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
      :config="{_buildModel:false}"
      :cols="6"
      @update= "logModel"

    />
    
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logModel } from '@/lib.js'

  const myModel = ref({
    // EMPTY MODEL - config_buildModel=true PRE BUILD / =false BUILD ON FLY 
  })

  const mySchema =ref({
    card1:{ el:'v-card', title:'build model object', color:'red-lighten-1', cols:12},
    obj: {
      a:{
        title: { el: 'v-text-field', nullValue:'object' },
        done: { el: 'v-checkbox' },
      },    
      b:{
        title: { el: 'v-text-field' },
        done: { el: 'v-checkbox', nullValue:true },
      },    
    },
   
    card2:{ el:'v-card', title:'build model array', color:'indigo-lighten-1', cols:12}, 
    arr: [
      {
        title: { el: 'v-text-field', nullValue:'array' },
        done: { el: 'v-checkbox' },
      },    
      {
        title: { el: 'v-text-field',  },
        done: { el: 'v-checkbox', nullValue:true },
      },    
    ]
})

</script>
