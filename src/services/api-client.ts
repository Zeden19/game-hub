import axios, {AxiosRequestConfig} from "axios";
import { GameQuery } from "../hooks/useGames.ts";

export interface Response<T> {
  count: number;
  next: string | null;
  results: T[];
}

const apiInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async (config?: AxiosRequestConfig) => {
    const res = await apiInstance.get<Response<T>>(this.endpoint, config);
    return res.data;
  };
}

export default ApiClient;
