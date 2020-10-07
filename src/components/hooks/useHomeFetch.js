import { useState, useEffect, useRef } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = ({ searchTerm }) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const currentPageRef = useRef(0);
  const totalPagesRef = useRef(500);
  const loadingRef = useRef(loading);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);
    loadingRef.current = true;

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      currentPageRef.current = result.page;
      totalPagesRef.current = result.total_pages;
      currentPageRef.current = result.page;
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],

        heroImage:
          prev.heroImage || result.results[Math.floor(Math.random() * 20)],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
    loadingRef.current = false;
  };

  useEffect(() => {
    // if (sessionStorage.homeState) {
    //   setState(JSON.parse(sessionStorage.homeState));
    //   setLoading(false);
    // } else {
    //   fetchMovies(POPULAR_BASE_URL);
    // }
    fetchMovies(POPULAR_BASE_URL);
  }, []);

  // THIS IS FOR SESSION STORAGE ,
  // useEffect(() => {
  //   if (!searchTerm) {
  //     // console.log("Writing to sessionStorage");
  //     sessionStorage.setItem("homeState", JSON.stringify(state));
  //   }
  // }, [searchTerm, state]);

  return [{ state, loading, error, currentPageRef, totalPagesRef, loadingRef }, fetchMovies];
};
