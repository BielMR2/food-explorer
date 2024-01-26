import styled from "styled-components"
import { DEVICE_BREACKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    height: 100vh;
`

export const Content = styled.div`
    height: calc(100vh - 11.3125rem);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 6.25rem 1.56rem;
    margin: 0 auto;

    > button {
        position: absolute;
        top: 8rem;
        left: 3.12rem;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        height: max-content;

        padding: 5.12rem;

        > button {
            top: 6.87rem;

            h1 {
                font-weight: 500;
            }
        }
    }
`

export const Main = styled.div`
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    gap: 2.93rem;

    > img {
        width: 24.37rem;
        height: 24.37rem;          
    }

    > .details {
        max-width: 43.75rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;


        .tags {
            display: flex;
            flex-wrap: wrap; 
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        flex-direction: column;
        text-align: center;
        gap: 16px;

        > img {
            width: 16.5rem;
            height: 16.5rem;  
            margin: 0 auto;
        }

        > .details {
            > h1 {
                font-size: 1.68rem
            }

            > p {
                font-size: 1rem
            }

            .tags {
                p {
                    font-size: 0.875rem;
                }
            }
        }
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.ML}) {
        > img {
            width: 20rem;
            height: 20rem;  
            margin: 0 auto;
        }

        > .details {
            > p {
                font-size: 1.2rem
            }
        }
        
    }
`

export const Controlls = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 2rem;

    margin-right: auto;

    > .button-mobile {
        display: none;
    }

    @media (max-width: ${DEVICE_BREACKPOINTS.MD}) {
        gap: 1rem;

        margin: 0 auto;

        > .button-mobile {
            display: flex
        }
        
        > .button-desktop {
            display: none
        }
    }
`