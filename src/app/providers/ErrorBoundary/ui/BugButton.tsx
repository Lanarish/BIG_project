import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

// Test component
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation('translation');

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
      <Button onClick={throwError}>
          {t('Throw error')}
      </Button>
  );
};
