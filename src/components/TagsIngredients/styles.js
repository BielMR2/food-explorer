import styled from "styled-components";

export const Container = styled.div`
    display: inline;

    padding: 4px 8px;
    border-radius: 5px;
    margin-right: 24px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000}
`