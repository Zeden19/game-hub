import useData from "./useData.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
