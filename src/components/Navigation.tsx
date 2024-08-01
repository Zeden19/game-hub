import {HStack, Image, Input,} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeToggle from "./ColorModeToggle.tsx";

function Navigation() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image boxSize={"3em"} src={logo}></Image>
      <Input borderRadius={"10%"} placeholder={"Search for games"}></Input>
      <ColorModeToggle></ColorModeToggle>
    </HStack>
  
  )
}

export default Navigation;