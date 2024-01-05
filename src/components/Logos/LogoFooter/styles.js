import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled.div`
    min-width: 11.12rem;

    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 1.87rem; height: 1.87rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
        width: 1.37rem; height: 1.12rem;
        }
    }
`