import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    :hover {
      opacity: 0.9;
    }

    &:hover {
      transform: scale(1.03);
      ::after {
        transform: scaleY(1);
        opacity: 1;
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.8rem;
      transform: scaleY(0);
      transform-origin: top;
      opacity: 0;
      background-color: var(--color-primary);
      z-index: -99;
      box-shadow: 0rem 2rem 5rem var(--shadow-color-dark);
      transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;
