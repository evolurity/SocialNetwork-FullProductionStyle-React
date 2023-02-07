import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useEffect } from 'react';
import { fetchByArticleId } from 'entities/Article/model/services/fetchByArticleId/fetchByArticleId';
import { useSelector } from 'react-redux';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';

import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleBlock } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case 'CODE':
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        );
    case 'IMAGE':
        return (
            <ArticleImageBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        );

    case 'TEXT':
        return (
            <ArticleTextBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        );
    default:
        return null;
    }
};

export const ArticleDetails = memo(({ id, className }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);
    let content;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchByArticleId(id));
        }
    }, [dispatch, id]);

    if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </>
        );
    }

    if (error) {
        content = (<Text theme={TextTheme.ERROR} title={t('fetchArticleError')} align="center" />);
    }

    if (!error && !isLoading) {
        content = (
            <>
                <div className={styles.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={styles.avatar} />
                </div>
                <Text className={styles.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon className={styles.icon} Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
