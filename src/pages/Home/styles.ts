import styled from "styled-components";

// H - H
// B - Background
// F - Footer

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 54px 1fr auto;
  grid-template-areas:
    "H H H H"
    ". . . ."
    "F F F F";
  height: 100vh;
  background-color: var(--FLBackground);
  grid-template-columns: 100%;

  @media (min-width: 600px) {
    grid-template-columns: auto 270px 270px auto;
  }
`;
