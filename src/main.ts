import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Application, {info} from "./app"
// @ts-ignore
window.metoolsDevTools = {
   app: Application,
   info: info,
}
const app = createApp(Application)

app.use(createPinia())

app.mount('#app')
