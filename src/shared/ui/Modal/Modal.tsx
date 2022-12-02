import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}:ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, ANIMATION_DELAY);
        }
        return () => {
            setIsOpening(false);
        };
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen && isOpening,
        [styles.isClosing]: isClosing,
    };
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
                setIsMounted(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearInterval(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
