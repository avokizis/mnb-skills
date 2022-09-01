import i18next from 'i18next'
import React, { useEffect } from 'react'
import { initReactI18next } from 'react-i18next'
import './App.css'
import en from '../i18n/en'
import ru from '../i18n/ru'

import Skills from '../components/Skills'
import styled from '@emotion/styled'
import routes from '../router'
import { useRoutes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSkills } from '../store/slices/skills'
import { attributesSelector, setAttributes } from '../store/slices/attributes'
import { setPerks } from '../store/slices/perks'

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
  const dispatch = useDispatch()

  const attributes = useSelector(attributesSelector)
  const routeList = useRoutes(routes)

  useEffect(() => {
    if(!attributes.length) {
      dispatch(setAttributes())
      dispatch(setSkills())
      dispatch(setPerks())
    }
  })

  return (
    <div className="app">
      <Header>        
        <div className="placeholder">lang</div>
        <div className="placeholder">Level</div>
        <div className="placeholder">Filters</div>
      </Header>
      <Content>
        <SkillsStyled/>
        <PageStyled>        
            {routeList}
        </PageStyled>
      </Content>
      <Footer>
        <div className="placeholder">Native 1.8.0</div>
        <div className="placeholder">Git link</div>
      </Footer>
    </div>
  );
}



const SkillsStyled = styled(Skills)``
const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 10;
`
const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 10;
  padding: 4px;
`
const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 4px 16px;
`

export default App;