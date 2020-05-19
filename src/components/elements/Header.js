import React from "react";
import { Link } from "@reach/router";
import RMDBLogo from "../images/multimedia.svg";
import TMDBLogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmbs-logo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmbd-logo" />
    </div>
  </StyledHeader>
);

export default Header;
