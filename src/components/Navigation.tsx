import {HStack, FormLabel, Image, Input, Switch} from "@chakra-ui/react";
import logo from "../assets/logo.webp"

function Navigation() {
  return (
    <HStack>
      <Image boxSize={"3em"} src={logo}></Image>
      <Input borderRadius={"10%"} placeholder={"Search for games"}></Input>
      <Switch id={"theme"}></Switch>
      <FormLabel htmlFor={"theme"}>Dark Mode</FormLabel>
    
    </HStack>
  
  )
}

export default Navigation;