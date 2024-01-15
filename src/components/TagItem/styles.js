import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: max-content;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.LIGHT_600};

    border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : `2px solid ${theme.COLORS.LIGHT_500}` };
    border-radius: 10px;

    padding: 0 16px;

    > input {
        background-color: transparent;

        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

        border: none;
        border-radius: 8px;

        padding: 10px 0;
    }

    > button {
        background: none;
        border: none;

        > svg {
            color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        }
    }
`