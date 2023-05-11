import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(piniaPluginPersistedstate)
const app = createApp(App).use(pinia).use(router).use(VueSweetalert2)

app.mount('#app')
