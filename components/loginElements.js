import { ref, computed } from 'vue';

// Define a composable function
export default function usePreset(){

  const visible = ref(false)
  const visibleIcon = computed(()=> visible.value ? 'mdi-eye-off' : 'mdi-eye')
  const visibleType = computed(()=> !visible.value ? 'password' : 'text' )
    
  const rules= {
    required: v => !!v || 'required',
    min: v => v?.length >= 8 || 'min 8 chars',
    isEmail: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'no valid email'
  }

  const email = { 
    el:'text', 
    label:'email', 
    hint:'valid email ', 
    clearable:true, 
    rules:[ rules.required, rules?.isEmail], 
    autocomplete:'username' 
  }

  const password = { 
    el:'password',
    type:visibleType, 
    hint:'min 8 chars', 
    rules:[ rules.min], 
    autocomplete:'current-password', 
    appendInnerIcon:visibleIcon, 
    onClickAppendInner: () => { visible.value = !visible.value; } // don't return any value
  }
  
  const submitButton = { 
    el:'btn', 
    text:'Send', 
    cols:12, 
    color:'#0898ec',
    block:true, 
  }

  // Expose reactive state and functions
  return {
    password,
    email,
    submitButton
  };
}
