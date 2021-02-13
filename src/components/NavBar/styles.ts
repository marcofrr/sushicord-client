import styled from "styled-components";
import { Discord } from "@styled-icons/boxicons-logos/Discord";
import { People } from "@styled-icons/material/People";
import { Search, At } from "@styled-icons/boxicons-regular";
export const Container = styled.div`
  grid-area: NB;
  display: none;
  align-items: center;
  padding: 10px;
  background-color: black; /* For browsers that do not support gradients */
  /* background-image: linear-gradient(to top, #2f3136, grey); */

  justify-content: space-evenly;

  .icon {
    cursor: pointer;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  }
  > a {
    cursor: pointer;
  }
  .active {
    > svg {
      color: var(--white);
    }
  }
`;

// export const IconContainer = styled.div`
//   cursor: pointer;
//   transition: opacity 200ms ease-in-out;

//   &:hover {
//     opacity: 0.6;
//   }
// `;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
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
  color: black;
  background-color: transparent;
  border-radius: 5%;

  &:hover {
    background-color: var(--btnHover);
    color: var(--white);
  }
`;

export const DiscordIcon = styled(Discord)`
  width: 30px;
  height: 30px;
  color: var(--symbol);
  pointer-events: none;
`;

export const PeopleIcon = styled(People)`
  width: 30px;
  height: 30px;
  color: var(--symbol);
  pointer-events: none;
`;

export const SearchIcon = styled(Search)`
  width: 28px;
  height: 28px;
  color: var(--symbol);
  pointer-events: none;
`;
export const AtIcon = styled(At)`
  width: 28px;
  height: 28px;
  color: var(--symbol);
  pointer-events: none;
`;
