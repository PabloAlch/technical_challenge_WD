import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  withCredentials: true,
});



export function allPhones() {
  return http.get("/").then((res) => res.data);
}

export function detailPhone(idPhone) {
  return http.get(`/phones/${idPhone}`).then((res) => res.data);
}

