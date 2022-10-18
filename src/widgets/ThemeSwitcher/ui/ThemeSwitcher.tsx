import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import React from "react";
import {useTheme} from "shared/hooks/useTheme";
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import {Theme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};