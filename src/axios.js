import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-app-clone.herokuapp.com/",
});
export default instance;
