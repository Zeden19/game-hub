import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";

export interface Response<T> {
  count: number,
  results: T[]
}

/**
 @template T - Type of data
 @param {string} endpoint - End URL (include /)
 * @param requestConfig - Request configurations, used for query parameters
 * @param deps - Dependencies
 */
const useData = <T>(endpoint: string, requestConfig ?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setLoading(false);
        setError(err.message);
      });
    
    return () => controller.abort();
  }, deps ? [...deps] : []);
  return { data: data, error, loading };
};

export default useData;
