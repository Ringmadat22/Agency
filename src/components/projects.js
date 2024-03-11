import '/Users/ringo/Desktop/Agency/src/App.css'
import styled from "styled-components"; 

function Projects() {

    const Section = styled.section`
        width:100%;
        padding:100px 0;
        background:blue;
    `;

    const Container = styled.div`
        width:100%;
    `;

    const H1 = styled.h1`
        text-align:center;
        font-size:2rem;
        padding:20px;
    `;


    return(
        <>
            <Section>
                <Container>
                    <H1>Projects</H1>
                </Container>
            </Section>
        </>
    )
}

export default Projects