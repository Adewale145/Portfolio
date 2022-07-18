import '../styles/skills.scss'

const Skills = () => {
    return (
        <div className='skills'>
            <div className='header'>
                <h2>Skills</h2>
            </div>
            <div className='container'>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/html.jpg' 
                                alt='html' />
                        </div>
                        <h3>HTML</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/css.png' 
                                alt='css' />
                        </div>
                        <h3>CSS</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/sass.png' 
                                alt='' />
                        </div>
                        <h3>SASS</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/bootstrap.png' 
                                alt='' />
                        </div>
                        <h3>BOOTSTRAP</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/javascript.jpg' 
                                alt='' />

                        </div>
                        <h3>JAVASCRIPT</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/react.png' 
                                alt='' />
                        </div>
                        <h3>REACT</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
                <div className='skillBox'>
                    <div className='skillTitle'>
                        <div className='img'>
                            <img 
                                src='images/figma.png' 
                                alt='' />
                        </div>
                        <h3>FIGMA</h3>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills;