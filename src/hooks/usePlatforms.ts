import ApiClient, { Response } from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: ms('1d'), //24hrs
    initialData: platforms,
  });

export default usePlatforms;
