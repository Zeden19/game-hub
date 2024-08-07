import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import { Platform } from "./usePlatforms";
import {Genre} from "./useGenres.ts";

const apiClient = new APIClient<Game>("/games");

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string | null;
  search: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGames;
