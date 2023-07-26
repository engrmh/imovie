import Home from "./Pages/Home/Home";
import MovieBucket from "./Pages/MovieBucket/MovieBucket";
import CurrentMovie from "./Pages/CurrentMovie/CurrentMovie";
import AddNewFilm from "./Pages/AddNewFilm/AddNewFilm";

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
    path: "/searchMovie",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Home />,
  },
];
