import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.6s;
  height: 100%;
  background-color: var(--FLBackground);

  > strong {
    font-size: 40px;
  }

  > h1 {
    font-size: 30px;
    display: inline-block;
    padding-right: 6px;
    animation: type 0.5s alternate infinite;
  }
  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px black;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;

export const Button = styled.button`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  width: 100px;
  height: 52px;
  cursor: pointer;
  padding: 0px 10px;
  background-color: var(--discBlue);
  color: var(--white);
  border-radius: 3px;
`;
