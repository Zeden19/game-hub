import useGenres, { Genre } from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Img, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

interface Props {
  onGenreClick: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onGenreClick, selectedGenreId }: Props) {
  const {data, error, isLoading} = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  return (
    <List>
      {error && <Text key={"error"}>{error.message}</Text>}

      <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
      {isLoading
        ? skeletons.map((skeleton) => (
            <ListItem key={skeleton}>
              <GenreListSkeleton key={skeleton} />
            </ListItem>
          ))
        : data?.results.map((genre) => (
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
                  objectFit={"cover"}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Img>
                <Button whiteSpace={"normal"} textAlign={"left"}
                  fontWeight={
                    genre?.id === selectedGenreId ? "bold" : "normal"
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
