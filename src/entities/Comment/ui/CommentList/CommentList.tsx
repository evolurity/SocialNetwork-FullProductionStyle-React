import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            className={styles.comment}
                            comment={comment}
                            isLoading={isLoading}
                        />
                    ))
                    : <Text text={t('commentsDoNotExists')} />
            }
        </div>
    );
};
