import useGenres, { Genre } from "../hooks/useGenres.ts";
import { Button, HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

interface Props {
  onGenreClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onGenreClick, selectedGenre }: Props) {
  const { data, loading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  return (
    <List>
      {error && <Text key={"error"}>{error}</Text>}

      {loading
        ? skeletons.map((skeleton) => (
            <ListItem key={skeleton}>
              <GenreListSkeleton key={skeleton} />
            </ListItem>
          ))
        : data.map((genre) => (
            <ListItem
              transition={"0.15s"}
              _hover={{ transform: "scale(1.05)", filter: "brightness(120%)" }}
              paddingY={"5px"}
              key={genre.id}
              onClick={() => onGenreClick(genre)}
            >
              <HStack>
                <Img
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Img>
                <Button
                  fontWeight={
                    selectedGenre?.name === genre.name ? "bold" : "normal"
                  }
                  variant={"link"}
                  fontSize={"large"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
}

export default GenreList;
