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
    margin-left: 4px;
    color: grey;
  }
  .text {
    width: 160px;
  }
  &:hover {
    .close {
      display: flex;
    }
    .notifications{
      display: none;
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
  width: 34px;
  height: 34px;
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

export const Notications = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: var(--SLBackground);
  border-radius: 50%;
  width: 30px;
  height: 28px;
  font-size: 12px;
`;