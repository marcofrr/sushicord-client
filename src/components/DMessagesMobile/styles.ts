import styled from "styled-components";
import { MessageAdd } from "@styled-icons/boxicons-solid/MessageAdd";
export const Container = styled.div`
  grid-area: H;
  display: none;
  flex-direction: column;

  align-items: center;
  padding: 10px;
  > strong {
    color: var(--white);
  }
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
  height: 30px;
  border-radius: 4px;
  color: var(--white);
  background-color: var(--SLBackground);
  text-indent: 10px;
  &::placeholder {
    color: var(--symbol);
  }
`;
export const MessageIcon = styled(MessageAdd)`
  width: 28px;
  height: 28px;
  color: var(--symbol);
`;

export const DMContainer = styled.div`
  display: none;
  grid-area: C;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  > strong {
    color: var(--white);
  }
`;
export const DirectMessage = styled.div`
  display: flex;
  background-color: var(--serverButtonBackground);
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  > h1 {
    color: var(--white);
    font-size: 10px;
    margin-left: 10px;
    font-weight: 700;
  }
`;
export const Avatar = styled.div`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  background-color: var(--white);
  border-radius: 50%;
`;
