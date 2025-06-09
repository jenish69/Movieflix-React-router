import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { Home } from "./pages/Home";
import { AppLayout } from "./component/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetMovieData";
import { MovieCard } from "./component/UI/MovieCard";
import { getMovieDetail } from "./api/GetMovieDetail";
import { useState } from "react";

const App = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/movie",
            element: <Movie />,
            loader: getMovieData,
          },
          {
            path: "/movie/:movieID",
            element: <MovieCard />,
            loader: getMovieDetail,
          },
          {
            path: "/contact",
            element: <Contact />,
            action: contactData,
          }
        ]
      },
    
    ]);
    const [movieName, setMovieName] = useState("stranger things");

    return (
      <RouterProvider router={router} />
    );
};

export default App;