import { defineStore } from "pinia";
import { getDefaultState, type themeType, SET_LOCAL_SETTING } from './help'
export const switchDark = defineStore('switchDark', {
    state: (): themeType => getDefaultState(),
    actions: {
        setTheme(isLight: boolean) {
            this.theme = isLight ? 'light' : 'dark';
            this.recordStore();
        },
        recordStore() {
            SET_LOCAL_SETTING(this.$state);
        },
    }
})