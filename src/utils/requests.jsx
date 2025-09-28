import axios from 'axios';

export const baseUrl = "http://localhost:8000/";

const joinUrl = (base, path) =>
  `${base.replace(/\/+$/, "")}/${String(path).replace(/^\/+/, "")}`;

export const fetchList = async (url, setFunction, currentPage = 1, itemsPerPage = 20) => {
    await axios.get(baseUrl + url, {
        params: { page: currentPage, itemsPerPage }
      })
    .then(response => {
    setFunction(response.data);
    })
}

export const fetchPaginationObject = async (url, setFunction, setPaginatonProperties) => {
    await axios.get(baseUrl + url)
    .then(response => {
    setFunction(response.data.results);
    console.log("hei", response.data)
    console.log("results", response.data.results.map(e => 1),response.data.results)
    setPaginatonProperties({
        "links" : response.data.links,
        "page_size": response.data.page_size,
        "total": response.data.total,
        "page": response.data.page
    });
    console.log("hu", {
        "links" : response.data.links,
        "page_size": response.data.page_size,
        "total": response.data.total,
        "page": response.data.page
    })
    })
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

export const postRequest = async (url, data, config = {}) => {
  try {
    // Hvis data er FormData (f.eks. når du sender bilde), sett riktige headers
    const isFormData = (typeof FormData !== "undefined") && (data instanceof FormData);

    const resp = await axios.post(
      joinUrl(baseUrl, url),
      data,
      {
        // Ikke overskriv Content-Type hvis kalleren eksplisitt har satt headers
        headers: isFormData
          ? { "Content-Type": "multipart/form-data", ...(config.headers || {}) }
          : { ...(config.headers || {}) },
        // legg evt. til withCredentials: true hvis du bruker cookies/session
        ...config,
      }
    );

    return resp.data; // ← kallende kode kan bruke resultatet
  } catch (error) {
    // Behold din eksisterende logging, men kast videre
    if (error.response) {
      console.error("Server responded with:", error.response.data);
    } else {
      console.error("Error sending request:", error.message);
    }
    throw error; // ← viktig: lar UI/handler vise feilmelding
  }
};

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