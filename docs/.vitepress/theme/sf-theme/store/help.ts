import { localCache } from '../hooks/useLocalStorage'
export interface themeType {
    theme: 'light' | 'dark';
}
export const THEME_NAME = "data-theme";
export const defaultSetting = (): themeType => {
    return localCache.getItem(THEME_NAME) || {
        theme: 'light'
    }
}

export const getDefaultState = (): themeType => {
    return localCache.getItem(THEME_NAME) || defaultSetting()
}

export const setAppSetting = (theme: themeType) => {
    localCache.setItem(THEME_NAME, JSON.stringify(theme));
};
export const SET_LOCAL_SETTING = (theme: themeType): void => {
    return localCache.setItem(THEME_NAME, theme);
};
