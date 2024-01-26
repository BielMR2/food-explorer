import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled(Link)`
    min-width: 11.12rem;

    display: flex;
    gap: 10px;

    > img {
        width: 1.87rem; height: 1.87rem;
    }

    > div {
        display: flex;
        flex-direction: column;

        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
            width: 1.56rem; height: 1.56rem;
        }

        div {
            flex-direction: row;
            gap: 8px;
            align-items: center;

            h1 {
                font-size: 1.31rem;
            }

            p {
                font-size: 1.31rem;
            }
        }

        
    }
`