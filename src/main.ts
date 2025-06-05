import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Application from "./app"
// @ts-ignore
window.metoolsDevTools = Application
const app = createApp(Application.entry)

app.use(createPinia())

app.mount('#app')
