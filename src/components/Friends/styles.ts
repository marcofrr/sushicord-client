import styled from "styled-components";
import { Props } from "./";
import { ChatDotsFill, ChatFill } from "@styled-icons/bootstrap";

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

export const FriendContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  height: 50px;

  /* @media all and (max-width: 1024px) {
    display: grid;
    grid-area: C;
    flex-direction: column;
  } */
  cursor: pointer;
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    > strong {
      margin-left: 13px;
      color: grey;
    }
  }
  &:hover {
    background-color: var(--friendRequestHover);
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 4px;
  flex-direction: column;
  transition: background 0.4s;
  border-radius: 4px;
  transition: opacity 1s;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  > div {
    display: flex;
    /* align-items: center; */
    color: var(--white);

    > strong {
      margin-left: 13px;
      font-weight: 600;
      color: var(--white);
      opacity: 0.7;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
export const Avatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  background-color: var(--white);
  border-radius: 50%;
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
export const IconContainer = styled.div`
  align-items: center;
`;
export const MessageIcon = styled(ChatFill)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--symbol);

  transition: border-radius 0.5s, background-color 0.5s;
  &.active,
  &:hover {
    color: var(--symbolHover);
    cursor: pointer;
  }
`;
export const MoreIcon = styled(ChatDotsFill)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--symbol);

  transition: border-radius 0.5s, background-color 0.5s;
  &.active,
  &:hover {
    color: var(--symbolHover);
    cursor: pointer;
  }
`;

export const WumpusContainer = styled.div`
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: var(--fontGrey);
  }
`;

export const Wumpus = styled.div`
  margin-bottom: 15px;
  height: 220px;
  width: 420px;
  cursor: default;
  background-image: url("/assets/wumpusOnlineFriends.svg");
`;

export const Wrapper = styled.div`
  grid-area: C;
  background-color: var(--loginBackground);
  overflow-y: scroll;
  z-index: 2;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--SLBackground);
  }
`;
