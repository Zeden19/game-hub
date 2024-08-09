import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import React from "react";
import useGameQueryStore from "../hooks/store.ts";

function Search() {
  const setSearch = useGameQueryStore(s => s.setSearch)
  
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        onKeyDown={(event :  React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            console.log("enter")
            const inputElement = event.target as HTMLInputElement
            setSearch(inputElement.value);
          }
        }}
        borderRadius={20}
        variant={"field"}
        placeholder={"Search for games"}
      ></Input>
    </InputGroup>
  );
}

export default Search;
