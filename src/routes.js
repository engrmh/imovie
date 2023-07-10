import Home from "./Pages/Home/Home";
import MovieBucket from "./Pages/MovieBucket/MovieBucket";

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
    element: <Home />,
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
