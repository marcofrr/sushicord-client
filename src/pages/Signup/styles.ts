import styled from "styled-components";

// H - Header
// B - Background
// F - Footer

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 54px 650px 1fr;
  grid-template-areas:
    "H H H H"
    ". SF SF ."
    "F F F F";
  height: 100vh;
  background-color: var(--FLBackground);
  grid-template-columns: minmax(0, auto) 1fr 1fr;

  @media (min-width: 600px) {
    grid-template-columns: auto 270px 270px auto;
  }
`;
