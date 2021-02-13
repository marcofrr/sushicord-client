import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  padding: 8px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  > strong {
    color: var(--white);
    padding: 6px;
    display: flex;
  }
  > p {
    color: var(--fontGrey);
    padding: 6px;
    display: flex;
  }

  .btnEnabled {
    background-color:var(--discBlue);
    color: var(--white);
    cursor: pointer;
  }

  .btnDisabled {
    background-color: var(--disableBlue);
    color: var(--fontLightGrey);
    cursor: not-allowed;

  }
`;

export const FormContainer = styled.div`
  width: 100%;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  padding: 6px;
`;




export const Input = styled.input`
  margin: 0px;
  width: 100%;
  outline: none;
  height: 52px;
  border-radius: 3px;
  text-indent: 10px;
  background-color:var(--loginInput);
  &::placeholder {
    color: var(--symbol);
  }
  color:var(--white);
  font-weight: 700;
  /* ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    } */
`;
export const Button = styled.button`
  position: absolute;
  top: 18px;
  border-radius: 3px;
  right: 20px;
  border: none;
  height: 30px;
  width: 150px;
  background-color: #1e90ff;
  transform: translateX(2px);
`;
