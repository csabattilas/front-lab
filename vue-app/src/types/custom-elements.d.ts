// Type declarations for custom elements used in Vue
import { LockedSelectionListBox } from '@front-lab/locked-selection-list-box';

declare module 'vue' {
  export interface GlobalComponents {
    'locked-selection-list-box': typeof LockedSelectionListBox;
    'lion-option': any;
    'lion-checkbox': any;
    'lion-checkbox-group': any;
    'lion-listbox': any;
  }
}

// This is needed for direct DOM access with refs
declare global {
  interface HTMLElementTagNameMap {
    'locked-selection-list-box': LockedSelectionListBox;
  }
}

export {};
