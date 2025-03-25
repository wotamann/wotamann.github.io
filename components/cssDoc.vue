<style scoped>
  /* 
  INFO: using '<style scoped>' CSS is inside a child-component not accessable 
  USE INSTEAD :deep(.my-class) { color:#FFF }
  */

  /* ASSUMING:  <v-form-base id="myformbase" > */
 
  /* key-* selector works in all descendant myformbase components */
  
  /* key-myformbase-* selector works in myformbase components with id:myformbase*/
  /* key-myformbase-selectcase - Select key 'selectcase' on specific [id].[path]-[key]  in model */
  
  /* Select 'selectCase' key */
  :deep(.key-select-case .v-input__control){ background-color: #ff400610; }  
  :deep(.key-myformbase-select-case .v-input__control){ color: #d53201; }  
  
  /* Select 'selectcase' key */
  /* component classes: id-myformbase key-select-case key-myformbase-select-case el-v-select el-myformbase-v-select */
  :deep(.key-selectcase) .v-input__control{ background-color: #0080ff10; }  
  :deep(.key-myformbase-selectcase) .v-input__control{ color: #0063c6; }  
  
  /* component classes: id-myformbase key-deep key-select-case key-myformbase-deep-select-case el-v-select el-myformbase-v-select */
  /* key-deep - Select all keys with name 'deep' in deep, nested model  */
  :deep(.key-deep .v-input__control){ background-color: #07680010; }  
  :deep(.key-myformbase-deep-select-case .v-input__control){ color: #076800; }  
  
  /* myformbase-group classes: myformbase-container myformbase-group-container */
  :deep(.myformbase-group-container){ padding: 24px;background-color: #fff53c6c;  }  
  
  /* component classes: id-myformbase id-myformbase-group key-select-case key-myformbase-group-select-case el-v-select el-myformbase-group-v-select */
  :deep(.container-myformbase-group .v-input__control){ background-color: #9e6e0015; }  
  :deep(.key-myformbase-group-select-case .v-input__control){  color: #825b00; }
     
</style>
  
<template>
  <h4>CSS Selector with camelCased key names</h4>
  
  <!-- FORM-BASE-COMPONENT -->
  <v-form-base  
    id="myformbase"
    :model= "myModel"
    :schema= "mySchema"   
  />
  <!-- :config="{_buildModelNode:true}"           -->
  
  <!-- DISPLAY EVENTS, MODEL, SCHEMA and CODE  -->    
  <infoline v-model:modelValue="myModel" v-model:schemaValue="mySchema"/>
</template>

<script setup>
  import vFormBase from '@/vFormBase.vue'
  import Infoline from '@/components/infoline.vue'
  import { ref } from 'vue'
  
  const items=[1,2,3]

  const myModel = ref({})
    
  const mySchema = ref({
    // lowercase
    selectcase:{ el:'select', label:'selectcase -> .key-selectcase', items},
    // CamelCase 
    SelectCase:{ el:'select', label:'SelectCase -> .key-select-case', items},
    // camelCase - Recommended 
    selectCase:{ el:'select', label:'selectCase -> .key-select-case', items},
    deep:{
      // camelCase
      selectCase:{ el:'select', label:'deep.selectCase -> .key-myformbase-deep-select-case', items},
    },
    group:{ 
      el:'group', // creates new <v-form-base> component
      // container: { el:'div'},
      // container: { el:'sheet', color:'brown-lighten-5 px-4 mb-4'},
      schema:{ 
        // camelCase
        selectCase:{ el:'select', label:'group.selectCase -> .key-myformbase-group-select-case', items},
        deep:{
        // camelCase
        selectCase:{ el:'select', label:'deep.selectCase -> .key-myformbase-group-deep-select-case', items},
      },
      }
    }

    // uppercase - Not recommended: 
    // SELECTCASE:{ el:'select', label:'SELECTCASE -> .key-key-s-e-l-e-c-t-c-a-s-e', items},
  }) 
</script>