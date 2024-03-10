import '/Users/ringo/Desktop/Agency/src/App.css'
import { IoMenu } from "react-icons/io5";
import navbarLogo from "/Users/ringo/Desktop/Agency/src/images/header-logo.png"


function header() {
   /* const Hero = styled.div` 
        text-align: center; 
        border: 1px solid #000; 
        padding: 20px; 
        border-radius: 5px; 
        margin-bottom: 25px; 
    `; */


    return(
        <>
            <main>

                <header>
                    <section className="header">
                        <div className="header-container">
                            <nav>
                                <img src={navbarLogo} alt='' />

                                <input type="checkbox" name="" id="menuBtn"/>
                                <label className='barIcon' for="menuBtn">
                                <IoMenu />
                                </label>

                                <ul>
                                    <li>
                                        <a href='#home'>Home</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Portfolio</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Testimonials</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Services</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Blog</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Our Team</a>
                                    </li>

                                    <li>
                                        <a href='#home'>Contact us</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </section>
                    
                </header>

                <section className='hero'>
                    <div className='hero-container'>
                        <div className='hero-content'>
                            <h1>Clean<span>.</span>Slick<span>.</span>Pixel Perfect</h1>

                            <p>lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a new website for his business. Try it now!</p>

                            <div className='hero-buttons'>
                                <button className='has-no-bg'>
                                    Learn More
                                </button>

                                <button className='has-bg'>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default header