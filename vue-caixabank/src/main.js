import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js';

const app = createApp(App);

app.use(i18n); // Add the i18n plugin to the app

app.mount('#app');
