import styled from "styled-components";
import { People } from "styled-icons/evaicons-solid/";
import { Speed } from "styled-icons/material/";
import { Add } from "styled-icons/material";
export const Container = styled.div`
  grid-area: DM;
  background-color: var(--FLBackground);
  align-items: center;
  padding: 5px;
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

export const FriendsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  align-items: center;
  background-color: transparent;
  /* padding: 10px; */
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  > span {
    color: var(--white);
  }
  transition: border-radius 0.5s, background-color 0.5s;
  &:hover,
  &:active {
    background-color: var(--hightlight);
  }
`;
export const FriendsIcon = styled(People)`
  width: 24px;
  height: 24px;
  margin-left: 5px;
  margin-right: 8px;
  color: var(--symbol);
`;
export const NitroWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  align-items: center;
  background-color: transparent;
  /* padding: 10px; */
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  > span {
    color: var(--white);
  }
  transition: border-radius 0.5s, background-color 0.5s;
  &:hover,
  &:active {
    background-color: var(--hightlight);
  }
`;
export const NitroIcon = styled(Speed)`
  width: 24px;
  height: 24px;
  margin-left: 5px;
  margin-right: 8px;
  color: var(--symbol);
`;

export const Separator = styled.div`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;

  > span {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    color: var(--serverButtonBackground);
  }

  &:hover,
  &.active {
    > span {
      color: var(--white);
      cursor: default;
    }
  }
`;

export const AddIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;

  &:hover,
  &.active {
    color: var(--white);
  }
`;
export const DMContainer = styled.div``;
