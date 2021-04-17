import { GifGridProps } from "../components/GifGrid";

export const getGifs = async (props: GifGridProps) => {
  const { information } = props;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=ZU4UQwNBA4tp5s4h5b3dpaIdUo32jFQ2&q=${encodeURI(
    information
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
