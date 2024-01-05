import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    max-height: 77px;
    
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 123px;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        padding: 24px;

        p {
            font-size: 12px;
        }
    }
`