import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import useGameQueryStore from "../hooks/store.ts";

function SortSelector() {
  const sort = useGameQueryStore((state) => state.sort);
  const setSort = useGameQueryStore((state) => state.setSort);

  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Date Added" },
    { value: "created", label: "Date Created" },
    { value: "updated", label: "Date Updated" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "MetaCritic" },
  ];

  const currentSortOrder = sortOptions.find((option) => option.value === sort);

  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronRight />} as={Button}>
        Order by:{" "}
        {currentSortOrder?.label ? currentSortOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem onClick={() => setSort(option.value)} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
