import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`

`

export const StyleLogoSign = styled.div`
    margin: 0;
    

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        margin: 0 auto 43px;
    }
`

export const Form = styled.div`
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 32px;
    
    padding: 64px;

    background: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 16px;

    > h1 {
        margin: 0 auto;
    }
    
    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        width: 100%;
        padding:0;
        background: none;
        margin: 0 auto;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        padding: 64px 42px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MM}) {
        padding: 64px 22px;
    }
`

export const Mobile = styled.div`
    display: none;
    flex-direction: column;

    padding: 70px 65px;

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin: 0 auto 40px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: flex;
        padding: 70px 25px 0;
    }
    
    @media (max-width: ${DEVICE_BREACKPOINTS.MM}) {
        padding: 78px 25px 0;
    }

`

export const Desktop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 120px 140px;

    gap: 300px;

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        margin: 0 auto
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.XL}) {
        padding: 40px 140px;
        gap: 30px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        padding: 40px 60px;
        gap: 30px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: none;
    }
`