import { createApp } from 'vue'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from '@/App.vue'
import '@/styles/global.css'

const app = createApp(App)

app.use(Toast, {
    timeout: 2000
})

app.mount('#app')