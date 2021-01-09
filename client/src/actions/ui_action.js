import * as uiTypes from '../constants/ui_constant';


export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING,
});

export const showDrawerQueue = () => ({
  type: uiTypes.SHOW_DRAWER_QUEUE,
});

export const hideDrawerQueue = () => ({
  type: uiTypes.HIDE_DRAWER_QUEUE,
});
