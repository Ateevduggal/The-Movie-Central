import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center w-100 text-uppercase p-3 header">
            <i className="fas fa-video"></i> &nbsp;&nbsp; The Movie Central
          </div>
          <a
            href="https://tekolio.com/how-to-build-a-movie-app-in-react-using-tmdb-api/"
            target="_blank"
            className="col-11 header header1 bg-transparent fs-4 py-4 text-end"
          >
            How to make ?
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
