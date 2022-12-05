import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'


// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faExclamationTriangle, faInfoCircle, faBan, faCheckCircle,
  faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight,
  faQuestionCircle, faExclamationCircle, faArrowDown, faCalendarAlt,
  faBell, faPenToSquare, faRightFromBracket, faBars, faMagnifyingGlass,
  faXmark, faPencil, faAngleDown, 
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCheckCircle, faInfoCircle, faExclamationTriangle, faBan,
  faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight,
  faQuestionCircle, faExclamationCircle, faArrowDown, faCalendarAlt,
  faBell, faPenToSquare, faRightFromBracket, faBars, faMagnifyingGlass,
  faXmark, faPencil, faAngleDown,  
)

import '@/assets/scss/main.scss'

async () => await router.isReady()

createApp(App)
  .use(store)
  .use(router)
  .provide('api', new api())
  .mount('#app')
