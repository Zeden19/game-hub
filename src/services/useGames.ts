import { useEffect, useState } from "react";
import apiClient from "./api-client.ts";
import { CanceledError } from "axios";

export interface Platform {
  platform: {
    name:
      | "Xbox"
      | "PlayStation"
      | "PC"
      | "Apple Macintosh"
      | "Linux"
      | "Nintendo"
      | "Android"
      | "iOs";
    slug:
      | "xbox-series-x"
      | "xbox-one"
      | "xbox360"
      | "pc"
      | "linux"
      | "mac"
      | "playstation5"
      | "playstation4"
      | "playstation3"
      | "nintendo-switch";
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: Platform[];
}

interface GamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, loading };
};

export default useGames;
