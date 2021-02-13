import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;

    padding: 11px 0;
    max-height: 100vh;

    overflow-y: scroll;
    background-color: var(--SLBackground);

    ::-webkit-scrollbar {
        display: none;
    }

`;

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid grey;
    margin-bottom: 8px;
`;
