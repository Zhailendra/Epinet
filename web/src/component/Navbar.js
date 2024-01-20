import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaRegCalendarAlt} from 'react-icons/fa';
import '../styles/Navbar.css';
import Cookies from 'js-cookie';

const NavbarItem = ({ image, text, link }) => (
    <NavLink 
      to={link} 
      className={({ isActive }) => isActive ? "navbar-item navbar-item-active" : "navbar-item"}
    >
      <img src={image} alt={text} className="navbar-icon" />
      <span className="navbar-text">{text}</span>
    </NavLink>
  );

  const Navbar = () => {
    const isAdmin = Cookies.get('adm') ? Cookies.get('adm') === 'true' : false;
    console.log(isAdmin);
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  
    const adminCategories = [
      { image: '/assets/dashboard.png', text: 'Dashboard', link: '/dashboard' },
      { image: '/assets/demandes.png', text: 'Demandes', link: '/demandes' },
      { image: '/assets/support.png', text: 'En attente de support', link: '/support' },
      { image: '/assets/support.png', text: 'En attente de planification', link: '/planification' },
      { image: '/assets/notification.png', text: 'Notifications', link: '/notifications' },
    ];
  
    const userCategories = [
        { image: '/assets/dashboard.png', text: 'Mon Dashboard', link: '/student-dashboard' },
        { image: '/assets/demandes.png', text: 'Mes Demandes', link: '/mes-demandes' },
        { image: '/assets/demandes.png', text: 'Demande acceptée', link: '/demande-accept'},
        { image: '/assets/notification.png', text: 'Notifications', link: '/student-notification' },

    ];
  
    const categories = isAdmin ? adminCategories : userCategories;
  
    return (
      <nav className="navbar">
        <div className="navbar-header">
          <img src="/assets/Logos_Epitech/EPI-LOGO-2023-NOIR.png" alt="Logo" />
          <span>Hub</span>
        </div>
        {categories.map((category, index) => (
          <NavbarItem
            key={index}
            image={category.image}
            text={category.text}
            link={category.link}
          />
        ))}
        <div className="navbar-footer">
          <FaRegCalendarAlt />
          <span>{formattedDate}</span>
        </div>
      </nav>
    );
  };
  
export default Navbar;