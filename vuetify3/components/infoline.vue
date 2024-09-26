<style scoped>
  .bg {color:#5a5a5a}
  pre.model { font-size: 0.75rem;  color:#102077; text-align:left }
  pre.schema { font-size: 0.75rem; color:#770010; text-align:left }
  h5 { font-size: 1.2rem; padding:8px}
  .bg { background-color: #1a8aeb20;}
  #path { padding:6px}
</style>
<template>
  <br/>
  <v-row class="bg" no-gutters>
    <!-- <h4 id="path" >
      inspect code at&nbsp'
      '&nbspand watch events at console 
    </h4>
    <br/> -->
    <v-divider/>  
    <v-col cols="6" class="pa-4">
      <h5>Code</h5>      
      inspect <a target="_blank" :href="`${url}${path}.vue`" >{{path.replace('/','')}}.vue</a>
    </v-col>
    <v-col cols="6" class="pa-4">
      <h5>Events</h5>
      <p>watch events at console</p>
    </v-col> 
    <v-divider/>
    <v-col cols="6" class="pa-4">
      <h5>Model</h5>
      <pre class="model" v-text="JSON.stringify(modelValue, replacer, 2)" />      
    </v-col>
    <v-col cols="6" class="pa-4">
      <h5>Schema</h5>
      <pre class="schema" v-text="JSON.stringify(schema, replacer, 2)" />
    </v-col>    
  </v-row>
</template>

<script setup>
import { inject, provide, ref, reactive, toRefs, watch, watchEffect, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router';
JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};
// const url = 'https://github.com/wotamann/vuetify-form-base/blob/master/example/src/components'
const url = '/components'
const fileObjectToString = (val) => `${val.name} - (File Object)` 

const route = useRoute()
const path = route.path

const props = defineProps(['value', 'model', 'schema', 'editable'])

const { value, model, schema } = toRefs(props)
 
const modelValue = computed( ()=>  model.value || value.value )
  
const replacer = (key, value) => {
  if (typeof value === 'function') {
    return '[Function]' 
  }  
  if (Array.isArray(value) && value[0] instanceof File) {
    // map Fileobject to Filename
    return value.map(i => fileObjectToString(i) )
  }
  if (value instanceof File) {
    return fileObjectToString(value)
  }
  return value
}
</script>
