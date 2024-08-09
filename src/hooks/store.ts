import { create } from "zustand";

interface GameQueryStore {
  genreId?: number;
  platformId?: number;
  sort: string | null;
  search: string;
  setSearch: (search: string) => void;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSort: (field: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((useState) => ({
  sort: "",
  search: "",
  setSearch: (search) => useState(() => ({ search: search })),
  setGenre: (genreId) => useState(() => ({ genreId: genreId })),
  setPlatform: (platformId) => useState(() => ({ platformId: platformId })),
  setSort: field => useState(() => ({sort: field}))
}));

export default useGameQueryStore;
