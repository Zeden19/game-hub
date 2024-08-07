import { Response } from "./useData.ts";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";
import platforms from "../data/platforms.ts";

// const usePlatforms = () => {
//   return useQuery<Response<Platform>, Error>({
//     queryKey: ["platforms"],
//     queryFn: () => {
//       apiClient.get("/platforms/lists/parents").then((res) => res.data);
//     },
//     staleTime: 365 * 60 * 60 * 1000,
//   });
// };

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    initialData: {count: platforms.length, results: platforms}
  });
};

export default usePlatforms;
