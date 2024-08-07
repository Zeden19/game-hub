import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../hooks/useGames.ts";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { isLoading, error, data } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div>
        {error && <p key={"error"}>{error.message}</p>}
        <SimpleGrid
          padding={"20px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} key={game.id}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}

export default GameGrid;
