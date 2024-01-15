import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    position: relative;

    height: 496px;
    max-width: 19rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem;
    margin: 0 auto;

    gap: 15px;

    > .heart {
        position: absolute;

        top: 1.12rem; right: 1.12rem;

        svg {
            width: 1.5rem; height: 1.5rem;
        }
    }

    .openDetails {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;

        gap: 15px;

        > img {
            width: 11rem; height: 11rem;
        }

        > h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            text-align: center;
        }

        > h2 {
            color: ${({ theme }) => theme.COLORS.CAKE_200}
        }
    }

    

    > .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-top: auto;

        gap: 16px;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        scale: 0.9
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        max-width: 13.12rem;
        height: auto;

        gap: 12px;

        .openDetails {
            > img {
                width: 5.5rem; height: 5.5rem;
            }

            > h1 {
                font-size: 0.87rem;
                text-align: center;
            }

            > p {
                display: none
            }

            > h2 {
                font-size: 1rem
            }   
        }
        

        > .buttons {
            width: 100%;
            flex-direction: column;
            align-items: center;

            > button {
                padding: 7px 24px;
            }
        }
    }
`
