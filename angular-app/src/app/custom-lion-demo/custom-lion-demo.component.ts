import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@front-lab/locked-selection-list-box';
import '@lion/ui/define/lion-checkbox-group.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';
import { LockedSelectionListBox } from '@front-lab/locked-selection-list-box';

@Component({
  selector: 'app-custom-lion-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-lion-demo.component.html',
  styleUrls: ['./custom-lion-demo.component.scss']
})
export class CustomLionDemoComponent implements AfterViewInit {
  @ViewChild('listbox') listboxRef!: ElementRef<LockedSelectionListBox>;
  
  modelValue?: { resolved: boolean; selectedValue: string }[];

  ngAfterViewInit() {
    // Ensure the web component is properly initialized
    customElements.whenDefined('locked-selection-list-box').then(() => {
      console.log('locked-selection-list-box defined');
    });
  }

  handleExclusiveChange(e: Event) {
    const customEvent = e as CustomEvent;
    console.log(this.listboxRef?.nativeElement?.modelValue);
    this.modelValue = this.listboxRef?.nativeElement?.modelValue || [];
  }
}
