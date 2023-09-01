import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "c3b07d9d30d14c1c9960c7f34a6394bb"
    }
})