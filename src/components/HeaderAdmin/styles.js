import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"


export const Container = styled.div`
    max-height: 104px;

    display: flex;
    align-items: center;
    gap: 32px;

    padding: 24px 123px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
`

export const Menu = styled.div`
    display: none;


    > svg {
        width: 24px;
        height: 18px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: block;
    }
`

export const Functions = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    gap: 32px;

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        display: none
    }
`

export const StyledLogoAdmin = styled.div`
    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        margin-left: calc(50% - 116px);
    }
`
