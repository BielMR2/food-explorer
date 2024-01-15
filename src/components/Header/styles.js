import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-height: 6.5rem;
    
    gap: 32px;

    padding: 1.5rem 7.68rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};


    .space {
        display: none
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        padding: 3.5rem 3.84rem 1.5rem;
        
        .space {
            display: block;
            width: 24px;
            height: 24px;
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        padding: 1.5rem 2rem;
    }
`

export const Menu = styled.div`
    display: none;

    > svg {
        width: 24px;
        height: 24px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: flex;
    }
`

export const Functions = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: none
    }
`

export const Menu2 = styled.div`
    display: none;
    
    width: 24px;
    height: 18px;

    position: relative;

    top: -5px;
    
    > svg {
        width: 24px;
        height: 18px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: flex;
    }
`