import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";
export const Container = styled.div`
  grid-area: SN;
  background-color: var(--FLBackground);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px 0 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  transition: border-radius 0.5s, background-color 0.5s;
  &.active,
  &:hover {
    background-color: var(--ChannelInfoHover);
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--white);
`;
export const ExpandIcon = styled(ExpandMore)`
  width: 30px;
  height: 30px;
  color: var(--white);

  cursor: pointer;
`;
