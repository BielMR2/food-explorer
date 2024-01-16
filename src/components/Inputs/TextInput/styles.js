import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 12.5rem;

    padding: 0.87rem;
    resize: none;

    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`