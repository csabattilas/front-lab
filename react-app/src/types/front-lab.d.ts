declare module '@front-lab/lion-selectable-button-group' {
  export class SelectableButton extends HTMLElement {
    static get observedAttributes(): string[];
    
    selected: boolean;
    value: string;
    
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
  }
  
  export class SelectableButtonGroup extends HTMLElement {
    static get observedAttributes(): string[];
    
    mode: 'exclusive' | 'toggle';
    
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
  }
}
