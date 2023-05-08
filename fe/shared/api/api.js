import axios from "axios";

const client = axios.create({
  timeout: 5000,
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

class Api_instance {
  constructor() {
    const backendBaseUrl = "http://localhost:5012";

    this.backend = {
      data: backendBaseUrl + "/api/users",
    };
  }
}

export const API = new Api_instance();

export default client;
