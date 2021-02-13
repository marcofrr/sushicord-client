import styled from "styled-components";

export const Container = styled.div`
  grid-area: H;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: grey; /* For browsers that do not support gradients */
  background-image: linear-gradient(to top, #2f3136, grey);

  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  transition: opacity 200ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  width: fit-content;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0px 10px;
  color: black;
  background-color: transparent;
  border-radius: 5%;

  &:hover,
  &:active {
    background-color: var(--btnHover);
    color: var(--white);
  }
`;
