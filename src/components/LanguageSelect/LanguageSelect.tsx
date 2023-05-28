import React from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageSelect.scss';

const LanguageSelect: React.FunctionComponent = () => {
  const { i18n } = useTranslation();

  return (
    <div className="select-wrapper">
      <select
        name="language"
        className="select"
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
