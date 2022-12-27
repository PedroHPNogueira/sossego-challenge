import { Button } from './../../styles/button';
import styled from "styled-components";

export const CreatedUserCardDiv = styled.div`

    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;

    width: 465px;
    height: 636px;
    padding: 48px 81px 0 59px;

    background-color: white;
    box-shadow: 0.3px 0.3px 8px #ddd, -0.3px -0.3px 8px #ddd;

    h1{
        margin: 0 auto;

        font-size: 36px;
        font-weight: 500;
        line-height: 48px;
    }

    span{
        margin-top: 20px;

        font-size: 14px;
        font-weight: 500;
        color: #8C98A9;
    }

    p{
        margin-top: 7px;
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
    }

    .email{
        padding-bottom: 20px;
        border-bottom: 1px solid var(--grey-0);
    }

    > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 20px;
    }

    Button{
        position: absolute;
        bottom: 35px;
        left: 40px;

        width: 380px;
    }
`