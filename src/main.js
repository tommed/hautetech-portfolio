import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./main.css"
import "animate.css"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain } from '@fortawesome/free-solid-svg-icons/faBrain'
import { faDna } from '@fortawesome/free-solid-svg-icons/faDna'
import { faShirt } from '@fortawesome/free-solid-svg-icons/faShirt'
library.add(
  faDna,
  faBrain,
  faShirt,
)

createApp(App)
  .use(store)
  .use(router)
  .component('icon', FontAwesomeIcon)
  .mount('#app')
