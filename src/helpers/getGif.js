export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=3cyMbpwQ29N5lq3OUF6llCrIADArV67s&limit=8`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data
    .slice(0, 10)
    .map((gif) =>
      gif.images && gif.images.original
        ? gif.images.original.url
        : "URL_NOT_FOUND"
    );

  return { id: category, gifs };
};
