import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled.div`
    width: 100%;
    min-width: 11.12rem;

    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 3.12rem; height: 3.12rem;
    }

    > p {
        font-size: 2.62rem
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        > img {
            width: 2rem; height: 2rem;
        }

        > p {
            font-size: 1.843rem
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
            width: 2.68rem; height: 2.68rem;
        }

        > p {
            font-size: 2.325rem;
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}) {
        gap: 8px;

        > img {
            width: 1.437rem; height: 1.437rem;
        }

        > p {
            font-size: 1.7rem;
        }
    }
`