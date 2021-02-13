import styled from "styled-components";

// SL - Server List
// SC - Seach Conversation
// DM - Direct Messages
// C -  Content
// TT - Top Tab
// AC - Active Now
// UI - User Info
export const Container = styled.div`
  //layout main screen desktop
  .layoutMain {
    display: grid;
    grid-template-columns: 71px 240px auto 440px;
    grid-template-rows: 48px auto 52px;
    grid-template-areas:
      "SL SC TT TT"
      "SL DM C AN"
      "SL UI C AN";

    //layout main screen mobile
    @media all and (max-width: 1230px) {
      grid-template-columns: 71px 240px auto 440px;
      grid-template-rows: 48px auto 52px;
      grid-template-areas:
        "SL SC TT TT"
        "SL DM C C"
        "SL UI C C";
    }
  }
  .layoutPrivate {
    display: grid;
    grid-template-columns: 71px 240px auto 440px;
    grid-template-rows: 48px auto 52px;
    grid-template-areas:
      "SL SC TT TT"
      "SL DM C C"
      "SL UI IT IT";
  }
  /* .layoutMobileFriends {
    //layout main screen mobile
    @media all and (max-width: 1024px) {
      grid-template-columns: 71px 1fr;
      grid-template-rows: 96px 1fr 52px;
      grid-template-areas:
        "SL FH FH FH"
        "SL FL FL FL"
        "NB NB NB NB";
    }
  } */
`;

export const Grid = styled.div`
  height: 100vh;

  /* @media all and (max-width: 1024px) {
    display: grid;
    /* grid-template-columns: 71px 1fr;
    grid-template-rows: 96px 1fr 52px;
    grid-template-areas:
      "SL DM DM DM"
      "SL FL FL FL"
      "NB NB NB NB"; */

  /* .directMessagesList {
      display: none;
    }
    .searchConversation {
      display: none;
    }
    .userInfo {
      display: none;
    }
    .friendsTab {
      display: none;
    } */
  /* .dMessagesMobile {
      display: flex;
    } */
  /* .navBar {
      display: flex;
    } */
  //}
`;
