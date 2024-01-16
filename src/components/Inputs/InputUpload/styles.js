import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    > label {
        width: 14.3125rem;

        display: flex;
        gap: 8px;

        padding: 0.75rem 2rem;

        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        input {
            display: none;
        }
    }
`