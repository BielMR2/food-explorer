import styled from "styled-components";
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    position: relative;

    height: 31rem;
    max-width: 19rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.5rem;
    margin: 0 auto;

    gap: 0.93rem;

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

        gap: 0.93rem;

        > img, > .imagePlaceholder {
            width: 11rem; height: 11rem;
            border-radius: 50%;
        }

        > .imagePlaceholder {
            background: url(https://encurtador.com.br/jvKY8);
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
        }

        > h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        p {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            text-align: center;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }   
    }

    > h2 {
        margin-top: auto;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    > .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;


        gap: 1rem;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.LG}) {
        scale: 0.9
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        max-width: 13.12rem;
        height: max-content;

        gap: 0.75rem;

        .openDetails {
            > img, .imagePlaceholder {
                width: 5.5rem; height: 5.5rem;
            }

            > h1 {
                font-size: 0.87rem;
                text-align: center;
            }

            > p {
                display: none
            }

            
        }

        h2 {
            font-size: 1rem;
            margin-top: 0;
        }   
        

        > .buttons {
            width: 100%;
            flex-direction: column;
            align-items: center;

            > button {
                padding: 0.4375rem 1.5rem;
            }
        }
    }
`
