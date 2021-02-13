import styled from "styled-components";
import { Add } from "styled-icons/material";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";
export const Container = styled.div`
  grid-area: CL;
  display: flex;
  flex-direction: column;
  padding: 25px 10px 0 16px;
  background-color: var(--FLBackground);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Category = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  justify-content: space-between;
  > span {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    color: var(--serverButtonBackground);
  }
`;
export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;
  /* &:hover,
  &.active, */
  > div {
    justify-content: space-between;
  }

  &:focus {
    background-color: var(--hightlight);
    > div span {
      color: var(--white);
    }
  }
`;

export const NameWrapper = styled.div`
  display: flex;

  margin-bottom: 4px;
  align-items: center;
  justify-content: space-between;

  align-items: center;
  white-space: nowrap;
  width: 140px;

  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  display: inline-block;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;

  transition: color 0.5s;

  &:hover {
    color: var(--white);
  }
`;
export const SettingsIcon = styled(Settings)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;
  margin-left: 5px;
  transition: color 0.5s;

  &:hover {
    color: var(--white);
  }
`;
