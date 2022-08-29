import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { decrementSkillPointsById, incrementSkillPointsById } from "../store/slices/skills"

export interface ISkillProps {
  skill: ISkill
}

const Skill = ({skill}: ISkillProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return(
    <Wrapper>
      <div>{t(`skills.${skill.name}`)}</div>
      <div>{skill.value}</div>
      <PointsWrap>
        <Button onClick={(e) => dispatch(decrementSkillPointsById(skill.id))}>-</Button>
        <div>{skill.points}</div>
        <Button onClick={(e) => dispatch(incrementSkillPointsById(skill.id))}>+</Button>
      </PointsWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  margin-left: 4px;
  width: 100px;
`
const PointsWrap = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Button = styled.button``


export default Skill