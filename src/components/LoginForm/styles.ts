import styled from "styled-components";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const Container = styled.div`
  display: flex;
  grid-area: LF;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
  background-color: transparent;

  border-radius: 10px;
  padding: 32px;
  > strong {
    color: var(--white);
    padding: 20px;
    display: flex;
    font-size: 20px;
    @media (min-width: 600px) {
      font-size: 30px;
    }
  }
  & .field {
    margin: 0 0 20px;
    width: 100%;
  }

  & .drop {
    text-align: center;
    padding: 20px;
    border: 3px dashed #eeeeee;
    background-color: #fafafa;
    color: #bdbdbd;
  }
  @media (min-width: 600px) {
    background-color: var(--loginBackground);
    box-shadow: 0 0 0.5em black;
    /* font-size: 30px; */
  }
`;
export const FormContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 10px;
  border-radius: 4px;
  color: var(--inputText);
  background-color: var(--loginInput);
  border: 1px solid black;
  font-size: 20px;
  transition: border 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid var(--inputFocus);
  }
`;

export const Label = styled.label`
  color: var(--greyFont);
  font-weight: 700;
  display: inline-block;
  margin-bottom: 8px;
  font-size: 18px;
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
  background-color: var(--loginInput);
  /* background-color: transparent; */
  border-radius: 5%;
  color: var(--greyFont);

  &:hover,
  &:active {
    color: var(--inputText);
    color: var(--inputText);
  }
`;
export const DropContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: var(--loginInput);
  height: 44px;
  border: 2px dashed black;
`;

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  width: fit-content;
  height: 35px;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 30px;
  padding: 0px 10px;
  color: var(--inputText);
  background-color: var(--inputFocus);
  border-radius: 5%;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
