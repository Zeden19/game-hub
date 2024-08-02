import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";

function App() {
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
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"} textColor={"white"}>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
