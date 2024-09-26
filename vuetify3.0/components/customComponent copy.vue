
<style scoped>
  .custom-box { background-color: #b3aeff;}
</style>

<template>
  <v-card class="ma-3 pa-4 custom-box" elevation="6" :title="title" :color= "color">
    
    <v-text-field
      prepend-inner-icon="mdi-credit-card-outline" 
      hint="Creditcard ####-####-####-####"
      
      :clearable="attrs.clearable"
      @click:clear="onClear"
      
      :value= "modelValue"
      @input= "emit" 
    />
    <br/>
{{ model }}
    <a href="https://beholdr.github.io/maska/#/?id=programmatic-use">Maska Doc</a>
  </v-card>
</template>



<script setup>
  import { Mask } from "maska"
  import { ref, toRefs, inject, computed, useAttrs } from 'vue'
  
  const props = defineProps(['modelValue','title', 'color','mask'])
  const { modelValue, title, color, mask:m } = toRefs(props)
  
  const attrs = useAttrs(); 

  const mask = new Mask({ mask:m.value })

  const $emit = defineEmits(['update:modelValue'])
  
  // DO MASKING HERE -> mask.masked(e)
  //https://beholdr.github.io/maska/#/?id=programmatic-use
  const emit = (e) => {
    console.warn(e);
    console.warn(model);
    // $emit('update:modelValue', mask.masked(e))
    $emit('update:modelValue', e.target.value)
    
  } 
  
  const onClear= () => { 
    modelValue.value = '' 
    emit('')
  }

</script>