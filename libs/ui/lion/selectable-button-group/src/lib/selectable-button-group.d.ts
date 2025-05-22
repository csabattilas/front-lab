import { LitElement } from 'lit';

export declare class SelectableButtonGroup extends LitElement {
  static styles: any;
  static properties: {
    mode: { type: StringConstructor; reflect: boolean };
    value: { type: StringConstructor; reflect: boolean };
    selectedValues: { type: ArrayConstructor };
  };
  
  mode: 'exclusive' | 'toggle';
  value: string;
  selectedValues: string[];
  
  constructor();
  render(): any;
  _handleSlotChange(e: Event): void;
  _handleButtonClick(clickedButton: any, event: Event): void;
  _syncButtonsFromValue(): void;
  setSelection(values: string[] | string): void;
  attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
