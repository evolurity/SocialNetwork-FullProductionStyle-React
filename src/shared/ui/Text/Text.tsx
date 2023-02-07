import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextSize {
    M = 'size_M',
    L = 'size_L',
}

export type TextAlign = 'right' | 'left' | 'center';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    size?: TextSize;
    align?: TextAlign;
}

export const Text = memo(({
    className, title, text, theme = TextTheme.PRIMARY, align = 'left', size = TextSize.M,
}:TextProps) => (
    <div
        className={classNames(
            styles.Text,
            {},
            [className, styles[theme], styles[size], styles[align]],
        )}
    >
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
    </div>
));
