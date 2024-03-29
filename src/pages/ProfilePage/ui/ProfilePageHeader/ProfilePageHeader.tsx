import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }:ProfilePageHeaderProps) => {
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(updateProfileData());
        }
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} theme={TextTheme.PRIMARY} />
            { canEdit
            && (
                <div className={styles.btnsWrapper}>
                    {
                        readonly
                            ? (
                                <Button
                                    className={styles.editBtn}
                                    theme={ButtonTheme.OUTLINED}
                                    onClick={onEdit}
                                >
                                    {t('edit')}
                                </Button>
                            )
                            : (
                                <>
                                    <Button
                                        className={styles.editBtn}
                                        theme={ButtonTheme.OUTLINED_RED}
                                        onClick={onCancelEdit}
                                    >
                                        {t('cancel')}
                                    </Button>
                                    <Button
                                        theme={ButtonTheme.OUTLINED}
                                        onClick={onSave}
                                    >
                                        {t('save')}
                                    </Button>
                                </>
                            )
                    }
                </div>
            )}
        </div>
    );
};
