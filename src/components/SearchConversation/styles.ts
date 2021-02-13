import styled from "styled-components";
import { MessageAdd } from "@styled-icons/boxicons-solid/MessageAdd";

export const Container = styled.div`
  padding: 8px;
  grid-area: SC;
  align-items: center;
  display: flex;
  background-color: var(--FLBackground);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
  > strong {
    color: var(--white);
  }
  .mobile {
    display: none;
  }

  /* @media all and (max-width: 1024px) {
    grid-area: H;
    flex-direction: column;

    align-items: center;
    padding: 10px;
    > strong {
      color: var(--white);
    }
    .mobile {
      display: flex;
    }
  } */
`;
export const DirectContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  > strong {
    color: var(--white);
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
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

export const MessageIcon = styled(MessageAdd)`
  width: 28px;
  height: 28px;
  color: var(--symbol);
`;
