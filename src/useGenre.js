const useGenre = (value) => {
    if (value.length < 1) return "";
  
    const GenreIds = value.map((g) => g.id);
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
  };
  
  export default useGenre;