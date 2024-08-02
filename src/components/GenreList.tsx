import useGenres from "../hooks/useGenres.ts";
import { HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

function GenreList() {
  const { data, loading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <List>
      {error && <Text>{error}</Text>}

      {loading &&
        skeletons.map((skeleton) => (
          <ListItem>
            <GenreListSkeleton key={skeleton} />
          </ListItem>
        ))}

      {data.map((genre) => (
        <ListItem
          transition={"0.15s"}
          _hover={{ transform: "scale(1.05)", filter: "brightness(120%)" }}
          paddingY={"5px"}
          key={genre.id}
        >
          <HStack>
            <Img
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Img>
            <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
