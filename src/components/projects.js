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
        background-color:rgba(240, 240, 240);
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
        background-color:blue;
    `

    const LowerSectionContent = styled.div`
        width:100%;
        background-color:red;
        display:flex;
    `

    const  ImgDiv = styled.div`
        width:100%;
        height:40vh;

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
                        <LowerSectionContent>
                            <ImgDiv className='project-images-div-1  project-images-div'>

                            </ImgDiv>

                            <ImgDiv className='project-images-div-2 project-images-div'>
                            </ImgDiv>

                            <ImgDiv className='project-images-div-3 project-images-div'>
                            </ImgDiv>

                            <ImgDiv className='project-images-div-4 project-images-div'>
                            </ImgDiv>
                        </LowerSectionContent>
                    </LowerSection>

                </Container>
            </Section>
        </>
    )
}

export default Projects