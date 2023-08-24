import Home from "./Pages/Home/Home";
import MovieBucket from "./Pages/MovieBucket/MovieBucket";
import CurrentMovie from "./Pages/CurrentMovie/CurrentMovie";
import AddNewFilm from "./Pages/AddNewFilm/AddNewFilm";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Search from "./Pages/Search/Search";

export let routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AllMovies",
    element: <MovieBucket />,
  },
  {
    path: "/currentMovie/:movieID",
    element: <CurrentMovie />,
  },
  {
    path: "/newMovie",
    element: <AddNewFilm />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
