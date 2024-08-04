import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import React from "react";

interface Props {
  onSearchEnter: (search: string) => void
}

function Search({ onSearchEnter } : Props) {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        onKeyDown={(event :  React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            const inputElement = event.target as HTMLInputElement
            onSearchEnter(inputElement.value);
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
