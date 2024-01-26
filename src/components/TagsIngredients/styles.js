import styled from "styled-components";

export const Container = styled.div`
    margin: 0 1.5rem 1.5rem 0;

    display: inline;

    border-radius: 5px;
    padding: 4px 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000}
`