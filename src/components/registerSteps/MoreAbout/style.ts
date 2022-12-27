import styled from "styled-components";

export const MoreAboutDiv = styled.div`

box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 864px;
    height: 636px;
    padding: 48px 71px 0 51px;

    background-color: white;
    box-shadow: 0.3px 0.3px 8px #ddd, -0.3px -0.3px 8px #ddd;

    h1{
        font-size: 36px;
        font-weight: 500;
        line-height: 48px;
    }

    .overview{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;

        margin-top: 40px;
        margin-bottom: 40px;
    }

    .overview div {
        display: flex;

        height: 44px;
        width: 44px;
        border-radius: 50%;

        background-color: var(--grey-0);
    }

    .overview div svg{
        height: 19px;
        width: 19px;
        margin: auto;

        color: var(--color-primary);
    }

    .overview p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    .overview .personSVG svg{
        color: #00AE63;
    }

    .overview .homeSVG svg{
        color: #00AE63;
    }

    form {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 22px;
    }
    
    form .inputDiv{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    form .inputDiv textarea {
        height: 201px;
        background-color: var(--grey-0);
        border-radius: 4px;
        padding: 10px;
        text-align: start;

        font-size: 16px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
    }

    form .inputDiv label {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    form .inputDiv p {
        position: absolute;
        bottom: -16px;
        left: 5px;
        color: #ff2222;
        font-size: 14px;
        font-weight: 500;
    }

    .nextButton{
        position: absolute;
        bottom: -130px;
        right: -40px;

        width: 192px;
        height: 46px;
        border-radius: 4px;

        background-color: var(--color-primary);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: white;
    }

    .returnButton{
        position: absolute;
        bottom: -130px;
        right: 172px;

        width: 192px;
        height: 46px;
        border-radius: 4px;

        background-color: #8C98A9;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: white;
    }

    button:hover{
        cursor: pointer;
    }
`