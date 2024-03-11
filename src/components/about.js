import '/Users/ringo/Desktop/Agency/src/App.css'
import styled from "styled-components"; 

function About() {
    const Section = styled.section` 
        width:100%;
        background-color:blue;
`; 

    const Container = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%
        background-color:red;
    `;

    const Content = styled.div`
        width:80%, 
        
    `;

    const H1 = styled.h1 `{
        text-align:center;
        font-size:3rem;
        font-weight:600;
    }`;

    const P = styled.p `{
        font-size:2rem;
        color:white;
    }`

    return(
        <>
            <Section>
                <Container>
                    <Content>
                        <H1>
                            About
                        </H1>

                        <P>
                        It is an amazng one-page theme with great features that offers an incredible experience. It is easy to install, make changes, adapt for your business. A modern design with clean lines and styling for a wide variety of content, exactly how a business design should be. You can add as many images as you want to the main header area and turn them into slider.
                        </P>
                    </Content>
                </Container>
            </Section>
        </>
    )
}


export default About


