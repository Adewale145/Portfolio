import '../styles/menu.scss'
import { Link } from 'react-router-dom'

  const Menu = (props) => {
    return (
        <div className={'menu ' + (props.menuOpen && 'active')}>
            <ul>
                <li onClick={()=>props.setMenuOpen(false)}> 
                    <Link to='/hero' className='link'>Hero</Link>
                </li>
                <li onClick={()=>props.setMenuOpen(false)}> 
                    <Link to='portfolio' className='link'>Portfolio</Link>
                </li>
                <li onClick={()=>props.setMenuOpen(false)}> 
                    <Link to='works' className='link'>Works</Link>
                </li>
                <li onClick={()=>props.setMenuOpen(false)}> 
                    <Link to='skills' className='link'>Skills</Link>
                </li>
                <li onClick={()=>props.setMenuOpen(false)}> 
                    <Link to='contact' className='link'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu