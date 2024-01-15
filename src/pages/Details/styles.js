import styled from "styled-components"

export const Container = styled.div`

`

export const Content = styled.div`
    height: calc(100vh - 11.3125rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.62rem;

    padding: 6.25rem 1.56rem;
    margin: 0 auto;

    > button {
        position: absolute;
        top: 129px;
        left: 50px;
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

    > div {
        max-width: 43.75rem;

        display: flex;
        flex-direction: column;
        gap: 1.5rem;


        .tags {
            display: flex;
            flex-wrap: wrap; 
        }

        .controlls {
            display: flex;
            flex-direction: row;
            align-content: center;
            gap: 2rem;
        }
    }
`