import useData from "./useData.ts";

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

const useGames = () => useData<Game>("/games");

export default useGames;
