import { LionButton } from '@lion/button';

export declare class SelectableButton extends LionButton {
  static styles: any[];
  static properties: {
    selected: { type: BooleanConstructor; reflect: boolean };
    value: { type: StringConstructor };
    [key: string]: any;
  };
  
  selected: boolean;
  value: string;
  
  constructor();
  updated(changedProperties: Map<string, any>): void;
}
