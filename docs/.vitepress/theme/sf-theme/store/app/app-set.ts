import { defineStore } from "pinia";
interface NavScreen {
    openMenu: boolean; // 菜单是否打开
}

export const navScreen = defineStore('navScreen', {
    state: (): NavScreen => {
        return {
            openMenu: false,
        }
    },
    actions: {
        setOpen(isOpen: boolean) {
            this.openMenu = isOpen;
        },
    }
})