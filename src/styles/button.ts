import styled, { css } from "styled-components";

interface IButtonProps{
    variant: string
}

export const Button = styled.button<IButtonProps>`

    ${({variant}) => {
        if(variant === "primary"){
            return css`
                width: 192px;
                height: 46px;
                border-radius: 4px;

                background-color: var(--color-primary);
                font-size: 16px;
                line-height: 24px;
                font-weight: 500;
                color: white;

                :hover{
                    cursor: pointer;
                }
            `
        } else if(variant === "secondary"){
            return css`
                width: 192px;
                height: 46px;
                border-radius: 4px;

                background-color: #8C98A9;
                font-size: 16px;
                line-height: 24px;
                font-weight: 500;
                color: white;

                :hover{
                    cursor: pointer;
                }
            `
        }
    }}
`