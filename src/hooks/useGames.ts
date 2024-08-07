import useData, { Response } from "./useData.ts";
import { Genre } from "./useGenres.ts";
import { Platform } from "./usePlatforms.ts";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
  search: string;
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sort,
            search: gameQuery.search,
          },
        })
        .then((res) => res.data);
    },
    staleTime: 10 * 60 * 60 * 1000, //10hrs
  });
};

export default useGames;
