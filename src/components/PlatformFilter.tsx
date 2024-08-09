import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import findPlatforms from "../hooks/findPlatforms.ts";
import useGameQueryStore from "../hooks/store.ts";

function PlatformFilter() {
  const selectedPlatformId = useGameQueryStore((state) => state.platformId);
  const setPlatform = useGameQueryStore((state) => state.setPlatform);

  const { data, error } = usePlatforms();
  const selectedPlatform = findPlatforms(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronRight />} as={Button}>
        {selectedPlatform?.name ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformFilter;
