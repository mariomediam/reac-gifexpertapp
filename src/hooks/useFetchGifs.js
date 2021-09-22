import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    //getGifs(category).then((imgs) => setimages(imgs));
    //getGifs(category).then(setimages)

    getGifs(category).then((imgs) => setstate({ data: imgs, loading: false }));
  }, [category]);

  // setTimeout(() => {
  //   setstate({ data: [], cargando: false });
  // }, 3000);

  return state;
};
