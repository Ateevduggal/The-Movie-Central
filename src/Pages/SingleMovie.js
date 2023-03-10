import React from "react";
import { useParams } from "react-router-dom";
// import { AppContext } from "../Components/context";
import { useGlobalContext } from "../Components/context";

const SingleMovie = () => {
  const { id } = useParams();
  // const name = useContext(AppContext);
  const { video } = useGlobalContext();
  console.log(video);
  return (
    <>
      <div className="container">
        <div className="row py-5 my-5">
          {video.map((val) => {
            console.log(val);
            return <div>{val.is}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
