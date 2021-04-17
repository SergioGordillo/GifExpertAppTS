import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [information, setInformation] = useState<string[]>([""]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gif Expert App</h1>

        <AddCategory setInformation={setInformation} />
        <hr />

        <ol>
          {information.map((information) => {
            return <GifGrid key={information} information={information} />;
          })}
        </ol>
      </header>
    </div>
  );
}

export default GifExpertApp;
