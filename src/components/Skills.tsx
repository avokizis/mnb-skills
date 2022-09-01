import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { attributesPointsSelector, attributesSelector } from '../store/slices/attributes'
import { skillsPointsSelector, skillsSelector } from '../store/slices/skills'
import Attribute from './Attribute'
import Skill from './Skill'

const Skills = () => {
  const { t } = useTranslation()

  const attributes = useSelector(attributesSelector)
  const attributesPoints = useSelector(attributesPointsSelector)

  const skills = useSelector(skillsSelector)
  const skillsPoints = useSelector(skillsPointsSelector)

  const listAttributes = attributes.map((attribute) => {
    const listSkills = skills.filter(({attributeId}) => attributeId === attribute.id).map((skill) => 
      <Skill skill={skill} key={skill.id}/>
    )

    return(
      <AttributeRow key={attribute.id}>
        <Attribute attribute={attribute}/>
        {listSkills}
      </AttributeRow>
    )
  }
  )

  return (
    <Wrapper>
      <SkillsHeader>
        <Points>{attributesPoints}</Points>
        <SkillsHeaderTitle>{t('general.skills')}</SkillsHeaderTitle>
        <Points>{skillsPoints}</Points>
      </SkillsHeader>

      <SkillsBody>
        {listAttributes}
      </SkillsBody>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 4px;
`
const SkillsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const Points = styled.div`
`
const SkillsHeaderTitle = styled.div`
`

const SkillsBody = styled.div`
  display: flex;
  flex-direction: column;
`

const AttributeRow = styled.div`
  display: flex;

  margin: 4px 0;
`

export default Skills