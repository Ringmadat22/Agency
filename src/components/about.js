import '/Users/ringo/Desktop/Agency/src/App.css';
import styled from "styled-components"; 
import { TiPencil } from "react-icons/ti";
import { FaCode } from "react-icons/fa";


function About() {
    const Section = styled.section`
        width: 100%;
    `;

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    `;

    const Content = styled.div`
        width: 80%;
        margin:10px 0 0 0;
    `;

    const H1 = styled.h1`
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
        margin:40px 0;
    `;

    const P = styled.p`
        font-size: 1rem;
        color: #000;
        padding:10px 80px;
        text-align:center;
        line-height:30px;
        margin-bottom:50px;
    `;

    const CounterDiv = styled.div`
        width:100%;
        margin:20px 40px 40px 40px;
        height:25vh;
        display:flex;
        justify-content:center;
        align-items:center;
    `; 

    const UpperDiv = styled.div`
        width:300px;
        height:2px;
        background:rgb(210, 210, 210);
        display:flex;
        justify-content:left;
        align-items:center;
        margin:0 40px;
    `;

    const InnerDiv = styled.div`
        width:200px;
        height:4px;
        background:orange;
        display:flex;
        justify-content:right;
        align-items:center;
    `;

    const InnerDivTwo = styled.div`
    width:240px;
    height:4px;
    background:yellow;
    display:flex;
    justify-content:right;
    align-items:center;
`;

    const InnerDivThree = styled.div`
    width:260px;
    height:4px;
    background:purple;
    display:flex;
    justify-content:right;
    align-items:center;
    `;

    const InnerInnerDiv = styled.button`
        background:orange;
        flex-direction:right;
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:6px;
        border:none;
        outline:none;
    `;

    const InnerInnerDivTwo = styled.button`
    background:rgba(255, 213, 5, 0.655);
    flex-direction:right;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:6px;
    border:none;
    outline:none;
`;

    const InnerInnerDivThree = styled.button`
    background:purple;
    flex-direction:right;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:6px;
    border:none;
    outline:none;
    `;



    return (
        <Section>
            <Container>
                <Content>
                    <H1>About</H1>
                    <P>
                        It is an amazing one-page theme with great features that offers an incredible experience. It is easy to install, make changes, adapt for your business. A modern design with clean lines and styling for a wide variety of content, exactly how a business design should be. You can add as many images as you want to the main header area and turn them into a slider.
                    </P>

                    <CounterDiv >

                        <div>

                            <UpperDiv>
                                <InnerDiv >

                                    <div style={{
                                        marginBottom:"90px",
                                        height:"25px",
                                        width:"60px",
                                        background:"orange",
                                        marginLeft:"30px",
                                        outline:"none"
                                    }}>
                                        <h6 style={{
                                            color:"#fff",
                                            textAlign:"center",
                                            marginTop:"3px",
                                            fontSize:"16px"
                                        }}>60%
                                        
                                        </h6>
                                        <div className="triangle">

                                        </div>


                                    </div>
                                    
                                    <InnerInnerDiv>

                                    </InnerInnerDiv>

                                </InnerDiv>
                            </UpperDiv> 

                            <h1 style={{
                                marginLeft:"40px",
                                marginTop:"20px",
                                fontSize:"1.2rem"
                            }}> <span style={{
                                fontFamily:"cursive"
                            }}>A</span> Typography</h1>
                        </div>


                        

                        <div>

                            <UpperDiv>
                                <InnerDivTwo >

                                    <div style={{
                                        marginBottom:"90px",
                                        height:"25px",
                                        width:"60px",
                                        background:"rgba(255, 213, 5, 0.655)",
                                        marginLeft:"30px",
                                        outline:"none"
                                    }}>
                                        <h6 style={{
                                            color:"#000",
                                            textAlign:"center",
                                            marginTop:"3px",
                                            fontSize:"16px"
                                        }}>80%
                                        
                                        </h6>
                                        <div className="triangle-2">

                                        </div>


                                    </div>
                                    
                                    <InnerInnerDivTwo>

                                    </InnerInnerDivTwo>

                                </InnerDivTwo>
                            </UpperDiv> 

                            <h1 style={{
                                marginLeft:"40px",
                                marginTop:"20px",
                                fontSize:"1.2rem"
                            }}> <span style={{
                                fontFamily:"cursive"
                            }}><TiPencil style={{
                                fontSize:"20px",marginRight:"10px",
                            }} /></span> Design</h1>
                        </div>

                        <div>

                            <UpperDiv>
                                <InnerDivThree >

                                    <div style={{
                                        marginBottom:"90px",
                                        height:"25px",
                                        width:"60px",
                                        background:"purple",
                                        marginLeft:"30px",
                                        outline:"none"
                                    }}>
                                        <h6 style={{
                                            color:"#fff",
                                            textAlign:"center",
                                            marginTop:"3px",
                                            fontSize:"16px"
                                        }}>90%
                                        
                                        </h6>
                                        <div className="triangle-3">

                                        </div>


                                    </div>
                                    
                                    <InnerInnerDivThree>

                                    </InnerInnerDivThree>

                                </InnerDivThree>
                            </UpperDiv> 

                            <h1 style={{
                                marginLeft:"40px",
                                marginTop:"20px",
                                fontSize:"1.2rem"
                            }}> <span style={{
                                fontFamily:"cursive"
                            }}><FaCode /></span> Development</h1>
                        </div>

                    </CounterDiv>

                </Content>
            </Container>
        </Section>
    );
}

export default About;
