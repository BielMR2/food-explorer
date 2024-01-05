import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled.div`
    width: 100%;
    min-width: 11.12rem;

    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 50px; height: 50px;
    }

    > p {
        font-size: 42px
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        > img {
            width: 33px; height: 33px;
        }

        > p {
            font-size: 29.5px
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
            width: 43px; height: 43px;
        }

        > p {
            font-size: 37.2px;
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}) {
        gap: 8px;

        > img {
            width: 23px; height: 23px;
        }

        > p {
            font-size: 27.2px;
        }
    }
`