import {Grid, GridItem, Show} from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";

function App() {
  
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area={"nav"}>
          <Navigation></Navigation>
        </GridItem>
        <Show above={"md"}>
          <GridItem area={"aside"}>aside</GridItem>
        </Show>
        <GridItem area={"main"} textColor={"white"}>main</GridItem>
      </Grid>
    
    </>
  )
}

export default App
