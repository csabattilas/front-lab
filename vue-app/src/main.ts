import './styles.scss';
import { createApp } from 'vue';
import App from './app/App.vue';
import router from './router';

// Import type declarations
import './types/custom-elements';

// Import the web components
import '@front-lab/locked-selection-list-box';
import '@lion/ui/define/lion-checkbox-group.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-listbox.js';
import '@lion/ui/define/lion-option.js';

const app = createApp(App);
app.use(router);
app.mount('#root');
