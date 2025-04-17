import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
/*import "portfolio/src/assets/skybackground-opengameart.png";*/

const app = createApp(App)

app.use(router)
app.use(createBootstrap())

app.mount('#app')
