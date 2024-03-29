/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */



// Components
import App from './App.vue'
import router from './router'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
const tg = window.Telegram.WebApp

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(router)
registerPlugins(app)
app.component('VueDatePicker', VueDatePicker);
app.mount('#app')
