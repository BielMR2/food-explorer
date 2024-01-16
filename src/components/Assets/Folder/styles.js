import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints";

import styled from "styled-components";

export const Container = styled.div`
    width: 26rem;
    height: 10.937rem;

    margin: 1.875rem auto;


    > img {
        position: relative;

        right: 1.875rem;
        bottom: 12px;

        opacity: 0.8;
        z-index: 1;
    }

    > div {
        position: relative;
        top: -8.75rem;

        display: flex;
        flex-direction: column;
        gap: 3px;

        padding: 2.25rem 1.312rem 1.375rem 9.37rem;

        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

        h1 {
            font-family: Poppins;
            font-size: 1.12rem;
            font-weight: 600;
        }

        p {
            font-family: Poppins;
            font-size: 0.75rem;
            font-weight: 400;
        }
    }

    scale: 1.2;
    margin-top: 1.25rem;
    padding-top: 1.25rem;

    @media (min-width: ${DEVICE_BREACKPOINTS.XL}) {
        scale: 1.4;
        padding-top: 1.87rem;
    }

    @media (max-width: 650px) {
        scale: 1;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MM}) {
        scale: 0.9;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.SM}) {
        scale: 0.7;
    }
`

