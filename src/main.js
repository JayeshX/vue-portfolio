import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import { MotionPlugin } from '@vueuse/motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
app.mixin({
    mounted() {
      Aos.init()
    }
  })