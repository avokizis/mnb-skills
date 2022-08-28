import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { attributesPointsSelector, attributesSelector, setAttributes } from '../store/slices/attributes'
import Attribute from './Attribute'

const Skills = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const attributes = useSelector(attributesSelector)
  const attributesPoints = useSelector(attributesPointsSelector)

  const listAttributes = attributes.map((attribute) => 
    <AttributeRow key={attribute.id}>
      <Attribute attribute={attribute}/>
    </AttributeRow>
  )

  useEffect(() => {
    if(!attributes.length) {
      dispatch(setAttributes())
    }
  })

  return (
    <Wrapper>
      <SkillsHeader>
        <Points>{attributesPoints}</Points>
        <SkillsHeaderTitle>{t('general.skills')}</SkillsHeaderTitle>
        <Points>11</Points>
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