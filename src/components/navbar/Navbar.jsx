import React, {useEffect, useState} from "react";
import { DiProlog } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Link } from "react-router-dom";
import './navbar.css';

const navbarData = [
    {
        key: 1,
      label: 'About Me',
        to: '/about'
    },
    {
        key: 2,
        label: 'Skills',
        to: '/skills'
    },
    {
        key: 3,
        label: 'Portfolio',
        to: '/portfolio'
    },
    {
        key: 4,
        label: 'Contact',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleClick, setToggleClick] = useState(false)
    const [changeTheme, setChangeTheme] = useState(false);
    const [theme, setTheme] = useState('light');

  const handleToggleClick = () => {
        setToggleClick(!toggleClick);
  };

    const handleChangeTheme = () => {
        setChangeTheme(!changeTheme);
        if (theme === 'light') {
            setTheme('dark-theme');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);



    return (
      <div className="navbar">
              <div className="navbar__container">
                  <Link to='/'><DiProlog className="navbar_icon" /></Link>
              </div>
          <ul className="navbar__container-menu">
              {
                  navbarData.map((props)=> (
                      <li key={props.key} className="navbar__container-menu-item">
                       <Link className="navbar__container-menu-item_link" to={props.to}>{props.label}</Link>
                      </li>
                  ))
              }
          </ul>
        <div className="nav-icon" onClick={handleToggleClick}>
            {
                toggleClick ? <HiX className="toggleIcon" /> : <FaBars className="toggleIcon" />
            }

        </div>
          <div className="nav__btns change-theme" onClick={handleChangeTheme}>
              {
                changeTheme ? <BiMoon /> :  <BiSun />
              }
          </div>

      </div>
    );
};

export default Navbar;