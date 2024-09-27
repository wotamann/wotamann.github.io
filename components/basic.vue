<template>
  <v-container class="container-box">  
   <h4>Basic Elements</h4>
  

    <!-- FORM-BASE-COMPONENT -->
      <v-form-base
        :container="{ is:'v-form', class:'pa-4', style:'backgroundColor:#ccddff'}"
        :model= "myModel"
        :schema= "mySchema"
        @click="onExternalClick"
        @input="onExternalInput"
        />
    <!-- FORM-BASE-COMPONENT -->
    
    
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline'
  import { ref } from 'vue'
  
  const onExternalClick = (val,obj,event) => console.warn('LOG EXTERNAL Clicked',val, obj,  event)
  const onClick = (val,obj,event) => { console.warn('LOG INNER Clicked',val,  event); return true}
  
  const onExternalInput = (val,obj,event) => { console.warn('LOG EXTERNAL ONINPUT  IN:',val, event)  }
  // FIXED VAL OFF
  const onInput = (val,obj,event) => { let out="OFF"; console.warn('LOG INNER ONINPUT  IN:',val,'OUT:',out, event); return out  }
  
  const myModel = ref({
    textfield:'text',
    switch:true,
    switch1:'OFF'
    //unset props will be auto-added       
  })
    
  // control Display Order in Schema
  const mySchema = ref({
    file: { el:'file', label:'File', showSize:true, clearable:true }, 
    date:{ el:'date', label:'Date'}, 
    textfield: { el:'text', label:'text', hint:'type here', autocomplete:'Master',clearable:true }, 
    password: { el:'password' }, 
    combo: { el:'combobox', label:'text', multiple:true, items: [ 'Programming','Design', 'Vue','Vuetify' ], clearable:true }, 
    select:{ el:'select', label:'Select', items:[1,2,3,4], clearable:true },
    selectM:{ el:'selectM', label:'Select Multiple', items:[1,2,3,4], nullValue:[1], clearable:true },
    selectX:{ el:'selectX' },
    checkbox:{ el:'checkbox', label:'Checkbox', color:'primary' },  // https://vuetifyjs.com/en/api/v-checkbox/#links
    switch:{ el:'switch', label:'Switch', color:'green', baseColor:'red', onClick, onInput },  // https://vuetifyjs.com/en/api/v-checkbox/#links
    // switch1:{ el:'switch', label:'Switch1', color:'green', baseColor:'blue',onInput  },  // https://vuetifyjs.com/en/api/v-checkbox/#links
    switch1:{ el:'switch', label:'Switch CLick', color:'green', falseValue:'OFF', trueValue:'ON', baseColor:'blue',onInput  },  // https://vuetifyjs.com/en/api/v-checkbox/#links
    // buttonS: { el:'colored_button'},  // https://vuetifyjs.com/en/api/v-btn/    
    // button: { el:'btn', text:'Button', block:true, onClick},  // https://vuetifyjs.com/en/api/v-btn/    
    // buttonD: { el:'stop_button', text:'BASIC Button', color:'blue', block:true},  // https://vuetifyjs.com/en/api/v-btn/    
    yesNo:{ el:'yes_no'},
    // // date1:{ el:'pickDate'},
    // // color1:{ el:'pickColor'},
    // dateP:{ el:'pickDate', label:'Date'}, 
    // date:{ el:'date', locale:'de', label:'Date', onUpdateFocused: (v) => console.warn('UPDATE FOCUSED ',v), persistentPlaceholder:true}, 
    // iconA: { el:'icon', icon:'mdi-format-align-center', size:'142', color:'green', onClick:(a,b, e) => console.error('CLICK ON ICON -----------',e)}
  })

  
</script>
