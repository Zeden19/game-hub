import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game.ts";

const apiClient = new APIClient<Game>("/games");

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string | null;
  search: string;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
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
    staleTime: ms("1d"), //24h
  });

export default useGames;
