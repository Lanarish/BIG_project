import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string,
}

export function Sidebar({ className }:SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t, i18n } = useTranslation('main');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button onClick={onToggle}>{t('toggle')}</Button>

          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} />

          </div>
      </div>
  );
}
