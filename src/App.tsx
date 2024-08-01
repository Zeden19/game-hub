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
          <GridItem area={"aside"} bg={'lavender'}>aside</GridItem>
        </Show>
        <GridItem area={"main"} bg={'black'} textColor={"white"}>main</GridItem>
      </Grid>
    
    </>
  )
}

export default App
