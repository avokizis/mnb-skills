import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import Perks from "../components/Perks"
import { RootState } from "../store"
import { selectSkillById } from "../store/slices/skills"

const Home = () => {
  const [searchParams] = useSearchParams()
  const {t} = useTranslation()

  const skillId = searchParams.get('selectedSkill')
  const skill = useSelector((state: RootState) => {
    return skillId ? selectSkillById(state, +skillId) : null
  })

  const translateSkillString = (key = '') => {
    return key.length ? t(`skills.${key}`) : ''
  }

  const perksBlock = skill?.id ? <Perks skillId={skill?.id}/> : <div/>

  return (
    <div>
      <SkillDescription>
        <p><b>{translateSkillString(skill?.name)}</b></p>
        <p>{translateSkillString(skill?.description)}</p>
      </SkillDescription>
      
      {perksBlock}
    </div>
  )
}

const SkillDescription = styled.div`
  padding: 0 4px;
  border: 1px solid;
  margin: 12px 0;
`

export default Home