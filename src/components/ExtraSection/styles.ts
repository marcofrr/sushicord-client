import styled from "styled-components";

export const Container = styled.div`
  grid-area: C;
  background-color: var(--loginBackground);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
