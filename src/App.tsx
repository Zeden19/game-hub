import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import { Platform } from "./hooks/useGames.ts";
import PlatformFilter from "./components/PlatformFilter.tsx";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
  search: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          md: "200px 1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navigation onSearchEnter={(search : string) => setGameQuery({...gameQuery, search})}></Navigation>
        </GridItem>

        <Show above={"md"}>
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onGenreClick={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"} textColor={"white"}>
          <HStack spacing={"10px"} paddingLeft={5}>
            <PlatformFilter
              selectedPlatform={gameQuery.platform}
              onPlatformClick={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              gameQuery={gameQuery}
              onSortSelect={(field) =>
                setGameQuery({ ...gameQuery, sort: field })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
