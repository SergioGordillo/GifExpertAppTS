import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import "../index.css";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export interface GifGridProps {
  information: string;
}

export interface GifsInterface {
  id?: string;
  title?: string;
  url?: string;
}

function GifGrid(props: GifGridProps): JSX.Element {
  const { information } = props;

  const [images, setImages] = useState<GifsInterface[]>([]);

  const { loading } = useFetchGifs();

  useEffect(() => {
    getGifs({ information }).then(setImages);
  }, [information]);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{information}</h3>

      {loading ? (
        <span>"Cargando..."</span>
      ) : (
        <span>"Utiliza el buscador para encontrar más gifs"</span>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} title={img.title} url={img.url} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
