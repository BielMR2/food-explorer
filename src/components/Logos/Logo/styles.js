import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREACKPOINTS } from "../../../styles/deviceBreakPoints"

export const Container = styled(Link)`
    min-width: 11.12rem;

    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 1.87rem; height: 1.87rem;
    }

    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        white-space: nowrap;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 8px;

        > img {
            width: 1.56rem; height: 1.56rem;
        }

        > p {
            font-size: 1.31rem;
        }
    }
`