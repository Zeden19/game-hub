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
  parent_platforms: { platform: Platform }[];
}

function Platforms({ parent_platforms }: Props) {
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
    <HStack flexWrap={"wrap"} key={"platforms"} paddingBottom={"6px"}>
      {parent_platforms.map((platform) => (
        <Icon
          key={platform.platform.name}
          color={"gray.300"}
          as={iconMap[platform.platform.name]}
        />
      ))}
    </HStack>
  );
}

export default Platforms;
