import { Heading, Text } from "@chakra-ui/react";
import findPlatforms from "../hooks/findPlatforms.ts";
import findGenre from "../hooks/findGenre.ts";
import useGameQueryStore from "../hooks/store.ts";

function Header() {
  const genreId = useGameQueryStore((state) => state.genreId);
  const platformId = useGameQueryStore((state) => state.platformId);
  const sort = useGameQueryStore((state) => state.sort);

  const genre = findGenre(genreId);
  const platform = findPlatforms(platformId);
  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "created", label: "Date Created" },
    { value: "updated", label: "Date Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "MetaCritic" },
  ];

  const currentSortOrder = sortOptions.find((option) => option.value === sort);
  return (
    <Heading fontSize={"5xl"} paddingY={3}>
      <Text>
        {" "}
        {platform?.name} {genre?.name} Games{" "}
        {currentSortOrder?.label && "Sorted by " + currentSortOrder.label}
      </Text>
    </Heading>
  );
}

export default Header;
