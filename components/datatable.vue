<style scoped>
  :deep(.name) {color:rgb(107, 41, 41); font-size:1rem; font-weight:700;}
</style>

<template>

  <h4>Data-Table Element</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      id="mytables"
      :model="myModel"
      :schema="mySchema"
      :cols="12"
    >
      <!-- <template #slot-inject-item.name-key-mytables-table="{ value }" >
        <td class="name" @click="logClick(value)">
          {{ value }}
        </td>
      </template> -->

    </v-form-base> 

  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
import { ref, computed } from 'vue'
import vFormBase from '@/vFormBase.vue'
import Infoline from '@/components/infoline.vue'
import { log, logAll, logPlain, logClick, logInline,logModel, logElement } from '@/lib'

const headers= [
  { title: 'Plant', align: 'start', sortable: true, key: 'name' },
  { title: 'Light', align: 'end', key: 'light' },
  { title: 'Height', align: 'end', key: 'height' },
  { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
  { title: 'Price ($)', align: 'end', key: 'price' },
]

const items = [
  {
    name: 'Fern',
    light: 'Low',
    height: '20cm',
    petFriendly: 'Yes',
    price: 20,
  },
  {
    name: 'Snake Plant',
    light: 'Low',
    height: '50cm',
    petFriendly: 'No',
    price: 35,
  },
  {
    name: 'Monstera',
    light: 'Medium',
    height: '60cm',
    petFriendly: 'No',
    price: 50,
  },
  {
    name: 'Pothos',
    light: 'Low to medium',
    height: '40cm',
    petFriendly: 'Yes',
    price: 25,
  },
  {
    name: 'ZZ Plant',
    light: 'Low to medium',
    height: '90cm',
    petFriendly: 'Yes',
    price: 30,
  },
  {
    name: 'Spider Plant',
    light: 'Bright, indirect',
    height: '30cm',
    petFriendly: 'Yes',
    price: 15,
  },
  {
    name: 'Air Plant',
    light: 'Bright, indirect',
    height: '15cm',
    petFriendly: 'Yes',
    price: 10,
  },
  {
    name: 'Peperomia',
    light: 'Bright, indirect',
    height: '25cm',
    petFriendly: 'Yes',
    price: 20,
  },
  {
    name: 'Aloe Vera',
    light: 'Bright, direct',
    height: '30cm',
    petFriendly: 'Yes',
    price: 15,
  },
  {
    name: 'Jade Plant',
    light: 'Bright, direct',
    height: '40cm',
    petFriendly: 'Yes',
    price: 25,
  },
]

const myModel = ref({ })

const search = computed(()=>  myModel.value.search)

const mySchema = ref({
  search:{el:'text-field', label:'search', clearable:true },
  search1:{el:'text-field', label:'search', onUpdateModelValue:(v)=> v?.toUpperCase(), nullValue:'#', clearable:true },
  
  table:{ el:'data-table', headers, items,  align: 'start', color:'red', selectStrategy:'multi', search, height:316, hover:true, itemValue:'name', hideDefaultFooter:true, showSelect:true },
  // tableSingle:{ el:'datatable', headers, items, selectStrategy:'single', search,  hover:true, returnObject:true, hideDefaultFooter:true, showSelect:true },
})

</script>
