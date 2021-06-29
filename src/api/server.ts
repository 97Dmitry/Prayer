import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://prayer.herokuapp.com/",
});

export default httpClient;
