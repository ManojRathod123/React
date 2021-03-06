import axios from "axios";
import { API_BASE_PATH } from "./BASE_URL";

export const homeCall = axios
  .get(`${API_BASE_PATH}/users`)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    return err.response;
  });
