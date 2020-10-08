import React, { useState, useEffect, useRef } from "react";
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../config";

// import componets
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";

//custom hooks
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermRef = useRef(searchTerm);
  const [
    {
      state: { movies, heroImage },
      loading,
      error,
      currentPageRef,
      loadingRef,
      totalPagesRef,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const useMountEffect = (func) => useEffect(func, []);

  useMountEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  });

  const handleWindowScroll = () => {
    const endOfPage =
      Math.round(window.innerHeight + document.documentElement.scrollTop) ===
      Math.round(document.scrollingElement.scrollHeight);

    if (
      endOfPage &&
      currentPageRef.current < totalPagesRef.current &&
      !loadingRef.current
    ) {
      loadMoreMovies();
    }
  };

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    searchTermRef.current = search;
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTermRef.current}&page=${currentPageRef.current + 1
      }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPageRef.current + 1
      }`;

    const endpoint = searchTermRef.current ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error)
    return (
      <div
        style={{
          color: "red",
          fontSize: 35,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {" "}
        NETWORK ERROR, Please try after some time 😥
      </div>
    );

  if (!movies[0]) return <Spinner />;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        ></HeroImage>
      )}
      <SearchBar callback={searchMovies}></SearchBar>
      <Grid header={searchTerm ? "Search Result" : "Popular Movies "}>
        {movies.map((movie) => (
          <MovieThumb
            title={movie.title}
            rating={movie.vote_average}
            count={movie.vote_count}
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
    </>
  );
};

export default Home;
