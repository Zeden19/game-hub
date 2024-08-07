import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import {Platform} from "../hooks/useGames.ts";
import usePlatforms from "../hooks/usePlatforms.ts";

interface Props {
  onPlatformClick: (platform: Platform) => void;
  selectedPlatform: Platform | null
}

function PlatformFilter({onPlatformClick, selectedPlatform} : Props) {
  const { data, error } = usePlatforms();
  
  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronRight />} as={Button}>
        {selectedPlatform?.name ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onPlatformClick(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
