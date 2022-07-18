import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,  faAngleRight, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/works.scss'

 const Works = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: '1',
            url: 'https://adewalecurrencyconverterapp.netlify.app/',
            title: 'currency converter',
            desc: 'Currency converter is an app built for users for currencies exchange with an API call for daily financial and money transactions. The app has a friendly and accommodating user interface and experience, it has one input field, function button that displays the total equivalent amount.',
            img: 'images/pic.jpg',
        },
        {
            id: '2',
            url: 'https://adewale145.github.io/loan-calculator-vanillajs/',
            title: 'loan calculator',
            desc: 'A vanilla JS App built to focus on loan calculation, users get to know about loan taken, loan interest, years of payment, monthly payment, total payment and total interest',
            img: 'images/pic.jpg',
        },
        {
            id: '3',
            url: 'https://adewale145.github.io/react-football-app/',
            title: 'react football app',
            desc: 'This app was build on React.Js reusable components with hooks and switch cases for its implementation. It"s a single page application with components of best coaches, best male football players, best female football players and best teams.',
            img: 'images/pic.jpg',
        },
    ];

    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className='works'>
                <h1>Projects</h1>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className='container'>
                        <FontAwesomeIcon
                            onClick={()=>handleClick('left')}
                            className='iconLeft'
                            icon={faAngleLeft}
                            />
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img 
                                            src={d.img} 
                                            alt="pic3" 
                                            />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>
                                        <a 
                                            href={d.url}>
                                                <FontAwesomeIcon
                                                className='icon'
                                                icon={faHandPointRight}
                                                />
                                        </a> 
                                    </span>
                                </div>
                            </div>
                            <div className='right'>
                                <img 
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuISWOuic3Pd7dmDSxqnKGjjjZOWLk9juZpQ&usqp=CAU' 
                                    alt='pic2' 
                                    />
                            </div>
                        </div>
                            <FontAwesomeIcon 
                                onClick={()=>handleClick('right')}
                                className='iconRight'
                                icon={faAngleRight}
                                />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Works;