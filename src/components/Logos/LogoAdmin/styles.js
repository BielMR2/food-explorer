import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled.div`
    min-width: 11.12rem;

    display: flex;
    gap: 10px;

    > img {
        width: 30px; height: 30px;
    }

    > div {
        display: flex;
        flex-direction: column;

        h1 {
            white-space: nowrap;
        }

        p {
            margin-left: auto;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
            width: 25px; height: 25px;
        }

        div {
            flex-direction: row;
            gap: 8px;
            align-items: center;

            h1 {
            font-size: 21px;
            }

            p {
                font-size: 21px;
            }
        }

        
    }
`