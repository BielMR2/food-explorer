import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

        padding: 50px 0 25px 24px;
    }

    > div {
        position: relative;
    }

    .styleArrows {
        > svg {
            pointer-events: all;
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            cursor: pointer;
        }
    }

    .bars-shadow {
        pointer-events: none;
        height: 100%;
        width: 100%;
        
        background: linear-gradient(90deg, rgba(0,10,15,0.8) 0%, rgba(0,10,15,0) 50%, rgba(0,10,15,0.8) 100%);

        position: absolute;
        top: 0
    }


    .arrow--left {
        left: -7px;
    }

    .arrow--right {
        right: 0px;
    }
`