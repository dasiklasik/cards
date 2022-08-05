import React from "react";
import {NavLink} from "react-router-dom";
import { PATHS } from "../../LocalRoutes";
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.logo}>
                <h1>LOGO</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={PATHS.LOGIN}>Login</NavLink></li>
                    <li><NavLink to={PATHS.NOT_FOUND}>Not found</NavLink></li>
                    <li><NavLink to={PATHS.SIGN_UP}>Sign up</NavLink></li>
                    <li><NavLink to={PATHS.RESET_PASSWORD}>Reset password</NavLink></li>
                    <li><NavLink to={PATHS.SET_PASSWORD}>Set password</NavLink></li>
                    <li><NavLink to={PATHS.PROFILE}>Profile</NavLink></li>
                    <li><NavLink to={PATHS.TEST}>Test</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}