import ApiClient, { Response } from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms.ts";
import ms from "ms";
import { Platform } from "../entities/Platform.ts";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"), //24hrs
    initialData: platforms,
  });

export default usePlatforms;
