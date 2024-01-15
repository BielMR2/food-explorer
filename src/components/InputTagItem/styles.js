import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .tags {
        width: 100%;
        
        padding: 8px;
        border-radius: 8px;
    
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    
        background: ${({ theme }) => theme.COLORS.DARK_800};
    }
`