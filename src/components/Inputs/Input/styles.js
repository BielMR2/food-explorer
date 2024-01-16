import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400}
    }

    > div {
        width: 100%;
        
        display: flex;
        flex-direction: row;
        gap: 0.77rem;

        padding: 1rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 5px;

        svg {
        width: 1.5rem; height: 1.5rem;
    }

        input {
            width: 100%;
            background: none;
            border: none;

            color: ${({ theme }) => theme.COLORS.LIGHT_100}
        }
    }
    
    
`