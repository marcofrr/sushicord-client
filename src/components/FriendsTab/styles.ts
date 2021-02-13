import styled from "styled-components";
import { People } from "styled-icons/evaicons-solid/";
import { MessageAdd } from "@styled-icons/boxicons-solid/";
import { Inbox } from "styled-icons/boxicons-solid/";
import { HelpCircle } from "styled-icons/boxicons-solid/";

export const Container = styled.div`
  grid-area: TT;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--loginBackground);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 0px 0px;
  z-index: 10;

  .btnActive {
    background-color: var(--btnHover);
    color: var(--white);
    &:hover {
      cursor: default;
    }
  }

  .btnActiveAdd {
    background-color: var(--addFriendBtnActive);
    color: var(--fontgreen);
    &:hover {
      cursor: default;
    }
  }

  @media all and (max-width: 1024px) {
    .rightIcons {
      display: none;
    }
  }
`;
export const LeftIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  > strong {
    color: var(--white);
  }
`;
export const FriendsIcon = styled(People)`
  width: 22px;
  height: 22px;
  margin-left: 20px;
  margin-right: 8px;
  color: var(--symbol);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.1;
  margin: 0 13px;
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
  color: var(--symbol);
  background-color: transparent;
  border-radius: 5%;
  max-width: 100%;

  &:hover {
    cursor: pointer;
    background-color: var(--btnHover);
    color: var(--white);
  }
`;

export const AddFriendBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  width: fit-content;
  height: 24px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0px 10px;
  color: var(--white);
  background-color: var(--green);
  border-radius: 5px;
`;

export const RightIconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageAddIcon = styled(MessageAdd)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--symbol);

  transition: border-radius 0.5s, background-color 0.5s;
  &:hover {
    color: var(--symbolHover);
    cursor: pointer;
  }
`;

export const InboxIcon = styled(Inbox)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--symbol);

  transition: border-radius 0.5s, background-color 0.5s;
  &:hover {
    color: var(--symbolHover);
    cursor: pointer;
  }
`;

export const HelpIcon = styled(HelpCircle)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: var(--symbol);

  transition: border-radius 0.5s, background-color 0.5s;
  &:hover {
    color: var(--symbolHover);
    cursor: pointer;
  }
`;
