import axios from 'axios';
 
export const checkPermission = async (permission, setFunction) => {
    const data = {
        "permission": permission
    }
  
    await axios.post(
        "http://localhost:8000/api/permissions/", data
        ).then(response => {
            setFunction(response.data.hasPermission);
        }).catch(error => {
            console.log(error);
            setFunction(false);
        });
  }