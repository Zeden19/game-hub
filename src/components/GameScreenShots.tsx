import useGameScreenshots from "../hooks/useGameScreenshots.ts";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {Box} from "@chakra-ui/react";

interface Props {
  slug: string | undefined;
}

function GameScreenShots({ slug }: Props) {
  const { data, isLoading, error } = useGameScreenshots(slug!);
  
  if (isLoading) return null;
  
  if (error) throw new Error("Screenshot error");
  return (
    <>
      <Box margin={8}
      ><Slide easing={"ease-out"} indicators={true} transitionDuration={400}>
        {data?.results.map((image) => (
          <img key={image.id} src={image.image} alt={"Screenshot"}/>
        ))}
      </Slide></Box>
    </>
  );
}

export default GameScreenShots;
