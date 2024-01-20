import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaRegCalendarAlt} from 'react-icons/fa';
import Cookies from 'js-cookie';

import styles from '../styles/navbar.module.scss';
import { withTheme } from "../styles/Theme";

const NavbarItem = ({ theme, image, text, link }) => (
    <NavLink
        to={link}
        className={ styles.navbarItem }
        style={({ isActive }) => isActive ? { color: theme.slideBarItemColor, backgroundColor: theme.slideBarItemHoverColor } : { color: theme.slideBarItemColor }}
    >
        <img src={image} alt={text} />
        <span>{text}</span>
    </NavLink>
);

const Navbar = ({theme}) => {
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
        <nav className={styles.navbar} style={{backgroundColor: theme.slideBarBg, boxShadow: theme.slideBarBorderShadow}}>
            <div className={styles.navbarHeader} style={{borderColor: theme.slideBarItemHoverColor}}>
                <img src="/assets/Logos_Epitech/EPI-LOGO-2023-NOIR.png" alt="Logo" />
                <span>Hub</span>
            </div>
            {categories.map((category, index) => (
                <NavbarItem
                    theme={theme}
                    key={index}
                    image={category.image}
                    text={category.text}
                    link={category.link}
                />
            ))}
            <div className={styles.navbarFooter}>
                <FaRegCalendarAlt />
                <span>{formattedDate}</span>
            </div>
        </nav>
    );
};

export default withTheme(Navbar);