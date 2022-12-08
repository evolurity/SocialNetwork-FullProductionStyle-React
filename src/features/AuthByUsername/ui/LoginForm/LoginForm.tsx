import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('loginForm')} theme={TextTheme.PRIMARY} />
            {error && <Text text={t('wrongInput')} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={styles.input}
                placeholder={t('enterUsername')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={styles.input}
                placeholder={t('enterPassword')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINED}
                className={styles.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('login')}
            </Button>
        </div>
    );
});
