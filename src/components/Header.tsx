import { Heading, Text } from "@chakra-ui/react";
import {GameQuery} from "../hooks/useGames.ts";

interface Props {
  gameQuery: GameQuery;
}

function Header({ gameQuery }: Props) {
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
        {gameQuery?.platform && gameQuery.platform.name}{" "}
        {gameQuery?.genre && gameQuery.genre.name} Games{" "}
        {currentSortOrder?.label && "Sorted by " + currentSortOrder.label}
      </Text>
    </Heading>
  );
}

export default Header;
