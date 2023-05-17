import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieBucket from "./Components/MovieBucket/MovieBucket";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviePage from "./Components/MoviePage/MoviePage";

export default function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" exact element={<MovieBucket />} />
              <Route path="MoviePage" exact element={<MoviePage />} />
          </Routes>
      </BrowserRouter>
  );
}
