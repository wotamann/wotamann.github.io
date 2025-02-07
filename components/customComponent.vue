
<style scoped>
</style>

<template>
  <v-card :title="title ?? 'Creditcard'" class="pa-4" :color="color ?? 'blue-lighten-3'"  >
    
    <v-text-field
      prepend-inner-icon="mdi-credit-card-outline" 
      :hint="hint ?? 'Creditcard ####-####-####-####'"
      v-maska= "mask"
      v-model= "modelValueTMP"
      :clearable="attrs.clearable"
      @click:clear="onClear"
      @click="onClick"
      @input= "onInput"
      />
  </v-card>
</template>



<script setup>
  import { vMaska } from "maska/vue" //https://beholdr.github.io/maska/v3/#/
  import { ref, toRefs, inject, computed, useAttrs } from 'vue'

  const attrs = useAttrs(); 
  const props = defineProps(['modelValue', 'title', 'mask', 'color','hint'])
  const { modelValue, mask, title, color, hint } = toRefs(props)
    
  const $emit = defineEmits(['update:modelValue'])
  const doEmit = (e) => $emit('update:modelValue', e instanceof Event ? e.target.value : e)
  
  const modelValueTMP = ref(modelValue.value)
  const onInput = (e) => doEmit(e)  
  const onClear= (e) => doEmit('')  
  const onClick= (e) => attrs.onClick(e) // send click back to parent
  
</script>