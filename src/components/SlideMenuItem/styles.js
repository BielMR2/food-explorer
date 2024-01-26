import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};


    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: Poppins;
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 140%;
    }
`