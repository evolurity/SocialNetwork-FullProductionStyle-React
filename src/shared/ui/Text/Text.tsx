import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({
    className, title, text, theme, align = 'left',
}:TextProps) => (
    <div className={classNames(styles.Text, {}, [className, styles[theme], styles[align]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
