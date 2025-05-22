// Import the components
import { SelectableButton, SelectableButtonGroup } from '../index.js';

// This is just a helper function to create a demo
export function createDemo() {
  // Create a container
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.fontFamily = 'Arial, sans-serif';
  
  // Add a title
  const title = document.createElement('h2');
  title.textContent = 'Selectable Button Group Demo';
  container.appendChild(title);
  
  // Create exclusive mode example (radio-like)
  const exclusiveTitle = document.createElement('h3');
  exclusiveTitle.textContent = 'Exclusive Mode (like radio buttons)';
  container.appendChild(exclusiveTitle);
  
  const exclusiveGroup = new SelectableButtonGroup();
  exclusiveGroup.mode = 'exclusive';
  
  const option1 = new SelectableButton();
  option1.textContent = 'Option 1';
  option1.value = 'option1';
  
  const option2 = new SelectableButton();
  option2.textContent = 'Option 2';
  option2.value = 'option2';
  
  const option3 = new SelectableButton();
  option3.textContent = 'Option 3';
  option3.value = 'option3';
  
  exclusiveGroup.appendChild(option1);
  exclusiveGroup.appendChild(option2);
  exclusiveGroup.appendChild(option3);
  
  container.appendChild(exclusiveGroup);
  
  // Add result display
  const exclusiveResult = document.createElement('div');
  exclusiveResult.style.marginTop = '10px';
  exclusiveResult.textContent = 'Selected: none';
  container.appendChild(exclusiveResult);
  
  // Listen for selection changes
  exclusiveGroup.addEventListener('selection-change', (e) => {
    exclusiveResult.textContent = `Selected: ${e.detail.value}`;
  });
  
  // Add some space
  const spacer = document.createElement('div');
  spacer.style.height = '30px';
  container.appendChild(spacer);
  
  // Create toggle mode example (checkbox-like)
  const toggleTitle = document.createElement('h3');
  toggleTitle.textContent = 'Toggle Mode (like checkboxes)';
  container.appendChild(toggleTitle);
  
  const toggleGroup = new SelectableButtonGroup();
  toggleGroup.mode = 'toggle';
  
  const bold = new SelectableButton();
  bold.textContent = 'Bold';
  bold.value = 'bold';
  
  const italic = new SelectableButton();
  italic.textContent = 'Italic';
  italic.value = 'italic';
  
  const underline = new SelectableButton();
  underline.textContent = 'Underline';
  underline.value = 'underline';
  
  toggleGroup.appendChild(bold);
  toggleGroup.appendChild(italic);
  toggleGroup.appendChild(underline);
  
  container.appendChild(toggleGroup);
  
  // Add result display
  const toggleResult = document.createElement('div');
  toggleResult.style.marginTop = '10px';
  toggleResult.textContent = 'Selected: none';
  container.appendChild(toggleResult);
  
  // Listen for selection changes
  toggleGroup.addEventListener('selection-change', (e) => {
    toggleResult.textContent = `Selected: ${e.detail.selectedValues.join(', ')}`;
  });
  
  return container;
}
