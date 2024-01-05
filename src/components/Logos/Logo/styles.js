import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled.div`
    min-width: 11.12rem;

    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 30px; height: 30px;
    }

    p {
        white-space: nowrap;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
            width: 25px; height: 25px;
        }

        > p {
            font-size: 1.31rem;
        }
    }
`