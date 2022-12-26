import styled from "styled-components";

interface IInputDivProps {
    height?: string,
    width?: string
}

export const InputDiv = styled.div<IInputDivProps>`

    position: relative;
    display: flex;
    flex-direction: column;
    width: ${({width}) => {return width || "100%"}};

    input {
        height: ${({height}) => {return height || "37px"}};
        background-color: var(--grey-0);
        border-radius: 4px;
        padding-left: 10px;
    }

    label {
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 10px;
    }

    p {
        position: absolute;
        bottom: -16px;
        left: 5px;
        color: #ff2222;
        font-size: 14px;
        font-weight: 500;
    }
`