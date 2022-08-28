import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { decrementAttributeById, incrementAttributeById } from '../store/slices/attributes'

export interface IAttributeProps {
  attribute: IAttribute,
}

const Attribute = ({attribute}: IAttributeProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <Wrapper>
      <AttributeTag>{t(`attributes.${attribute.tag}`)}</AttributeTag>
      <AttributeValue>{attribute.value}</AttributeValue>
      <Buttons>
        <Button onClick={(e) => dispatch(decrementAttributeById(attribute.id))}>-</Button>
        <Button onClick={(e) => dispatch(incrementAttributeById(attribute.id))}>+</Button>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
`
const AttributeTag = styled.span`
  text-transform: uppercase;
`
const AttributeValue = styled.span``
const Buttons = styled.div`
  display: flex;
`
const Button = styled.button``

export default Attribute