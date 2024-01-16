import styled from "styled-components";

export const Container = styled.div`
    width: ${({ $maxcontent }) => $maxcontent ? "max-content" : "100%"};

    display: flex;
    flex-direction: column;
    gap: 1rem;
`