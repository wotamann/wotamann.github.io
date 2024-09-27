<template>
  <v-container class="container-box">  
   <h4>Use Formbase-Events from Component</h4>
  
      <!-- FORM-BASE-COMPONENT -->
      <!-- WATCH EVENTS LOGGING ON CONSOLE  -->
      <v-form-base 
        id="formbase"
        :model= "myModel"
        :schema= "mySchema"
        :cols="12"
        @click:append-inner:formbase-myPrint="log"
        @click:append-inner:formbase-myPassword="clickAppendInnerWithKey"
        @update:modelValue="logMV"
      />
      <!-- 
        @focus="log"
        @click:append-inner="clickAppendInner"   // ALTERNATIVE     
        @click="log" 
        @input="log"
        @blur="log"
      -->
 
    <!-- Stuff  -->    
    <infoline :model="myModel" :schema="mySchema"/>
  </v-container>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import { ref, reactive, toRefs, computed, onMounted, onUnmounted, nextTick, warn } from 'vue'
  import Infoline from '@/components/infoline'
  import { log, logMV } from '@/lib.js'
   
  // USE COMPONENT EVENTS
  const visible = ref(false)
  const isIconVisible = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )  
  const clickAppendInner = (ev) => { if(ev.obj.key === 'myPassword') visible.value =!visible.value; } // return undefined
  const clickAppendInnerWithKey = (ev) => { visible.value =!visible.value } // return undefined
  // USE INLINE EVENTS
  const visibleInline = ref(false)
  const isIconVisibleInline = computed(()=> visibleInline.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleTypeInline = computed(()=> !visibleInline.value ? 'password' : 'text' )  
  const onClickAppendInner = (val, obj, ev) => { visibleInline.value =!visibleInline.value }  // return undefined 


  const myModel = ref({
    myPrint:'printer',
    myPassword:'1234567890',
    myPasswordInline:'1234567890'
  })

  const mySchema = ref({
    myPrint: { el:'text',appendInnerIcon:'mdi-printer' }, 
    myPassword: { el:'password', label:'Component Events', type:visibleType, appendInnerIcon:isIconVisible },
    myPasswordInline: { el:'password', label:'Inline Events', type:visibleTypeInline, appendInnerIcon:isIconVisibleInline, onClickAppendInner } 
  })

</script>