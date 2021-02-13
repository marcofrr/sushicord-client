import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { Bell } from "styled-icons/open-iconic/";
import { Pushpin } from "styled-icons/remix-fill/";
import { PersonFill } from "styled-icons/bootstrap/";
import { Inbox } from "styled-icons/boxicons-solid/";
import { HelpCircle } from "styled-icons/boxicons-solid/";

export const Container = styled.div`
    grid-area: CI;
    display: flex;
    align-items: center;
    padding: 0 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
    background-color: var(--loginBackground);
      
`;
export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;
    color: var(--symbol);
`;
export const Title = styled.h1`
    margin-left: 7px;
    font-size: 16px;
    color: var(--white);
`;
export const Separator = styled.div`
    height: 24px;
    width: 1px;
    background-color: var(--white);
    opacity: 0.2;
    margin: 0 13px;

`;
export const Description = styled.span`
    font-size: 15px;
    color: var(--white)
`;

export const BellIcon = styled(Bell)`
    width: 21px;
    margin-right: 10px;
    height: 21px;
    color: var(--symbol);
    margin-left: auto;

    transition: border-radius .5s, background-color .5s;
    &.active,&:hover{
        color: var(--symbolHover);
        cursor: pointer;
    } 

`;

export const PinIcon = styled(Pushpin)`
    width: 24px;
    height: 24px;
    margin-right: 10px;    
    color: var(--symbol);
    
    transition: border-radius .5s, background-color .5s;
    &.active,&:hover{
        color: var(--symbolHover);
        cursor: pointer;
    } 
    
`;

export const MembersIcon = styled(PersonFill)`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: var(--symbol);

    transition: border-radius .5s, background-color .5s;
    &.active,&:hover{
        color: var(--symbolHover);
        cursor: pointer;
    } 
`;

export const InboxIcon = styled(Inbox)`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: var(--symbol);

    transition: border-radius .5s, background-color .5s;
    &.active,&:hover{
        color: var(--symbolHover);
        cursor: pointer;
    } 
`;

export const HelpIcon = styled(HelpCircle)`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    color: var(--symbol);

    transition: border-radius .5s, background-color .5s;
    &.active,&:hover{
        color: var(--symbolHover);
        cursor: pointer;
    } 
`;
