import useGameTrailer from "../hooks/useGameTrailer.ts";
import {Box} from "@chakra-ui/react";

interface Props {
  slug: string | undefined;
}

function GameTrailer({ slug }: Props) {
  const { data, error, isLoading } = useGameTrailer(slug!);
  const firstTrailer = data?.results[0];
  return !firstTrailer ? null : (
    <>
      <Box marginBottom={3}>
        <video
          poster={firstTrailer?.preview}
          controls
          src={firstTrailer?.data.max}
        />
      </Box>
    </>
  );
}

export default GameTrailer;
