import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {TrailerResponse} from "../entities/TrailerResponse.ts";

const apiClient = new ApiClient<TrailerResponse>("/games");

const useTrailer = (slug: string) =>
  useQuery({
    queryKey: ["movies", slug],
    queryFn: () => apiClient.get(slug + "/movies"),
  });

export default useTrailer;
