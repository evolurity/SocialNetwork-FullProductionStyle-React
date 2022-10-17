import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to={'/'} className={styles.mainLink}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
