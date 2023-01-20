import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    formData?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props:ProfileCardProps) => {
    const {
        className,
        formData,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Loader />
            </div>

        );
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('profileLoadingError')}
                    text={t('reloadMessage')}
                    align="center"
                />
            </div>

        );
    }

    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div>
                {formData?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={formData.avatar} alt="avatar" />
                    </div>
                ) }
                <Input
                    value={formData?.first}
                    placeholder={t('yourName')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={formData?.lastname}
                    placeholder={t('yourLastname')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={formData?.age}
                    placeholder={t('yourAge')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={formData?.city}
                    placeholder={t('yourCity')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={formData?.username}
                    placeholder={t('yourUsername')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={__PROJECT__ !== 'storybook' ? formData?.avatar : ''}
                    placeholder={t('yourAvatar')}
                    className={styles.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={styles.input}
                    value={formData?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={styles.input}
                    value={formData?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
