import styled from "styled-components";
import { AlternateEmail } from "styled-icons/material";
export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--addFriendBackground);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column-reverse;

  max-height: calc(100vh-120px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--SLBackground);
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  padding: 0 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 57px;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--chatInput);

  position: relative;

  &::placeholder {
    color: var(--FLBackground);
  }
  ~ svg {
    position: relative;
    top: -62%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--FLBackground);
`;
