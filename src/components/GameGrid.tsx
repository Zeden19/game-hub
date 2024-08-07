import { Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames, { GameQuery } from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    isLoading,
    error,
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <>
      <div>
        {error && <p key={"error"}>{error.message}</p>}

        <InfiniteScroll
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
          dataLength={dataLength}
        >
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
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} key={game.id}></GameCard>
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default GameGrid;
