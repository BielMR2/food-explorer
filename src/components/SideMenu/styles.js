import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    display: none;
    
    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        grid-area: none;
        position: absolute;
        z-index: 1;

        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: column;

        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;

        &[data-menu-is-open="true"] {
            transform: translateX(0)
        }
    }

`

export const Header = styled.div`
    padding: 3.5rem 1.75rem 1.5rem;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`

export const Content = styled.div`
    height: 100%;

    padding: 36px 28px;
    background: ${({ theme }) => theme.COLORS.DARK_400};

    display: flex;
    flex-direction: column;
    gap: 36px;
`