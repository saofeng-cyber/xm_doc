import type { App } from "vue";
import { createPinia } from 'pinia';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faMoon, faSun, faPager, faBookReader, faCode, faCaretDown, faFighterJet } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faJs, faQq, faWeixin } from '@fortawesome/free-brands-svg-icons'
import type { Router } from "vitepress";
library.add(faBars, faXmark, faGithub, faMoon, faSun, faJs, faPager, faBookReader, faCode, faFighterJet, faCaretDown, faQq, faWeixin)
const pinia = createPinia();
export const usePlugins = (app: App, router: Router) => {
    app.use(pinia)
    app.component('font-awesome-icon', FontAwesomeIcon)
    router.onBeforeRouteChange = (to: string) => {
        nprogress.configure({ showSpinner: false });
        nprogress.start();
    }
    router.onAfterRouteChanged = (to: string) => {
        nprogress.done();
    }
}