import styled from "styled-components";

export const BackgroudDiv = styled.div`

    position: relative;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    .sossegoDiv {
        display: flex;
        width: 52%;
        background-color: var(--color-primary);
    }

    .sossegoDiv > img {
        width: 70%;
        opacity: 0.8;

        margin: auto;
    }
`