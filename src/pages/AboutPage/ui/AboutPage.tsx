import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t, i18n } = useTranslation('about');
  return (
      <div>
          {t('About page')}
      </div>
  );
}

export default AboutPage;
