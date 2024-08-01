import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../services/useGames.ts";
import GameCard from "./GameCard.tsx";

function GameGrid() {
  const { loading, error, games } = useGames();
  return (
    <>
      <div>
        {loading && <Spinner size={"xl"} />}
        {error && <p>{error}</p>}
        <SimpleGrid padding={"20px"} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={"16px"}>
          {games.map((game) => (
            <GameCard game={game} key={game.id}></GameCard>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export default GameGrid;
