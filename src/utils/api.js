//base url
export const API_URL = 'http://localhost:8000/api/v1';

//retrieve token from local storage
export const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
};