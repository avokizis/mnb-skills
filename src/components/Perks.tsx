import styled from "@emotion/styled"
import { useSelector } from "react-redux"
import { REQUIRED_SKILL_VALUES } from "../config"
import { RootState } from "../store"
import { selectPerksBySkillId } from "../store/slices/perks"
import Perk from "./Perk"

export interface IPerksProps {
  skillId: ISkill['id']
}

const Perks = (props: IPerksProps) => {
  const perks = useSelector((state: RootState) => selectPerksBySkillId(state, props.skillId))

  const skillValuesList = REQUIRED_SKILL_VALUES.map(value => {
    const perksFromValue = perks.filter(perk => perk.requiredSkillValue === value)
    const perksList = perksFromValue.map(perk => <Perk perk={perk} key={perk.id}/>)

    return (
      <SkillValueWrapper key={value}>
        {value}
        {perksList}
      </SkillValueWrapper>
    )
  })
  // const perksList = perks.map(perk => <Perk perk={perk} key={perk.id}/>)

  return (
    <Wrapper>
      {skillValuesList}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid;
  padding: 4px;
`
const SkillValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dotted;
  padding: 4px;
`

export default Perks