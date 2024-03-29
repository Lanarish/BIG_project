import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation('main');
  return (
      <div>
          <BugButton />
          {t('Main page')}
      </div>
  );
};

export default MainPage;
