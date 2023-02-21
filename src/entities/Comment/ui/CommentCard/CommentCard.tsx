import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';

import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={styles.username} height={16} width={100} />
                </div>
                <Skeleton className={styles.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <div className={styles.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text className={styles.username} title={comment?.user.username} />
            </div>
            <Text className={styles.text} text={comment?.text} />
        </div>
    );
};
