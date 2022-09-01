import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { selectPerkById, unselectPerkById } from "../store/slices/perks"

export interface IPerkProps {
  perk: IPerk,
}

const Perk = (props: IPerkProps) => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  
  const perk = props.perk

  const onClickWrapper = (event: any) => {
    if(perk.selected) {
      dispatch(unselectPerkById(perk.id))
    } else {
      dispatch(selectPerkById(perk.id))
    }
  }

  return (
    <Wrapper disabled={!!perk.disabled} selected={!!perk.selected} onClick={onClickWrapper}>
      {t(`perks.${perk.name}`)}
    </Wrapper>
  )
}

const Wrapper = styled.div<{disabled: boolean, selected: boolean}>`
  border: 1px solid;
  padding: 4px;
  cursor: pointer;

  background-color: ${props => (props.disabled && 'red') || (props.selected && 'green')};
`

export default Perk