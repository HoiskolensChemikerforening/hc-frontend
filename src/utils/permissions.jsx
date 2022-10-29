import axios from 'axios';
import { baseUrl } from './requests';
import { setAuthToken } from '../pages/login/setAuthToken';
 
export const checkPermission = async (permission, setFunction) => {

    const data = {
        "permission": permission
    }
  
    await axios.post(
        baseUrl + "api/permissions/", data
        ).then(response => {
            setFunction(response.data.hasPermission);
        }).catch(error => {
            setFunction(false);
        });
  }