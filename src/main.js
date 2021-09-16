import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
//import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import router from './router'

library.add(faFacebookF, fab, faInstagram);

createApp(App).use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
createApp(ElementPlus).use(router).mount('ElementPlus')