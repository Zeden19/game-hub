import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React from "react";
import useGameQueryStore from "../hooks/store.ts";
import { useNavigate } from "react-router-dom";

function Search() {
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const navigate = useNavigate();

  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        background={"#252525"}
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            navigate("/");
            const inputElement = event.target as HTMLInputElement;
            setSearch(inputElement.value);
          }
        }}
        onClick={() => navigate("/")}
        borderRadius={20}
        variant={"field"}
        placeholder={"Search for games"}
      ></Input>
    </InputGroup>
  );
}

export default Search;
