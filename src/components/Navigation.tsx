import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeToggle from "./ColorModeToggle.tsx";
import Search from "./Search.tsx";
import {GameQuery} from "../App.tsx";

interface Props {
  onSearchEnter: (search: string) => void
}

function Navigation({onSearchEnter} : Props) {
  return (
    <HStack margin={"40px 0 0 0"} padding={"10px"}>
      <Image boxSize={"4em"} src={logo}></Image>
      <Search onSearchEnter={(search : string) => onSearchEnter(search)}></Search>
      <ColorModeToggle></ColorModeToggle>
    </HStack>
  
  )
}

export default Navigation;