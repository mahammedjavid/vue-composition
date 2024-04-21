
import { createApp } from 'vue'
import App from './App.vue'
import globalMixin from './mixns/global'

const app = createApp(App)
app.mixin(globalMixin)
app.mount('#app')
