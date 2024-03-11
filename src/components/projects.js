import '/Users/ringo/Desktop/Agency/src/App.css'
import styled from "styled-components"; 

function Projects() {

    const Section = styled.section`
        width:100%;
    `;

    const Container = styled.div`
        width:100%;
    `;

    const UpperSection = styled.div`
        width:100;
        background-color:gray;
        height:25vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:cente;
    `
    const H1 = styled.h1`
        text-align:center;
        font-size:2rem;
        padding:10px;
    `;

    const LowerSection = styled.div`
        width:100%;
        padding:20px;
        background-color:blue;
    `


    return(
        <>
            <Section>
                <Container>

                    <UpperSection>
                        <H1>Projects</H1>
                        <p style={{
                            textAlign:"center"
                        }}>You'll love our work. Check it out!</p>
                    </UpperSection>

                    <LowerSection>

                    </LowerSection>

                </Container>
            </Section>
        </>
    )
}

export default Projects