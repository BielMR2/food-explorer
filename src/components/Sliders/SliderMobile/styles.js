import styled from "styled-components";

export const Container = styled.div`
    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        padding: 0 0 24px 24px;
    }

    > div {
        padding-bottom: 24px;
    }
`