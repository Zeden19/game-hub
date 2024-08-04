import noImage from "../assets/no-image.webp"
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage
  const index = url.indexOf("media/");
  const start = url.slice(0, index + 6);
  const end = url.slice(index + 6, url.length);
  return start + "crop/600/400/" + end
};

export default getCroppedImageUrl;
