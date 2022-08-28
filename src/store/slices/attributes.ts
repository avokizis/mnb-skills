import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../index'
import { MIN_ATTRIBUTE_VALUE, MAX_ATTRIBUTE_VALUE } from '../../config'

import attributesDB from '../../database/attributes'

export interface IAttributeSlice {
  attributes: IAttribute[] | any[],
  points: number,
}

const initialState: IAttributeSlice = {
  attributes: [],
  points: 50,
}

const slice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    setAttributes: (state) => {
      state.attributes = attributesDB.map((attribute) => ({...attribute, value: MIN_ATTRIBUTE_VALUE}))
    },
    incrementAttributeById: (state, {payload}: PayloadAction<number>) => {
      const index = state.attributes.findIndex(({id}) => id === payload)

      if(index !== -1 && state.points && state.attributes[index].value < MAX_ATTRIBUTE_VALUE) {
        state.attributes[index].value++
        state.points--
      }
    },
    decrementAttributeById: (state, {payload}: PayloadAction<number>) => {
      const index = state.attributes.findIndex(({id}) => id === payload)

      if(index !== -1 && state.attributes[index].value > MIN_ATTRIBUTE_VALUE) {
        state.attributes[index].value--
        state.points++
      }
    }
  }
})

export const attributesSelector = (state: RootState) => state.attributes.attributes
export const attributesPointsSelector = (state: RootState) => state.attributes.points

export const { setAttributes, incrementAttributeById, decrementAttributeById } = slice.actions

export default slice.reducer