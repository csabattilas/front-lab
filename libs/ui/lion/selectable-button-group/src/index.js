import { SelectableButton } from './lib/selectable-button.js';
import { SelectableButtonGroup } from './lib/selectable-button-group.js';

// Export the components
export { SelectableButton, SelectableButtonGroup };

// Register the custom elements
customElements.define('selectable-button', SelectableButton);
customElements.define('selectable-button-group', SelectableButtonGroup);
