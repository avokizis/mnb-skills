import i18next from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import './App.css'
import en from '../i18n/en'
import ru from '../i18n/ru'

import Skills from '../components/Skills'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
    },
    lng: "en",
    fallbackLng: "en",
  })

function App() {
  return (
    <div className="app">
      <div className="skills-wrap placeholder"><Skills/></div>
      <div className="right-side">
        <div className="level-wrap placeholder">Level</div>
        <div className="filters-wrap placeholder">Filters</div>
        <div className="perks-wrap placeholder">Perks</div>
      </div>
    </div>
  );
}

export default App;