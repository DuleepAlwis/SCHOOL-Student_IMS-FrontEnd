const initialState = {
    loading: false,
    data: null,
    error: null
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORM_SUBMIT_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null
        };
      case 'FORM_SUBMIT_FAILURE':
        return {
          ...state,
          loading: false,
          data: null,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  