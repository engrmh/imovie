import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import PageContext from "./Context/Context";

export default function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1);

  let routes = useRoutes(routers);

  return (
    <div>
      <Header />
      <PageContext.Provider
        value={{
          allMovies,
          setAllMovies,
          moviePage,
          setMoviePage,
        }}
      >
        {routes}
      </PageContext.Provider>
    </div>
  );
}
