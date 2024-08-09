import useGameTrailer from "../hooks/useGameTrailer.ts";

interface Props {
  slug: string | undefined;
}

function GameTrailer({ slug }: Props) {
  if (!slug) return null;
  const { data, error, isLoading } = useGameTrailer(slug);
  const firstTrailer = data?.results[0];
  return !firstTrailer ? null : (
    <>
      <video
        poster={firstTrailer?.preview}
        controls
        src={firstTrailer?.data.max}
      />
    </>
  );
}

export default GameTrailer;
