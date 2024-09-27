<template>
  <v-container fluid>
    <h4>Autocomplete|Combobox - Fetch Async Data on Search Input</h4>

      <!-- Inspired from Issue55
      https://github.com/wotamann/vuetify-form-base/issues/55 -->

      <v-form class="border-frame">
        <!-- FORM-BASE-COMPONENT -->    
        <v-form-base 
          :model="myModel"
          :schema="mySchema"
          :col=6
          @update:modelValue="log"
          @update:search="log"
        />
      </v-form>
    
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
    
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, watch, onMounted, computed } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'
    
  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  const loading = ref(false)
  const filteredStates = ref([])

  const items = computed(()=>{
   return filteredStates.value
  })
  
  const myModel = ref({
    combobox: '',
    autocomplete: ''
  })

  const mySchema =ref({ 
    combobox: { 
      el:'combobox', 
      items,
      onUpdateSearch: (ev) => { ev && fetch(ev) }
    },       
    autocomplete: { 
      el:'autocomplete', 
      items,
      clearable:true,
      // chips:true,
      // closableChips:true,
      // multiple:true,
      cacheItems:true,
      loading:loading.value,
      hideNoData:true,
      hideDetails:true,
      onUpdateSearch: (ev) => { ev && fetch(ev) } // use Curly brackets don't return a value 
    }         
  })

const filterStates = (v) => states.filter( e => (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1)
 
const fetch = async (search) =>  
  // for async demonstration
  new Promise((resolve, reject) => {
    loading.value = true
    filteredStates.value=[]  
    setTimeout(() => { 
      filteredStates.value = filterStates(search)
      loading.value = false;       
      resolve()
    }, 333)
  }
)


</script>