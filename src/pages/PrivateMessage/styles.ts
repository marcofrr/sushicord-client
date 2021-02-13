import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px 1fr;
  grid-template-rows: 48px auto 52px;
  grid-template-areas:
    "SL SC TT TT"
    "SL DM C C"
    "SL UI IT IT";
  height: 100vh;
`;
