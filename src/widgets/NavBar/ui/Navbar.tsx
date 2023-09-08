import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Увійти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid aperiam architecto,
                assumenda corporis culpa cum doloribus eaque
                hic magnam nisi nulla omnis perspiciatis quae similique
                soluta veniam veritatis, vero voluptas.
            </Modal>
        </div>
    );
};
