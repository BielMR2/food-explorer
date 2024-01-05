import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > svg {
        width: 32px;
        height: 32px;
    }

    > div {
        position: relative;

        left: -14px;
        top: -5px;

        width: 20px;
        height: 20px;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        border-radius: 50%;

        > p {
            position: relative;

            left: 6px;
            top: 1px;
        }
    }
`