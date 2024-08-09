import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";
import {Screenshot} from "../entities/Screenshot.ts";

const apiClient = new ApiClient<Screenshot>("/games");

const useGameScreenshots = (slug: string) =>
  useQuery({
    queryKey: ["screenshots", slug],
    queryFn: () => apiClient.get(slug + "/screenshots"),
  });

export default useGameScreenshots;
