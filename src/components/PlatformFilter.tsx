import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import {Platform} from "../hooks/usePlatforms.ts";
import findPlatforms from "../hooks/findPlatforms.ts";

interface Props {
  onPlatformClick: (platform: Platform) => void;
  selectedPlatformId?: number
}

function PlatformFilter({onPlatformClick, selectedPlatformId} : Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = findPlatforms(selectedPlatformId)
  
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
