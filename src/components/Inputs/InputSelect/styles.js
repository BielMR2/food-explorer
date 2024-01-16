import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    select {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        padding: 1rem;

        border: none;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

        
    };
`