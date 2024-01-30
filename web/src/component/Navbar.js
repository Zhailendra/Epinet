import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

import styles from '../styles/navbar.module.scss';
import { withTheme } from "../styles/Theme";

const NavbarItem = ({ theme, image, text, link }) => (
    <NavLink
        to={link}
        className={ styles.navbarItem }
        style={({ isActive }) => isActive ? { color: theme.slideBarItemColor, backgroundColor: theme.slideBarItemHoverColor } : { color: theme.primaryColor }}
    >
        <img src={image} alt={text} />
        <span>{text}</span>
    </NavLink>
);

const Navbar = ({ theme }) => {
    const isAdmin = Cookies.get('adm') ? Cookies.get('adm') === 'true' : false;

    const adminCategories = [
        { image: '/assets/dashboard.png', text: 'Dashboard', link: '/dashboard' },
        { image: '/assets/demandes.png', text: 'Demandes en cours', link: '/demandes' },
        { image: '/assets/support.png', text: 'En attente de support', link: '/support' },
        { image: '/assets/support.png', text: 'En attente de planification', link: '/planification' },
        { image: '/assets/notification.png', text: 'Notifications', link: '/notifications' },
    ];

    const userCategories = [
        { image: '/assets/dashboard.png', text: 'Mon Dashboard', link: '/dashboard' },
        { image: '/assets/demandes.png', text: 'Mes Demandes', link: '/mes-demandes' },
        { image: '/assets/demandes.png', text: 'Demande(s) acceptée(s)', link: '/demande-accept'},
        { image: '/assets/notification.png', text: 'Notifications', link: '/notifications' },
    ];

    const categories = isAdmin ? adminCategories : userCategories;

    return (
        <nav>
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
        </nav>
    );
};

export default withTheme(Navbar);