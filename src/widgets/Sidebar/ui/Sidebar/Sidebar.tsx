import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }:SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('mainLink')}
                    </span>
                </AppLink>
                <AppLink
                    className={styles.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('aboutLink')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={styles.lang}
                />
            </div>
        </div>
    );
}
