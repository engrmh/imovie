import Home from "./Pages/Home/Home";
import MovieBucket from "./Pages/MovieBucket/MovieBucket";
import MoviePage from "./Pages/MoviePage/MoviePage";

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
    path: "/currentMovie/:id",
    element: <MoviePage />,
  },
  {
    path: "/newMovie",
    element: <Home />,
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
