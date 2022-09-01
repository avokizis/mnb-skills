import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../index'
// import { MIN_ATTRIBUTE_VALUE, MAX_ATTRIBUTE_VALUE } from '../../config'

import perksDB from '../../database/perks'

export interface IPerksSlice {
  perks: IPerk[],
}

const initialState: IPerksSlice = {
  perks: [],
}

const slice = createSlice({
  name: 'perks',
  initialState,
  reducers: {
    setPerks: (state) => {
      state.perks = [...perksDB]
    },
    selectPerkById: (state, {payload}: PayloadAction<IPerk["id"]>) => {
      const perkIndex = state.perks.findIndex((perk) => perk.id === payload)

      if(~perkIndex) {
        state.perks[perkIndex].selected = true
        state.perks[perkIndex].disabled = false

        if(state.perks[perkIndex].alternativePerk){
          // TODO Оставить только id
          const property = typeof state.perks[perkIndex].alternativePerk === 'number' ? 'id' : 'name'
          const alternativePerkindex = state.perks.findIndex((perk) => perk[property] === (property === 'id' ? state.perks[perkIndex].alternativePerk : `${state.perks[perkIndex].alternativePerk}.name`))

          if(~alternativePerkindex) {
            state.perks[alternativePerkindex].disabled = true
            state.perks[alternativePerkindex].selected = false
          }
        }
      }
    },
    unselectPerkById: (state, {payload}: PayloadAction<IPerk["id"]>) => {
      const perkIndex = state.perks.findIndex((perk) => perk.id === payload)

      if(~perkIndex) {
        state.perks[perkIndex].selected = false

        if(state.perks[perkIndex].alternativePerk){
          // TODO Оставить только id
          const property = typeof state.perks[perkIndex].alternativePerk === 'number' ? 'id' : 'name'
          const alternativePerkindex = state.perks.findIndex((perk) => perk[property] === (property === 'id' ? state.perks[perkIndex].alternativePerk : `${state.perks[perkIndex].alternativePerk}.name`))

          if(~alternativePerkindex) {
            state.perks[alternativePerkindex].disabled = false
          }
        }
      }
    }
  }
})

export const perksSelector = (state: RootState) => state.perks.perks
// TODO 
export const selectPerksBySkillId = (state: RootState, skillId: ISkill['id']) => state.perks.perks.filter(perk => perk.skillId === skillId)

export const { setPerks, selectPerkById, unselectPerkById } = slice.actions

export default slice.reducer