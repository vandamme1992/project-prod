import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                <div className={cls.header}>
                    <Text title={t('Профіль')} />
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                    >
                        {t('Редагувати')}
                    </Button>
                </div>
                <div className={cls.data}>
                    <Input
                        value={data?.first}
                        placeholder={t("Ваше ім'я")}
                        className={cls.input}
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Ваше прізвище')}
                        className={cls.input}
                    />
                </div>
            </div>
        </div>
    );
};
