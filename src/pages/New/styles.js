import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
    padding: 41px;

    > h1 {
        padding: 25px 0 32px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;

    .rows {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 32px;
        justify-content: space-between;
    }

    .first-row > div:nth-child(3) {
        width: 50%;
    }

    .mid-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        
        > div:nth-child(2) {
            width: 20%;
        }
    }


    > button {
        width: 30%;
        max-width: 250px
    }

    
`