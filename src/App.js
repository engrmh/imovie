import React, { useState, useCallback, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState(false);

  let routes = useRoutes(routers);

  const login = (userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageDate = JSON.parse(localStorage.getItem("user"));
    if (localStorageDate) {
      fetch(`https://moviesapi.ir/api/user`, {
        headers: {
          Authorization: `Bearer ${localStorageDate.token}`,
          accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [login, token]);

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
          isLoggedIn,
          token,
          userInfos,
          login,
          logout,
        }}
      >
        {routes}
      </PageContext.Provider>
      <Footer />
    </div>
  );
}
