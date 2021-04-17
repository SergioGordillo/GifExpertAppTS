import React, { useState } from "react";

import "../index.css";

export function useFetchGifs() {
  
  const [state, setState] = useState({
      data: [],
      loading: true 
  })

  setTimeout(() => {
      setState({
        data: [],
        loading: false 
      })
  }, 3000);

  return state;
}

export default useFetchGifs;