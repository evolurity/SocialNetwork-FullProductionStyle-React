import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const isAuth = useSelector(getUserAuthData);

    const sidebarItemActiveList = useMemo(() => SidebarItemsList.filter((item) => {
        if (!isAuth && item.authOnly) {
            return false;
        }
        return item;
    }), [isAuth]);

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
                {sidebarItemActiveList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />)}
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
});
