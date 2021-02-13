import styled from "styled-components";
export const Container = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 440px;
  grid-template-rows: 48px auto 52px;
  grid-template-areas:
    "SL SC FT FT"
    "SL FL OL EC"
    "SL UI OL EC";
  height: 100vh;
  width: 100vw;
`;
