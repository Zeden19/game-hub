import { Heading, Text } from "@chakra-ui/react";
import {GameQuery} from "../hooks/useGames.ts";
import useGenres from "../hooks/useGenres.ts";
import platforms from "./Platforms.tsx";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
  gameQuery: GameQuery;
}

function Header({ gameQuery }: Props) {
  const {data : genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);
  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "created", label: "Date Created" },
    { value: "updated", label: "Date Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "MetaCritic" },
  ];

  const currentSortOrder = sortOptions.find(
    (option) => option.value === gameQuery.sort,
  );
  return (
    <Heading fontSize={"5xl"} paddingY={3}>
      <Text>
        {" "}
        {platform?.name}{" "}
        {genre?.name} Games{" "}
        {currentSortOrder?.label && "Sorted by " + currentSortOrder.label}
      </Text>
    </Heading>
  );
}

export default Header;
