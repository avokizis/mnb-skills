import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { decrementSkillPointsById, incrementSkillPointsById } from "../store/slices/skills"

export interface ISkillProps {
  skill: ISkill
}

const Skill = ({skill}: ISkillProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const navigate = useNavigate()

  const onClickIncrement = (event: any) => {
    dispatch(incrementSkillPointsById(skill.id))

    event.stopPropagation()
  }
  const onClickDecrement = (event: any) => {
    dispatch(decrementSkillPointsById(skill.id))

    event.stopPropagation()
  }

  const onClickWrapper = (event: any) => {
    navigate(`/home?selectedSkill=${skill.id}`)
  }

  return(
    <Wrapper onClick={onClickWrapper}>
      <div>{t(`skills.${skill.name}`)}</div>
      <div>{skill.value}</div>
      <PointsWrap>
        <Button onClick={onClickDecrement}>-</Button>
        <div>{skill.points}</div>
        <Button onClick={onClickIncrement}>+</Button>
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