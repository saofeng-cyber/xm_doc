import type { App } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faXmark,
  faMoon,
  faSun,
  faPager,
  faBookReader,
  faCode,
  faCaretDown,
  faFighterJet,
  faChevronDown,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faJs,
  faQq,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";
import type { Router } from "vitepress";
library.add(
  faBars,
  faXmark,
  faGithub,
  faMoon,
  faSun,
  faJs,
  faPager,
  faBookReader,
  faChevronDown,
  faCode,
  faFighterJet,
  faCaretDown,
  faQq,
  faWeixin,
  faList
);
const pinia = createPinia();
export const usePlugins = (app: App, router: Router) => {
  app.use(pinia);
  app.component("font-awesome-icon", FontAwesomeIcon);
};
