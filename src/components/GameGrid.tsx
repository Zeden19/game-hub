import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../services/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

function GameGrid() {
  const { loading, error, games } = useGames();
  const skeletons = [1,2,3,4,5,6];
  return (
    <>
      <div>
        {error && <p>{error}</p>}
        <SimpleGrid
          padding={"20px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={"16px"}
        >
          {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
          {games.map((game) => (
            <GameCard loading={loading} game={game} key={game.id}></GameCard>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export default GameGrid;
