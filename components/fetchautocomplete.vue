<template>
  <v-container class="container-box">
    <h4>Autocomplete - Fetch Async Data on Search Input</h4>

      <!-- Inspired from Issue55
      https://github.com/wotamann/vuetify-form-base/issues/55 -->

      <v-form class="border-frame">
        <!-- FORM-BASE-COMPONENT -->    
        <v-form-base 
          :model="myModel"
          :schema="mySchema"
          />
        </v-form>
        <!-- @update:modelValue="log" -->
        {{ filteredStates }}
        <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
    
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, computed } from 'vue'
  import Infoline from '@/components/infoline.vue'
  import { log, logModel } from '@/lib.js'
    
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
  const people = [
    // TODO: https://github.com/vuetifyjs/vuetify/issues/15721
    // { header: 'Group 1' },
    { name: 'Sandra Adams', group: 'Group 1' },
    { name: 'Ali Connors', group: 'Group 1' },
    { name: 'Trevor Hansen', group: 'Group 1' },
    { name: 'Tucker Smith', group: 'Group 1' },
    { name: 'Britta Holt', group: 'Group 2' },
    { name: 'Jane Smith ', group: 'Group 2' },
    { name: 'John Smith', group: 'Group 2' },
    { name: 'Sandra Williams', group: 'Group 2' },
  ]

  const loading = ref(false)
  const filteredStates = ref([])

  const loadingState = computed(()=> loading.value )  
  const items = computed(()=> filteredStates.value )

  const myModel = ref({
    autocomplete: '',
    autocompleteMultiple: [],
  })
  

  const searchTerm = ref([])
  
  // const filterStates = (v='') => states.filter( v => (v || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1)
  const filterStates = (query='') => filteredStates.value = states.filter( (state) =>  state?.toLowerCase()?.includes(query.toLowerCase()) ) 


  const customFilter = async (item, query) => {
    console.log(item,query);
    
    return item?.toLowerCase()?.includes(query.toLowerCase());
  }
  
  const mySchema =ref({ 
    autocomplete: { 
      el:'autocomplete', 
      items,
      // multiple:true,
      // clearable:true,
      // loading:loadingState,
      // hideNoData:true,
      onUpdateSearch: (search) => fetch(search) // use Curly brackets don't return a value 
    },  
    // <v-autocomplete
//           v-model="friends"
//           :disabled="isUpdating"
//           :items="people"
//           color="blue-grey-lighten-2"
//           item-title="name"
//           item-value="name"
//           label="Select"
//           chips
//           closable-chips
//           multiple
//         >
    
    
    autocompleteMultiple: { 
      el:'autocomplete',
      autoSelectFirst:true,
      items:states, 
      clearOnSelect:true,
      multiple:true,
      // chips:true,
      // closableChips:true,
      // hideNoData:true,
      customFilter: (item, query) => item?.toLowerCase()?.includes(query.toLowerCase()),

      // onUpdateSearch: (search, v) => { console.warn(search,v); fetch(search); }, // use Curly brackets don't return a value 
      // onUpdateMenu: (open) => console.log('MENU OPEN', open) 
    
    },
  })

 
  // simulate async search
  const fetch = (search) =>  {
    // const lastSpaceIndex = search.lastIndexOf(" ");
    // search = search.substring(lastSpaceIndex + 1);
    // console.log('FETCH', search);
    new Promise((resolve, reject) => {
      loading.value = true
      filteredStates.value=[]  
      setTimeout(() => { 
        filterStates(search)
        loading.value = false;       
        resolve()
      }, 666)
    })
  }
</script>