import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body, #root{
        height: 100%;

    }

    .App{
        height: 100vh;
    }

    *, button, input{
        border: 0;
        outline: 0;

        font-family: sans-serif;
    }

    :root {
        --loginBackground: #36393F;
        --loginInput: #303339;
        --discBlue: #677BC4;
        --SLBackground: #202225;
        --discordGreen: #43B581;
        --homeIconBackground: #7289DA;
        --serverButtonBackground: #646360;
        --FLBackground: #2F3136;
        --addFriendBackground: #36393F;
        --white: #FFFFFF;
        --notification: #E04F43;
        --ChannelInfoHover: #34373C;
        --symbol: #72767D;
        --symbolHover: #DCDDDE;
        --userInfoBackground: #292B2F;
        --chatInput: #40444B;
        --hightlight: #393C43;
        --btnHover: #3E4249;
        --green: #43B581;
        --red: #f21505;
        --friendRequestHover: #3A3E44;
        --greyFont: #8E9297;
        --inputText: #b9bbbe;
        --inputFocus: #7289DA;
        --textLink: #00b0f4;
        --ActiveNowBtnHover: #677BC4;
        --fontGrey: #72767d;
        --fontLightGrey: #ABADB0;
        --addFriendBtnActive: #38524C;
        --fontgreen: #43B581;
        --disableBlue: #515E89;
        --background-secondary: #2F3136;
    }

`;
