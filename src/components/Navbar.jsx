import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.scss'

 const Navbar = (props) => {
    return (
        <div className={'navbar ' + (props.menuOpen && 'active')}>
          <div className='wrapper'>
            <div className="left">
               <h2 className='logo'>AA</h2> 
               <div className="itemContainer">
                  <FontAwesomeIcon 
                    className='icon'
                    icon={faPhone}
                    />
                    <span>+2348066996385</span>
               </div>
               <div className='itemContainer'>
                  <FontAwesomeIcon 
                  className='icon'
                  icon={faEnvelope}
                  />
                  <span>ajayiadewale145@gmail.com</span>
               </div>
            </div>
            <div className="right">
              <div className='hamburger' onClick={()=>props.setMenuOpen(!props.menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Navbar