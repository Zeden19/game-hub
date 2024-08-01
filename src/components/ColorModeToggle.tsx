import {FormLabel, HStack, Switch, useColorMode} from "@chakra-ui/react";

function ColorModeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack>
      <Switch colorScheme={"green"} onChange={toggleColorMode} isChecked={colorMode === "dark"} id={"theme"}></Switch>
      <FormLabel htmlFor={"theme"}>Dark Mode</FormLabel>
    </HStack>
  )
}

export default ColorModeToggle;