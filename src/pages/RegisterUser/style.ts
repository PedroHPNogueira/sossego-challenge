import styled from "styled-components";

export const RegisterMain = styled.main`

    .background{
        position: relative;
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .background .sossegoDiv {
        display: flex;
        width: 52%;
        background-color: var(--color-primary);
    }

    .background .sossegoDiv > img {
        width: 70%;
        opacity: 0.8;

        margin: auto;
    }

    .step1{
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
    }

    .step1 h1{
        font-size: 36px;
        font-weight: 500;
        line-height: 48px;
    }

    .step1 .steps{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;

        margin-top: 40px;
        margin-bottom: 40px;
    }

    .step1 .steps div {
        display: flex;

        height: 44px;
        width: 44px;
        border-radius: 50%;
        background-color: var(--grey-0);
    }

    .step1 .steps div svg{
        height: 19px;
        width: 19px;
        color: var(--grey-1);
        margin: auto;
    }

    .step1 .steps p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }

    .step1 .steps .personSVG svg{
        color: var(--color-primary);
    }

    .step1 form {
        position: relative;
        display: flex;
        flex-direction: column;

        gap: 22px;
    }

    .step1 form .inputDiv{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .step1 form .inputDiv input {
        height: 37px;
        background-color: var(--grey-0);
        border-radius: 4px;
        padding-left: 10px;
    }

    .step1 form .inputDiv label {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .step1 form .inputDiv p {
        position: absolute;
        bottom: -16px;
        left: 5px;
        color: #ff2222;
        font-size: 14px;
        font-weight: 500;
    }

    .step1 form .twoInputsDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 51px;

        width: 100%;
    }

    .step1 button{
        position: absolute;
        bottom: -130px;
        right: -40px;
        width: 192px;
        height: 46px;
        background-color: var(--color-primary);
        border-radius: 4px;

        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: white;
    }
`