<template>
  <div class="container p-4">
    <h2 class="text-xl font-bold mb-6">
      Custom components extended from lion
    </h2>
    <div class="mb-6">
      <h3>locked selection list box</h3>
      <div>{{ modelValue?.[0]?.selectedValue }}</div>
      <locked-selection-list-box
        ref="listbox"
        class="locked-listbox theme-primary"
        answer="option1"
        @model-value-changed="handleExclusiveChange"
      >
        <lion-option 
          value="option1" 
          choice-value="option1" 
          class="listbox-option"
        >
          Option 1
        </lion-option>
        <lion-option 
          value="option2" 
          choice-value="option2" 
          class="listbox-option"
        >
          Option 2
        </lion-option>
        <lion-option 
          value="option3" 
          choice-value="option3" 
          class="listbox-option"
        >
          Option 3
        </lion-option>
        <lion-option 
          value="option4" 
          choice-value="option4" 
          class="listbox-option"
        >
          Option 4
        </lion-option>
      </locked-selection-list-box>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@front-lab/locked-selection-list-box';
import '@lion/ui/define/lion-checkbox-group.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';
import { LockedSelectionListBox } from '@front-lab/locked-selection-list-box';

// Define the type for the model value
interface ModelValue {
  resolved: boolean;
  selectedValue: string;
}

const listbox = ref<LockedSelectionListBox | null>(null);
const modelValue = ref<ModelValue[] | undefined>(undefined);

const handleExclusiveChange = (e: CustomEvent) => {
  console.log(listbox.value?.modelValue);
  modelValue.value = listbox.value?.modelValue || [];
};
</script>

<style lang="scss">
locked-selection-list-box [checked] {
  background: inherit;
}

locked-selection-list-box [disabled]:not([data-expected]) {
  opacity: 1;
  cursor: not-allowed;
  color: red !important;
}

locked-selection-list-box [disabled][data-expected] {
  opacity: 1;
  cursor: not-allowed;
  color: green !important;
}

.locked-listbox {
  display: block;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  background-color: #fafafa;
  
  &.theme-primary {
    --locked-option-color: #d32f2f;
    --locked-option-background: #ffebee;
    --option-padding: 12px;
    --option-border-radius: 8px;
  }
}

.listbox-option {
  display: block;
  padding: 10px 12px;
  margin-bottom: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
