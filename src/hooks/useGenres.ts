import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.get("/genres").then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
