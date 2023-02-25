import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .shake {
        animation: shake 1s cubic-bezier(.36,.07,.19,.97) both infinite;
        transform: translate3d(0, 0, 0);

        }
`

export const Box = styled.div`
    width: 350px;
    height: auto;
    padding: 1rem;
`