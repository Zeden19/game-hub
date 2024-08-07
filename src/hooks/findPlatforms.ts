import usePlatforms from "./usePlatforms.ts";

const findPlatforms = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === platformId);
};

export default findPlatforms;
