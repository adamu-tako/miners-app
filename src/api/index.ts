import axios from "axios";
import { isDev } from "./getCurrentHost";
import { IMinerForm, ISave } from "../types/miners";

const session = JSON.parse(localStorage.getItem("Session") as string);

const API = axios.create({
  baseURL: isDev() ? "http://localhost:4006/" : "https://office.sydani.org/",
});

API.interceptors.request.use((req) => {
  if (session) {
    req.headers.Authorization = `Bearer ${session?.token}`;
  }

  return req;
});

export const signIn = (loginData: {
  email: string;
  password: string;
  keepSignedIn: boolean;
}) => API.post("auth/login", loginData);

export const createMiners = (minerData: IMinerForm) =>
  API.post("miner/create", minerData);

export const uploadPhoto = (uploadData: ISave, image: File) => {
  const form = new FormData();
  form.append("files", image);
  if (uploadData.minerId) form.append("minerId", uploadData.minerId);
  if (uploadData.companyId) form.append("companyId", uploadData.companyId);

  return API.post("upload-image", form);
};

export const getMiners = (searchString: string, page: number, limit: number) =>
  API.post("miner/getAll", { searchString, limit, page });
