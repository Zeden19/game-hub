import useGenres from "./useGenres.ts";

const findGenre = (genreId? : number) => {
  const {data: genres} = useGenres();
  return genres?.results.find(g => g.id === genreId);
}

export default findGenre;