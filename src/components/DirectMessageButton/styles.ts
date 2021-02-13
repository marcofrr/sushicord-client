import styled from "styled-components";
import { Props } from "./";
import { Close } from "@styled-icons/evaicons-solid/";
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
  display: flex;
  align-items: center;
  padding: 5px;
  padding-right: 10px;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  > strong {
    margin-left: 8px;
    color: grey;
  }
  .text {
    width: 150px;
  }
  &:hover {
    .close {
      display: flex;
    }
    background-color: var(--ChannelInfoHover);
  }
  .scroll {
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
export const User = styled.div``;

export const CloseIcon = styled(Close)`
  display: none;
  width: 24px;
  height: 24px;
  color: grey;

  &:hover {
    color: var(--white);
  }
`;
