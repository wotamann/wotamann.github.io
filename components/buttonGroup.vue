<template>
    <h4>Buttons and Button-Toggle</h4>
  
    <!-- FORM-BASE-COMPONENT -->
    <v-form-base 
      :model= "myModel"
      :schema= "mySchema"
      :cols=3
      @click="logClick"
    />
    
    <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
    <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>
  
<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  import { logClick } from '@/lib'

  // BTN PROPS
  const css ='ma-0'
  const color='blue-darken-1' // blue-lighten-1 | orange-darken-2 | primary | info | #2d2
  const block = true
  const size = 'x-large' // x-small | small | ...
  const variant = 'outlined' // 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  
  const config = { class:css, variant, size }
  
  // BTN-TOGGLE PROPS
  const baseColor= 'blue-lighten-4'
  const multiple = true
  const divided=true
  const mandatory =true
  const options = [
    { icon: { icon:'mdi-wifi', end:false }, text:'w', value: 'wifi', baseColor:'blue-lighten-5', color:'blue-darken-3', }, 
    { icon: 'mdi-printer', text:'p', value: 'print' },
    { icon: {icon:'mdi-bluetooth', start:true },  label:'l', value: 'bluetooth' },
  ]
  
  const optionsIcon = [
    { icon: 'mdi-wifi',  value: 'wifi', baseColor:'blue-lighten-5', color:'blue-darken-3' }, 
    { icon: 'mdi-printer', value: 'print' },
    { icon: 'mdi-bluetooth',  value: 'bluetooth' },
  ]

  const optionsText = [
    // html | text | label
    { text:'Text', value: 'Text'  }, 
    { html:`<i style="font-size:1.1rem;font-weight:900;color:#a40">HTML</i>`, value: 'HTML' },  
    { label:'Label', value: 'Label' },
  ]

  const myModel = ref({})
  
  // control Display Order by Order in Schema
  const mySchema = ref({
    btn1:{ el:'v-btn', icon:'mdi-check-circle', text:'Button' },
    btn2:{ el:'btn', icon:'mdi-check-circle', text:'Block Button', block },
    btn3:{ el:'btn', icon:'mdi-check-circle', text:'Button Variant', block, variant },
    btn4:{ el:'btn', icon:'mdi-check-circle', text:'Colored Button', block, color },
    btn5:{ el:'btn', icon:'mdi-check-circle', text:'Small', block, color,variant, size:'small' },
    btn6:{ el:'btn', icon:'mdi-check-circle', text:'Default', block,variant, color },
    btn7:{ el:'btn', icon:'mdi-check-circle', text:'Large', block, color, variant, size:'large' },
    btn8:{ el:'v-btn', icon:'mdi-check-circle', text:'X-Large', block, color, variant, size:'x-large' },
    btn9:{ el:'btn', icon:{ icon:'mdi-check-circle', start:true}, text:'ICON START', block, color },
    btn10:{ el:'btn', icon:{ icon:'mdi-check-circle', end:true}, text:'ICON END', block, color },
    btn11:{ el:'btn', icon:'mdi-thumb-up', variant:'text', color:'green', size:'x-large',onClick:(v,e) => 'thumb up' },
    btn12:{ el:'v-btn', icon:'mdi-thumb-down', variant:'text', color:'red',size:'x-large', onClick:(v,e) => 'thumb down' },        
    
    // btnToggle1: { el: 'btn-toggle', options:optionsText, baseColor, color, multiple, mandatory, divided, cols:6, nullValue:'Label' },
    btnToggle2: { el: 'btnToggle', options:optionsIcon, label:'Radio-Inline TrueIcons', cols:6 },
    btnToggle3: { el: 'v-btn-toggle', options:optionsIcon, baseColor, color, multiple, cols:6 },
    btnToggle4: { el: 'btn-group', options:optionsText, baseColor, color, cols:6},
    btnToggle5: { el: 'btnGroup', options:optionsText,  cols:6  },

    view_a:{ el:'view',  cols:6, onClick:()=> 'VIEW-A FRAME',
    container:{ el:'v-card', subtitle:'View A - multiple, mandatory', class:'ma-0 pa-2', color:'blue-lighten-5'},
      schema:{
        btnToggle4: { el: 'btn-group', options:optionsText, baseColor, color, multiple, divided, mandatory, cols:12},
      }
    },
    
    view_b:{ el:'view', cols:6, onClick:()=> 'VIEW-B FRAME',
      container:{ el:'v-card', subtitle:'View B - multiple', class:'ma-0 pa-2', color:'grey-lighten-4'},
      schema:{
        btnToggle5: { el: 'btnGroup', options:optionsText, divided, multiple, cols:12  },
      }
    }
  })
</script>

<style>
  /* #formbase-btnToggleText .v-btn__content {color:#434343} */
</style>
