import styled from "styled-components";
import { CheckCircle, XCircle } from "styled-icons/bootstrap/";
import {Props} from './'
const handleColorStatus = (status: string) => {
  switch (status) {
    case "online":
      return "#43B581";
    case "offline":
      return "#f21505";

    default:
      return "#36393F";
  }
};

export const Container = styled.div`
  grid-area: C;
  display: flex;
  padding: 4px;
  flex-direction: column;
  max-height: calc(100vh- 46px);
  transition: background 0.4s;
  border-radius: 4px;
  transition: opacity 1s;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Request = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  justify-content: space-between;

  > strong {
    margin-left: 13px;
    font-weight: 600;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
  }

  > span {
    margin-left: 9px;
    background-color: var(--loginBackground);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
  &:hover {
    opacity: 1;
    background: var(--friendRequestHover);
  }
`;

export const Avatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  background-color: var(--white);
  border-radius: 50%;
  z-index: 10;
`;
export const Status = styled.div<Props>`
  position: absolute;
  left: 23px;
  top: 23px;
  border: 2px solid var(--loginBackground);

  width: 14px;
  height: 14px;
  background-color: ${(props) => handleColorStatus(props.status)};
  border-radius: 50%;
`;
export const UserContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 13px;
  font-weight: 600;
  color: var(--white);
  opacity: 0.7;
  white-space: nowrap;
`;

export const AcceptIcon = styled(CheckCircle)`
  width: 40px;
  height: 40px;
  color: var(--symbol);
  margin-left: 200px;
  opacity: 0.3;
  cursor: pointer;

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.9;
    color: var(--discordGreen);
  }
`;

export const DeclineIcon = styled(XCircle)`
  width: 40px;
  height: 40px;
  color: var(--symbol);
  margin-left: 10px;
  opacity: 0.3;
  cursor: pointer;

  transition: opacity 0.5s;

  &:hover {
    opacity: 0.9;
    color: var(--red);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
`;
