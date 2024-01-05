import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints";

import styled from "styled-components";

export const Container = styled.div`
    width: 416px;
    height: 175px;

    margin: 30px auto;


    > img {
        position: relative;

        right: 30px;
        bottom: 12px;

        opacity: 0.8;
        z-index: 1;
    }

    > div {
        position: relative;
        top: -140px;

        display: flex;
        flex-direction: column;
        gap: 3px;

        padding: 36px 21px 22px 150px;

        background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

        h1 {
            font-family: Poppins;
            font-size: 18px;
            font-weight: 600;
        }

        p {
            font-family: Poppins;
            font-size: 12px;
            font-weight: 400;
        }
    }

    scale: 1.2;
    margin-top: 20px;
    padding-top: 20px;

    @media (min-width: ${DEVICE_BREACKPOINTS.XL}) {
        scale: 1.4;
        padding-top: 30px;
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

