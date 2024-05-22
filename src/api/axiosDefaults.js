import axios from "axios";

axios.defaults.baseURL = "https://django-restframe-5bb7db23b527.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;