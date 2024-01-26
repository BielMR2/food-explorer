import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    & > div:nth-child(5){
        margin-top: 40px;
    }

    .NoOrders {
        margin: 50px auto
    }
`

export const SlidersMobile = styled.div`
    display: none;
    flex-direction: column;

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: flex;
    }
`

export const SlidersDesktop = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: none;
    }
`