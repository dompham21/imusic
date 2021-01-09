import * as uiTypes from '../constants/ui_constant';


const initialState = {
    showLoading: false,
    toggeShowDrawerQueue: false,
};

  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case uiTypes.SHOW_LOADING: {
        return {
          ...state,
          showLoading: true,
        };
      }
      case uiTypes.HIDE_LOADING: {
        return {
          ...state,
          showLoading: false,
        };
      }
      case uiTypes.SHOW_DRAWER_QUEUE: {
        return {
          ...state,
          toggeShowDrawerQueue: !state.toggeShowDrawerQueue,
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  
