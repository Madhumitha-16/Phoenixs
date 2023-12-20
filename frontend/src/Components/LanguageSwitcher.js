import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Styles/Home.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher" style={{ display: 'flex', alignItems: 'center', paddingTop:'10px'}}>
      <button style={{ backgroundColor: 'rgb(245, 107, 16)', borderRadius: '10px', marginRight: '10px' ,marginTop:'2px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={() => changeLanguage('en')}>English</button>
      <button style={{ backgroundColor: 'rgb(245, 107, 16)', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={() => changeLanguage('hi')}>हिंदी</button>
      {/* Add more language buttons as needed */}
    </div>
  );
}

export default LanguageSwitcher;
