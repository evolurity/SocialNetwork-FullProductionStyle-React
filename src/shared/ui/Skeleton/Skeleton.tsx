import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
    className?: string;
}

export const Skeleton = ({
    className, height, width, border,
}: SkeletonProps) => {
    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div style={style} className={classNames(styles.Skeleton, {}, [className])} />
    );
};
