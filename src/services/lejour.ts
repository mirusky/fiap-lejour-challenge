import axios from "axios";

const BASEURL = "https://sheet2api.com/v1/ByR2h1huRjyQ/fiap";

export const API = axios.create({
  baseURL: BASEURL,
});
