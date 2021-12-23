import React, { useEffect } from "react";

const Genre = ({ genre, setGenre, setPage, type, value, setValue }) => {
  const fetchGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`
    );
    const { genres } = await data.json();
    setGenre(genres);
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  const CategoryAdd = (genres) => {
    setValue([...value, genres]);
    setGenre(genre.filter((g) => g.id !== genres.id));
    setPage(1);
  };
  const CategoryRemove = (genres) => {
    setValue(value.filter((g) => g.id !== genres.id));
    setGenre([...genre, genres]);
    setPage(1);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-12 d-flex flex-wrap">
            {value &&
              value.map((Val) => {
                console.log(Val);
                const { id, name } = Val;
                return (
                  <>
                    <div className="m-2" key={id}>
                      <button
                        className="bg-dark text-white px-4 py-2 text-center buttons"
                        onClick={() => CategoryRemove(Val)}
                      >
                        {name}
                      </button>
                    </div>
                  </>
                );
              })}

            {genre &&
              genre.map((Gen) => {
                const { id, name } = Gen;
                return (
                  <>
                    <div className="m-2" key={id}>
                      <button
                        className="bg-dark text-white px-4 py-2 text-center button"
                        onClick={() => CategoryAdd(Gen)}
                      >
                        {name}
                      </button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
