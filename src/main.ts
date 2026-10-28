import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initSentry } from './sentry.ts'

const app = createApp(App)
initSentry(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
