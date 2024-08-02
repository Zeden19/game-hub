const getCroppedImageUrl = (url: string) => {
  const index = url.indexOf("media/");
  const start = url.slice(0, index + 6);
  const end = url.slice(index + 6, url.length);
  return start + "crop/600/400/" + end
};

export default getCroppedImageUrl;
