import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "@reach/router";
import Header from "../components/elements/Header";
import Home from "./Home";
import Movie from "../components/Movie";
import NotFound from "../components/NotFound";
import Animation from "./Animation"

const App = () => (
  <>
    <Header></Header>
    <Animation></Animation>
    <Router>
      <Home path="/" />
      <Movie path="/:movieId"></Movie>
      <NotFound default></NotFound>
    </Router>
    <GlobalStyle></GlobalStyle>
  </>
);

export default App;
