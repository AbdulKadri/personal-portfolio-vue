import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faAddressBook,
  faArrowRight,
  faDiagramProject,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)
library.add(faHouse)
library.add(faUser)
library.add(faDiagramProject)
library.add(faAddressBook)

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
