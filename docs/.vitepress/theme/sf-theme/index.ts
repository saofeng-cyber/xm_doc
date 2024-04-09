import MyLayout from "./layout/Layout.vue";
import "./styles/style.css";
import "nprogress/nprogress.css";
import "./utils/autoload";
import type { Theme } from "vitepress";
import { usePlugins } from "./plugins/usePlugin";
const XmVitePressTheme: Theme = {
  Layout: MyLayout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      const nprogress = await import("nprogress");
      router.onBeforeRouteChange = (to: string) => {
        nprogress.configure({ showSpinner: false });
        nprogress.start();
      };
      router.onAfterRouteChanged = (to: string) => {
        nprogress.done();
      };
    }
    usePlugins(app, router);
  },
};

export default XmVitePressTheme;
