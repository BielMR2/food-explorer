import styled from "styled-components";

export const Container = styled.div`
    width: ${({ onlyContent }) => onlyContent ? "max-content" : "100%"};

    display: flex;
    flex-direction: column;
    gap: 16px;
`