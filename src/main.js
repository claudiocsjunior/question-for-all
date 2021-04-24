import { createApp } from 'vue'
import App from './App.vue'
import Router from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(Router).mount('#app')
