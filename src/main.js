import { createApp } from 'vue'
import App from './App.vue'
import icons from "v-svg-icons";

const app = createApp(App)

app.component("icon", icons)

app.mount('#app')
