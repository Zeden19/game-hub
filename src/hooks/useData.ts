import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { CanceledError } from "axios";

interface Response<T> {
  count: number,
  results: T[]
}

/**
@template T - Type of data
@param {string} endpoint - End URL (include /)
 */
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data: data, error, loading };
};

export default useData;
