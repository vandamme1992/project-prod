import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/about-icon.svg';
import AboutIcon from 'shared/assets/icons/main-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={cls.items}>
                <div className={cls.item}>

                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                        <MainIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Головна сторінка')}
                        </span>
                    </AppLink>
                </div>

                <div className={cls.item}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                        <AboutIcon className={cls.icon} />
                        <span className={cls.link}>
                            {t('Про сайт')}
                        </span>
                    </AppLink>
                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
