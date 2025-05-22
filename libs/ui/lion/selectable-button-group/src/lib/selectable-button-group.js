// Use local imports from node_modules
import { LitElement, html, css } from 'lit';
import { ChoiceGroupMixin } from '@lion/form-core';
import { LocalizeMixin } from '@lion/localize';
import { SelectableButton } from './selectable-button.js';

/**
 * SelectableButtonGroup component
 * A group of buttons that can be selected in toggle or exclusive mode
 */
export class SelectableButtonGroup extends LocalizeMixin(ChoiceGroupMixin(LitElement)) {
  static styles = css`
    :host {
      display: inline-flex;
    }
  `;

  static get properties() {
    return {
      ...super.properties,
      mode: { type: String, reflect: true }, // 'toggle' or 'exclusive'
    };
  }

  constructor() {
    super();
    // Set default values
    this.multipleChoice = false; // false = exclusive (radio), true = toggle (checkbox)
    this.interaction = 'click'; // Use click interaction by default
  }

  // Map the 'mode' attribute to the 'multipleChoice' property
  get mode() {
    return this.multipleChoice ? 'toggle' : 'exclusive';
  }

  set mode(value) {
    this.multipleChoice = value === 'toggle';
  }

  connectedCallback() {
    super.connectedCallback();
    
    // Set appropriate ARIA attributes
    this.setAttribute('role', 'listbox');
    if (this.multipleChoice) {
      this.setAttribute('aria-multiselectable', 'true');
    }
  }

  render() {
    return html`
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }
  
  _handleSlotChange() {
    // Make sure all buttons are properly registered with the choice group
    this.formElements.forEach(button => {
      if (button instanceof SelectableButton) {
        // Ensure the button has the right attributes
        button.setAttribute('role', 'option');
      }
    });
  }
  
  // Override the _onChoiceGroupSelect method to customize the event
  _onChoiceGroupSelect(e) {
    super._onChoiceGroupSelect(e);
    
    // Get all selected values
    const selectedValues = this.formElements
      .filter(el => el.checked)
      .map(el => el.choiceValue);
    
    // Dispatch our custom event
    this.dispatchEvent(new CustomEvent('selection-change', {
      detail: {
        value: e.target.choiceValue,
        selectedValues
      },
      bubbles: true,
      composed: true
    }));
  }
}

// Don't register the components here - they should be registered by the importing application
// This allows for better tree-shaking and avoids potential duplicate registration
