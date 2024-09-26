<template>
  <v-container class="container-box">  
   <h4>use cols to arrange input</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="cols-demo"
      :model= "myModel"
      :schema= "mySchema"
      :cols="6"
    />

    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>

  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref } from 'vue'
  import Infoline from '@/components/infoline'

  const rules= {
    required: v => !!v || 'required.',
    min: v => v?.length >= 8 || 'min 8 chars',
    pwmatch: v => myModel.value.password  === myModel.value.passwordAlternative|| `passwords must match`,
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) 
  }
  
  const myModel = ref({
    text1:'cols 6',
    text2:'cols 3',
    text3:'cols 3',
    text4:'cols 2',
    text5:'cols 4',
    text6:'cols 4 offset 2',
  })

  const mySchema = ref({
    // display order is order of props in schema 
    text1: {el:'text', label:'cols 6', cols:6 },
    text2: {el:'text', label:'cols 3', cols:3 },
    text3: {el:'text', label:'cols 3', cols:3 },
    text4: {el:'text', label:'cols 2', cols:2 },
    text5: {el:'text', label:'cols 4', cols:4 },
    text6: {el:'text', label:'cols 4, offset 2', cols:{ cols:4, offset:2} },
  })
 
</script>
