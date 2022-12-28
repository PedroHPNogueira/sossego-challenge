import styled from "styled-components";

export const AddressInfoDiv = styled.div`

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
    
    form .inputDiv input {
        height: 37px;
        background-color: var(--grey-0);
        border-radius: 4px;
        padding-left: 10px;
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

    form .twoInputsDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 51px;

        width: 100%;
    }

    form .fourInputsDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 51px;

        width: 100%;
    }

    form .fourInputsDiv > .fourInputsSecDiv{
        display: flex;
        flex-direction: row;
        gap: 8px;

        width: 100%;
    }

    form .fourInputsDiv input{
        width: 100%;
    }

    .nextButton{
        position: absolute;
        bottom: -130px;
        right: -40px;
    }

    .returnButton{
        position: absolute;
        bottom: -130px;
        right: 172px;
    }

    @media (max-width: 1400px){

        form {
            gap: 20px;
        }

        form .twoInputsDiv{
            gap: 45px;
        }

        form .inputDiv input {
            height: 33px;
            padding-left: 9px;
        }

        form .inputDiv label {
            font-size: 15px;
            line-height: 22px;
        }

        form .inputDiv p {
            font-size: 13px;
        }

        form .fourInputsDiv{
            gap: 45px;
        }

        form .fourInputsDiv input{
            width: 100%;
        }

        .nextButton{
            bottom: -115px;
            right: -36px;
        }

        .returnButton{
            bottom: -115px;
            right: 152px;
        }
    }


    @media (max-width: 1250px){

        form {
            gap: 16px;
        }
        
        form .inputDiv input {
            height: 26px;
            border-radius: 3px;
            padding-left: 7px;
        }
        
        form .inputDiv label {
            font-size: 12px;
            line-height: 17px;
            margin-bottom: 7px;
        }
        
        form .inputDiv p {
            bottom: -12px;
            left: 4px;
            font-size: 10px;
        }

        form .twoInputsDiv{
            gap: 36px;
        }

        form .fourInputsDiv{
            gap: 36px;
        }

        form .fourInputsDiv > .fourInputsSecDiv{
            gap: 6px;
        }

        .nextButton{
            bottom: -92px;
            right: -28px;
        }

        .returnButton{
            bottom: -92px;
            right: 122px;
        }
    }

    @media (max-width: 1000px){

        form {
            gap: 12px;
        }
        
        form .inputDiv input {
            height: 20px;
            border-radius: 2px;
            padding-left: 6px;
        }
        
        form .inputDiv label {
            font-size: 9px;
            line-height: 14px;
            margin-bottom: 6px;
        }
        
        form .inputDiv p {
            bottom: -9px;
            left: 3px;
            font-size: 8px;
        }

        form .twoInputsDiv{
            gap: 28px;
        }

        form .fourInputsDiv{
            gap: 28px;
        }

        form .fourInputsDiv > .fourInputsSecDiv{
            gap: 4px;
        }

        .nextButton{
            bottom: -72px;
            right: -22px;
        }

        .returnButton{
            bottom: -72px;
            right: 95px;
        }
    }
`