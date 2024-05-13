import axios from "axios";

const userFetch = axios.create({
    baseURL: "https://randomuser.me",
});

//Intercept Outgoing Request
userFetch.interceptors.request.use((request) => {

    request.headers["Accept"] = "application/json";

    //Always Do This!
    return request;
},
    (error) => {
        return Promise.reject(error);
    });

//Intercept Incoming Response
userFetch.interceptors.response.use((response) => {

    console.log(response);

    //Always Do This!
    return response;
},
    (error) => {
        console.log(error);
    });

export default userFetch;