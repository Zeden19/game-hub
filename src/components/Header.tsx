import { Heading, Text } from "@chakra-ui/react";
import {GameQuery} from "../hooks/useGames.ts";
import useGenres from "../hooks/useGenres.ts";
import platforms from "./Platforms.tsx";
import usePlatforms from "../hooks/usePlatforms.ts";
import findPlatforms from "../hooks/findPlatforms.ts";
import findGenre from "../hooks/findGenre.ts";

interface Props {
  gameQuery: GameQuery;
}

function Header({ gameQuery }: Props) {
  const genre = findGenre(gameQuery.genreId)
  const platform = findPlatforms(gameQuery.platformId);
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
