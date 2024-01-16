import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    max-height: 4.81rem;
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.5rem 7.687rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        padding: 1.5rem;

        p {
            font-size: 0.75rem;
        }
    }
`