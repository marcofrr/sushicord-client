import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  margin-left: -50px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Window = styled.div`
  position: absolute;
  margin-left: 10px;
  padding: 8px;
  /* align-items: flex-start;
  display: flex;
  flex-direction: column; */
  z-index: 100;
  top: 40%;
  left: 40%;
  margin-top: -50px;
  margin-left: -50px;
  width: 30vw;
  height: 30vh;
  border: 2px solid black;
  background-color: var(--loginBackground);

  box-shadow: 5px 10px;
  > strong {
    color: var(--white);
    padding: 6px;
    display: flex;
  }
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    padding: 6px;
    display: flex;
  }
  > p {
    color: var(--white);
    padding: 6px;
    display: flex;
  }
`;

export const FormContainer = styled.div`
  width: 440px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  margin-left: 6px;
`;

export const Input = styled.input`
  margin: 0px;
  padding: 0px;
  width: 100%;
  outline: none;
  height: 30px;
  border-radius: 5px;

  &::placeholder {
    color: var(--symbol);
  }
  /* ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    } */
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  border-radius: 5px;
  right: 0px;
  z-index: 2;
  border: none;
  height: 30px;
  width: 150px;
  cursor: pointer;
  color: white;
  background-color: #1e90ff;
  transform: translateX(2px);
`;
