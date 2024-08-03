import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import { Platform } from "./hooks/useGames.ts";
import PlatformFilter from "./components/PlatformFilter.tsx";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
          <Navigation></Navigation>
        </GridItem>

        <Show above={"md"}>
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              onGenreClick={(genre: Genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>

        <GridItem area={"main"} textColor={"white"}>
          <PlatformFilter selectedPlatformName={selectedPlatform?.name}
            onPlatformClick={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
