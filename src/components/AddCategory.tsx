import React, { useState } from "react";
import { InformationProps } from "../interfaces";

function AddCategory({ setInformation }: InformationProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); //It avoids the page to load again when the form is submitted

    if (inputValue.trim().length > 2) {
      //In order to avoid insert elements without text
      setInformation((information: string[]) => [inputValue, ...information]);
      setInputValue(" "); //Cleaning the textbar
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        className="textBar"
        value={inputValue}
      />
    </form>
  );
}

export default AddCategory;
