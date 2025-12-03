import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import aos from './plugins/aos'

const app = createApp(App)

app.use(router)
app.use(aos)
app.mount('#app')
