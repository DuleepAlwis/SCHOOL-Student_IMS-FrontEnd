import { restEndPoints } from "../../Auth/RestEp";

export const createOrg = (formData) => ({
    type: 'API',
    payload: {
      url: restEndPoints.CREATE_ORG,
      method: 'POST',
      data: formData,
      onSuccess: 'FORM_SUBMIT_SUCCESS',
      onError: 'FORM_SUBMIT_FAILURE'
    }
  });
  
  export const formSubmitSuccess = (data) => ({
    type: 'FORM_SUBMIT_SUCCESS',
    payload: data
  });
  
  export const formSubmitFailure = (error) => ({
    type: 'FORM_SUBMIT_FAILURE',
    payload: error
  });

  export const loginUser = (formData) =>({
    type:'API',
    payload:{
      url:restEndPoints.LOGIN,
      method:'POST',
      data:formData,
      onSuccess:'FORM_SUBMIT_SUCCESS',
      onError:'FORM_SUBMIT_FAILURE'
    }
  })
  