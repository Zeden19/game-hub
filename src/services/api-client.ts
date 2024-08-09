import axios, {AxiosRequestConfig} from "axios";

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

  getAll = async (config?: AxiosRequestConfig) => {
    const res = await apiInstance.get<Response<T>>(this.endpoint, config);
    return res.data;
  };

  get = async (slug: number | string) => {
    const res = await apiInstance.get<T>(this.endpoint + "/" + slug);
    return res.data;
  };
}

// get = (id: number | string) => {
//     return apiInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
//   };

export default ApiClient;
