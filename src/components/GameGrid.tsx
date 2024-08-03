import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";
import {Platform} from "../hooks/useGames.ts";

interface Props {
  selectedGenre: null | Genre;
  selectedPlatform: null | Platform;
}

function GameGrid({selectedGenre, selectedPlatform} : Props) {
  const { loading, error, data } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div>
        {error && <p key={"error"}>{error}</p>}
        <SimpleGrid
          padding={"20px"}
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={"16px"}
        >
          {loading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data.map((game) => (
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
