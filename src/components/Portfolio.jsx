import '../styles/portfolio.scss'
import { PortfolioList } from './PortfolioList'
import React, { useState, useEffect } from 'react'
import { 
    featuredPortfolio, 
    webPortfolio, 
    designPortfolio, 
    writingPortfolio } from '../DB';

const Portfolio = () => {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'design',
            title: 'Web Design',
        },
        {
            id: 'writing',
            title: 'Creative Writing',
        },
    ];

    useEffect(()=>{
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'writing':
                setData(writingPortfolio);
                break;
                default:
                    setData(featuredPortfolio);
        }

    },[selected])
        
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul> 
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title}
                    active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                     />
                ))}
            </ul>
            <div className='container'>
                {data.map((d) => (
                    <div className='item'>
                        <img 
                        src={d.img}
                        alt='pic1'
                        />  
                        <h3>{d.title}</h3> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;