import './header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkIsActivated = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
  }

  return (
    <header>
        <nav className='header'>
            <NavLink to="/" className='header_logo'>
                <img src={logo} alt='Logo' className='imgLogo' />
            </NavLink>
            <div className='header_nav_list'>
                <button className='header-list-button'>
                  <NavLink
                    to='/'
                    className={({isActive})=> linkIsActivated(isActive)}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                  Home
                  </NavLink>
                </button>
                <button className='header-list-button'>
                  <NavLink
                    to='/trainers'
                    className={({isActive})=> linkIsActivated(isActive)}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Trainers
                  </NavLink>
                </button>
                <button className='header-list-button'>
                  <NavLink
                    to='/about'
                    className={({isActive})=> linkIsActivated(isActive)}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    About
                  </NavLink>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Header;
