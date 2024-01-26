import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`

`

export const Content = styled.div`
    padding: 41px 41px 120px;

    > h1 {
        padding: 25px 0 32px;
    }

    .title-mobile {
        display: none
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        padding: 12px 32px 53px;

        > button {
            scale: 0.8;
            position: relative;
            right: 15px;

            h1 {
                font-weight: 500
            }
        }
        .title-mobile {
            display: block
        }
        .title-desktop {
            display: none
        }
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    .rows {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 32px;
        justify-content: space-between;
    }

    .first-row > div:nth-child(3) {
        width: 50%;
    }

    .mid-row {
        align-items: flex-start;
        
        > div:nth-child(2) {
            width: 20%;
        }
    }

    > button {
        width: 30%;
        max-width: 250px;
        margin-left: auto;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 24px;

        .rows {
            flex-direction: column;
            gap: 24px;
        }

        .first-row > div:nth-child(3), .first-row > div:nth-child(1) {
            width: 100%;

            label {
                display: flex;
                justify-content: center;
                width: 100%;
            }
        }

        .mid-row {
            > div:nth-child(2) {
                width: 100%;
            }
        }

        > button {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
        }
    }
`