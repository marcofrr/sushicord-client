import styled from "styled-components";
import { Props } from "./index";
import { At } from "@styled-icons/boxicons-regular/";
import { PhoneCall } from "@styled-icons/boxicons-solid/";
import { Video } from "@styled-icons/boxicons-solid/";
import { Pushpin } from "@styled-icons/icomoon/";
import { PersonAdd } from "@styled-icons/evaicons-solid/";
import { Search } from "@styled-icons/evil/";
import { Delete } from "@styled-icons/typicons";
import { Inbox } from "@styled-icons/boxicons-solid/";
import { HelpWithCircle } from "@styled-icons/entypo/";
import { AlternateEmail } from "styled-icons/material";

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
  margin-left: 10px;
  padding: 8px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: TT;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 0px 0px;
  z-index: 10;
`;
export const AtIcon = styled(At)`
  width: 24px;
  height: 24px;
  color: grey;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  /* position: relative; */
  > h3 {
    white-space: nowrap;
    max-width: 140px;

    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: var(--white);
    margin-left: 8px;
  }
  > h4 {
    font-size: 14px;
    color: var(--white);
    margin-left: 8px;
    white-space: nowrap;
    max-width: 140px;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const Status = styled.div<Props>`
  /* position: absolute; */
  left: 187px;
  top: 4px;
  border: 2px solid var(--loginBackground);
  margin-left: 8px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => handleColorStatus(props.status)};
  border-radius: 50%;
`;
export const Separator = styled.div`
  width: 1px;
  height: 24px;
  border-left: 1px solid grey;
  margin-left: 8px;
  opacity: 0.5;
`;

export const AkaBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 35px;
  margin-left: 8px;
  background-color: var(--background-secondary);
  color: grey;
  border-radius: 6px;
  font-size: 13px;
`;

export const IconWrapper = styled.div`
  margin: 0 8px;
`;

export const CallIcon = styled(PhoneCall)`
  width: 24px;
  height: 24px;
  color: var(--inputText);
  cursor: pointer;

  &:hover {
    color: var(--symbolHover);
  }
`;

export const VideoIcon = styled(Video)`
  width: 24px;
  height: 24px;
  color: var(--inputText);
  cursor: pointer;
  &:hover {
    color: var(--symbolHover);
  }
`;

export const PersonAddIcon = styled(PersonAdd)`
  width: 24px;
  height: 24px;
  color: var(--inputText);
  cursor: pointer;
  &:hover {
    color: var(--symbolHover);
  }
`;

export const PushpinIcon = styled(Pushpin)`
  width: 24px;
  height: 20px;
  color: var(--inputText);
  cursor: pointer;
  &:hover {
    color: var(--symbolHover);
  }
`;

export const SearchChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 8px 0 8px;
`;

export const SearchInput = styled.input`
  width: 144px;
  height: 24px;
  padding: 0 10px 0 10px;
  border-radius: 6px;
  color: var(--white);
  background-color: var(--SLBackground);

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
export const SearchIcon = styled(Search)`
  position: absolute;
  width: 20px;
  height: 20px;
  color: grey;
  top: 2px;
  left: 122px;
  cursor: text;
`;

export const CrossIcon = styled(Delete)`
  position: absolute;
  width: 20px;
  height: 20px;
  color: grey;
  top: 2px;
  left: 122px;
  cursor: pointer;
`;

export const InboxIcon = styled(Inbox)`
  width: 24px;
  height: 24px;
  color: var(--inputText);
  cursor: pointer;
  &:hover {
    color: var(--symbolHover);
  }
`;

export const HelpIcon = styled(HelpWithCircle)`
  width: 24px;
  height: 22px;
  color: var(--inputText);
  cursor: pointer;
  &:hover {
    color: var(--symbolHover);
  }
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div``;

export const InputWrapper = styled.div`
  grid-area: IT;
  width: 100%;
  padding: 0 16px;
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 10px 0 47px;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--chatInput);

  position: relative;

  &::placeholder {
    color: var(--FLBackground);
  }
  ~ svg {
    position: relative;
    bottom: 32px;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;
export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--FLBackground);
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
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
