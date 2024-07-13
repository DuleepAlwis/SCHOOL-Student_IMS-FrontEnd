import { connect } from 'react-redux';
import store from '../store';
import { createOrg } from '../Redux/actions/formActions';

const OrgService = {
    createOrganization: (formData) => {
      // Example: Dispatching an action
      store.dispatch(createOrg(formData));
  
      // Example: Accessing Redux state
      const state = store.getState();
      // Access specific state properties if needed
  
      // Example: API call using data from Redux state or formData
      // Perform API call or other operations as needed
      return state;
    }
  };
  
  export default OrgService;