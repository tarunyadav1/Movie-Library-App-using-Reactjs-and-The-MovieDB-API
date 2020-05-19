import styled from "styled-components";

export const StyledHeader = styled.div`
  background: rgb(205, 22, 22);
  background: linear-gradient(
    180deg,
    rgba(205, 22, 22, 1) 0%,
    rgba(175, 44, 40, 1) 20%,
    rgba(148, 48, 44, 1) 40%,
    rgba(124, 46, 41, 1) 60%,
    rgba(64, 31, 31, 1) 81%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 100px;
  height: 70px;

  margin-top: 0px;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 30px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  height: 40px;

  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    height: 30px;
    margin-top: 0px;
  }
`;
