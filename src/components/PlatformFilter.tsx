import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import {Platform} from "../hooks/useGames.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
  onPlatformClick: (platform: Platform) => void;
  selectedPlatformName: string | null | undefined;
}

function PlatformFilter({onPlatformClick, selectedPlatformName} : Props) {
  const { data, error } = usePlatforms();
  
  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronRight />} as={Button}>
        {selectedPlatformName ? selectedPlatformName : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onPlatformClick(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
