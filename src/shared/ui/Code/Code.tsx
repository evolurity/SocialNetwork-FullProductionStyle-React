import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({ className, text }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <Button onClick={onCopy} className={styles.copyBtn} theme={ButtonTheme.CLEAR}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
