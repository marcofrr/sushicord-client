import styled from "styled-components";

export const Container = styled.div`
  grid-area: AN;
  margin-left: 3px;
  background-color: var(--FLBackground);
  padding: 16px;

  > strong {
    font-size: 12px;
    color: var(--white);
    text-transform: uppercase;
  }
  > p {
    color: var(--white);
    padding: 6px;
  }

  .firstSection {
    background-color: var(--SLBackground);
    > div {
      background-color: var(--SLBackground);
    }
  }

  .secondSection {
    background-color: var(--loginBackground);
    margin-top: 8px;
    > div {
      background-color: var(--loginBackground);
    }
  }
  @media all and (max-width: 1230px) {
    display: none;
  }
`;

export const Section = styled.div`
  border-radius: 3px;
  padding: 16px;
  margin-bottom: 10px;
  > h4 {
    white-space: nowrap;
    text-align: center;
    margin: auto;
    width: 50%;
    color: white;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
  }
  .primaryBtn {
    margin-bottom: 8px;
    background-color: var(--homeIconBackground);
    &:hover {
      background-color: var(--ActiveNowBtnHover);
    }
  }
  .secondaryBtn {
    background-color: transparent;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TextContainer = styled.div`
  background-color: var(--SLBackground);
  margin-top: 8px;
  color: white;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  > a {
    cursor: pointer;
    color: var(--textLink);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  height: 32px;
  cursor: pointer;
  padding: 0px 10px;
  color: var(--white);
  border-radius: 3px;
`;
