import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import PlatformFilter from "./components/PlatformFilter.tsx";
import SortSelector from "./components/SortSelector.tsx";
import Header from "./components/Header.tsx";

function App() {
  // const [gameQuery, setGameQuery] = useState({} as GameQuery)
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
          <Navigation />
        </GridItem>

        <Show above={"md"}>
          <GridItem area={"aside"} paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"} textColor={"white"}>
          <Box paddingLeft={5}>
            <Header />
            <HStack spacing={"10px"}>
              <PlatformFilter />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
