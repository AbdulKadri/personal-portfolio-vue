import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { MotionPlugin } from '@vueuse/motion'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAddressBook,
  faArrowRight,
  faDiagramProject,
  faDisplay,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowRight)
library.add(faHouse)
library.add(faUser)
library.add(faDiagramProject)
library.add(faAddressBook)
library.add(faGithub)
library.add(faLinkedin)
library.add(faDisplay)

const app = createApp(App)

app.use(router)
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
})
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
