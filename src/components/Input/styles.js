import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    > p {
        margin-bottom: 8px;

        color: ${({ theme }) => theme.COLORS.LIGHT_400}
    }

    > div {
        width: 100%;
        
        display: flex;
        flex-direction: row;
        gap: 14px;

        padding: 12px 14px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;

        svg {
        width: 24px; height: 24px;
    }

        input {
            width: 100%;
            background: none;
            border: none;

            color: ${({ theme }) => theme.COLORS.LIGHT_100}
        }
    }
    
    
`