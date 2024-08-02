import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames.ts";
import {
  FaAndroid,
  FaApple,
  FaAppStoreIos,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function Platforms({ platforms }: Props) {

  const iconMap: { [key: string]: IconType } = {
    Xbox: FaXbox,
    PlayStation: FaPlaystation,
    PC: FaWindows,
    Android: FaAndroid,
    "Apple Macintosh": FaApple,
    Nintendo: BsNintendoSwitch,
    iOs: FaAppStoreIos,
    Linux: FaLinux,
  };
  
  return (
    <HStack paddingBottom={"6px"}>
      {platforms.map((platform) => (
        <Icon color={"gray.300"} as={iconMap[platform.platform.name]} />
      ))}
    </HStack>
  );
}

export default Platforms;
