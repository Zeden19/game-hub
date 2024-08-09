import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import Header from "../components/Header.tsx";
import PlatformFilter from "../components/PlatformFilter.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
        lg: "200px 1fr",
      }}
    >
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
  );
}

export default HomePage;
