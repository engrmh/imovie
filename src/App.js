import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import { routers } from "./routes";
import PageContext from "./Context/Context";
import "./App.css";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [movieID, setMovieID] = useState(null);

  let routes = useRoutes(routers);

  return (
    <div>
      <div className="header-container position-sticky top-0 end-0 start-0">
        <Header />
      </div>
      <PageContext.Provider
        value={{
          allMovies,
          setAllMovies,
          moviePage,
          setMoviePage,
          movieID,
          setMovieID,
        }}
      >
        {routes}
      </PageContext.Provider>
      <Footer />
    </div>
  );
}
