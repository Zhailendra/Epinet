import Navbar from "./Navbar";
import styles from "../styles/layout.module.scss";
import { withTheme } from "../styles/Theme";
import {FaRegCalendarAlt} from "react-icons/fa";
import React from "react";

function Layout({ children, theme }) {

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

    return (
        <div>
            <div className={styles.navBarContainer} style={{backgroundColor: theme.slideBarBg, boxShadow: theme.slideBarBorderShadow}}>
                <Navbar />
                <div className={styles.navbarFooter} style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}}>
                    <FaRegCalendarAlt />
                    <span>{formattedDate}</span>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default withTheme(Layout);