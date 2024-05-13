import axios from "axios";

const userFetch = axios.create({
    baseURL: "https://randomuser.me",
    headers: {
        Accept: "application/json"
    }
});

export default userFetch;