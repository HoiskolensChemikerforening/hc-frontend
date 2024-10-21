
import axios from 'axios';

export const baseUrl = "http://localhost:8000/";

export const fetchList = async (url, setFunction, currentPage = 1, itemsPerPage = 20) => {
    await axios.get(baseUrl + url, {
        params: { page: currentPage, itemsPerPage }
      })
    .then(response => {
    setFunction(response.data);
    })
}

export const fetchPaginationObject = async (url, setFunction, setPaginatonProperties) => {
    try {
        const response = await axios.get(baseUrl + url);
        setFunction(response.data.results);
        setPaginatonProperties({
            "links" : response.data.links,
            "page_size": response.data.page_size,
            "total": response.data.total,
            "page": response.data.page
        });
        console.log("page_size gir meg", response.data.page_size)
    } catch (error) {
        console.error("Error fetching pagination object", error);
    }
}

export const fetchDetail = async (url, id, setFunction, setLoading=null) => {
    if (setLoading) {
        setLoading(true);
    }
    await axios.get(baseUrl + url + String(id) + "/")
    .then(response => {
        setFunction(response.data);
    })
    if (setLoading) {
        setLoading(false);
    }
}

export const postRequest = async (url, data) => {
    await axios.post(baseUrl + url, data);
}

export const checkPermission = async (permission, user, setFunction) => {

    const data = {
        "permission": permission,
        "user_id": user? user.user_id : null
    }

    if (!user) {
        setFunction(false);
    } else {

        await axios.post(
            baseUrl + "api/permissions/", data
            ).then(response => {
                setFunction(response.data.hasPermission);
            }).catch(error => {
                setFunction(false);
            }
        );

    }
}
