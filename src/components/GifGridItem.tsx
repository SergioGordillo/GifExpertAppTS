import React, { useState } from "react";
import { GifsInterface } from "./GifGrid";
import "../index.css";

function GifGridItem(props: GifsInterface) {
  const { id, title, url } = props;

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifGridItem;
