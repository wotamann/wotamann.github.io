<style scoped>
  :deep(.scroll) {background-color:#e9e9e9;}
  :deep(.item) {font-size:1rem; font-weight:500;line-height:2rem; text-align: start; padding: 6px;}
  :deep(.item:hover) {color:#af1035; font-size:1rem; font-weight:500;line-height:2rem; text-align: start; padding: 6px;}
</style>
<template>
    
  <h4>Virtual Scroll Element</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="formbaseScroll"
      :model="myModel"
      :schema="mySchema"
    >

      <!-- SLOT INJECTS THE 'SLOT DEFAULT' INTO KEY-ELEMENT 'ID_FORMBASE-KEY' -->
      <template #slot-inject-default-key-formbaseScroll-scroll="{ item, index }" >
        <div class="item" @click="logClick(index)">
          {{ item }}
        </div>
      </template>

    </v-form-base> 

    

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import { ref, reactive, toRefs, computed, onMounted, onUnmounted } from 'vue'
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logAll, logPlain, logClick, logInline,logModel, logElement } from '@/lib'

const generateFakeNameArray = (numberOfNames) => {
  const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];
  const fakeNames = [];

  for (let i = 0; i < numberOfNames; i++) {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${randomFirstName} ${randomLastName}`;
    fakeNames.push(fullName);
  }

  return fakeNames;
}

const items = generateFakeNameArray(1000)

const myModel = ref({})

const mySchema = ref({
  scroll:{ el:'virtual-scroll', items, height:300, class:'scroll' },
})

</script>
