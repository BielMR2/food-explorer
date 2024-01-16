import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    > svg {
        width: 2rem;
        height: 2rem;
    }

    > div {
        position: relative;

        left: -0.875rem;
        top: -0.3125rem;

        width: 1.25rem;
        height: 1.25rem;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        border-radius: 50%;

        > p {
            position: relative;

            left: 6px;
            top: 1px;
        }
    }
`