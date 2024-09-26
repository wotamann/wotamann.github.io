<template>
  <v-container class="container-box">  
   <h4>Use Formbase-Events from Component</h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <!-- WATCH EVENTS LOGGING ON CONSOLE  -->
      <v-form-base 
        id="handle-event"
        :model= "myModel"
        :schema= "mySchema"
        
        @focus="log"
        @input="uppercase"
        @blur="log"
        @click="log"
        
        @click:append-inner="toggleVisible"
      />
 
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted, nextTick } from 'vue'
  import Infoline from '@/components/infoline'
  import log from '@/lib.js'
 
  
  const visible = ref(false)
  const isIconVisible = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
  
  const uppercase = (ev) => {
    let el = document.getElementById(`${ev.id}-${ev.path}` )
    let pos = el.selectionStart // id="handle-inline-event-updateModelValue" 
    console.log('el.selectionStart',pos);
        
    el.value=el.value?.toUpperCase()

     nextTick(()=>{
          el.focus();
          el.setSelectionRange(pos,pos);
          console.log('el.selectionStart POS',pos);
        })
        
    
    log(ev)
  }

  const toggleVisible = (ev) => {
    // catch append-inner-icon click for my password element   
    if (ev.path === 'myPassword') visible.value =!visible.value;  
    log(ev)
  }
  const myModel = ref({
    text:'text',
    password:'1234567890'
  })

  const mySchema = ref({
    text: { el:'text' }, 
    password: { el:'text', type:visibleType, appendInnerIcon:isIconVisible }, 
  })

</script>