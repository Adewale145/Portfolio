import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { init } from 'ityped'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/hero.scss'

 const Hero = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ['Designer', 'Writer'],
        });
    },[]);
    return (
        // main image
        <div className='hero'>
            <div className='left'>
                <div className='imgContainer'>
                    <img 
                        src='images/my-image.jpg' 
                        alt='pic' />
                </div>
            </div>

            {/* main details */}
            <div className='right'>
                <div className="wrapper">
                    <h2>Hi<span className='emoji'>👋, </span>I'm</h2>
                    <h1>ajayi adewale</h1>
                    <h3>frontend web developer. <span ref={textRef}></span></h3>
                    <p>I am a passionate front-end web developer and creative writer. <br />
                        I love developing amazing and interesting web applications with simple user friendly interfaces.  
                        I am interested in projects revolving around web applications solving real world problems.
                    </p>
                </div>

                {/* down arrow */}
                <Link to='/portfolio'>
                    <FontAwesomeIcon 
                    className='icon'
                    icon={faAngleDown}
                    />
                </Link>
                {/* <a href='#portfolio'>
                    <FontAwesomeIcon 
                    className='icon'
                    icon={faAngleDown}
                    />
                </a> */}
            </div>
        </div>
    )
}

export default Hero;