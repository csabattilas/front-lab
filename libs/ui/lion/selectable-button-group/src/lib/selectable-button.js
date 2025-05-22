// Use local imports from node_modules
import { LionButton } from '@lion/button';
import { css } from 'lit';
import { ChoiceInputMixin } from '@lion/form-core';

/**
 * SelectableButton component
 * A button that can be selected/deselected
 */
// Combine the ChoiceInputMixin with LionButton
export class SelectableButton extends ChoiceInputMixin(LionButton) {
  static styles = [
    ...super.styles,
    css`
      :host {
        margin: 0;
        border-radius: 0;
        transition: all 0.2s ease;
        position: relative;
        border: 1px solid #d1d5db;
        background-color: white;
        color: #374151;
      }
      
      :host(:first-of-type) {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      
      :host(:last-of-type) {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      
      :host(:not(:first-of-type)) {
        margin-left: -1px;
      }
      
      :host(:hover) {
        z-index: 1;
        border-color: #9ca3af;
      }
      
      :host(:focus) {
        z-index: 2;
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
      }
      
      :host([selected]) {
        z-index: 1;
        background-color: #4f46e5;
        color: white;
        border-color: #4338ca;
      }
      
      :host([selected]:hover) {
        background-color: #4338ca;
      }
      
      :host([disabled]) {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `,
  ];

  static get properties() {
    return {
      ...super.properties,
      // Additional properties specific to SelectableButton
      // Note: choiceValue and checked are provided by ChoiceInputMixin
    };
  }

  constructor() {
    super();
    // Initialize with default values
    this.choiceValue = ''; // This replaces the 'value' property from before
  }

  connectedCallback() {
    // Make sure to call super.connectedCallback() first
    super.connectedCallback();
    
    // Set button type to button to prevent form submission
    this.type = 'button';
    
    // Set appropriate ARIA attributes
    this.setAttribute('role', 'option');
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    
    // Update ARIA attributes when checked state changes
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-pressed', this.checked);
      this.setAttribute('aria-selected', this.checked);
    }
  }
}
