import { useQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from "ms";

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
    staleTime: ms('1d'), //24hrs
    initialData: genres
  });

export default useGenres;
