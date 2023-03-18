import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children, media_type, id }) => {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchData = async () => {
    const value = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`
    );
    const values = await value.json();
    // console.log(values);
    setData(values.adult);
  };

  const fetchVideo = async () => {
    const ytvideo = await fetch(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`
    );
    const YTvideo = await ytvideo.json();
    console.log(YTvideo, "here");
    setVideo(YTvideo.results[0]);
  };

  // //calling the function fetchData only after the initia render
  useEffect(() => {
    fetchData();
  }, []);

  // //calling the function fetchVideo only after the initia render
  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <AppContext.Provider value={{ video, data }}>
      {children}
    </AppContext.Provider>
  );
};
//Global Custom Hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
