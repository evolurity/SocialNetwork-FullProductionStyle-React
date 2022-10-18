import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink to={'/'} className={styles.mainLink}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
