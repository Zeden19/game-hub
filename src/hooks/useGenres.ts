import { useQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api-client.ts";
import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: genres
  });

export default useGenres;
