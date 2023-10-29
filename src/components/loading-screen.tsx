import styled from "styled-components"

export default function LoadingScreen() {
    const Wrapper = styled.div`
        position:fixed;
        top:0;
        left:0; 
        width:100vw;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    `
    const Text = styled.span`
        font-size:24px;
        color:white;
    `

    return (
        <Wrapper>
            <Text>Loading...</Text>
        </Wrapper>
    )
}