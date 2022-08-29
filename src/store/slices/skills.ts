import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../index'
import { MIN_SKILL_POINTS, MAX_SKILL_POINTS, SKILL_VALUE_ADDED_BY_ARRIBUTE, SKILL_VALUE_ADDED_BY_POINT } from '../../config'

import skillsDB from '../../database/skills'

export interface ISkillSlice {
  skills: ISkill[] | any[],
  points: number,
}

const initialState: ISkillSlice = {
  skills: [],
  points: 50,
}

const slice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state) => {
      state.skills = skillsDB.map((skill) => ({...skill, value: 0, points: 0}))
    },
    incrementSkillPointsById: (state, {payload}: PayloadAction<number>) => {
      const index = state.skills.findIndex(({id}) => id === payload)

      if(index !== -1 && state.points && state.skills[index].points < MAX_SKILL_POINTS) {
        state.skills[index].points++
        state.points--
      }
    },
    decrementSkillPointsById: (state, {payload}: PayloadAction<number>) => {
      const index = state.skills.findIndex(({id}) => id === payload)

      if(index !== -1 && state.skills[index].points > MIN_SKILL_POINTS) {
        state.skills[index].points--
        state.points++
      }
    }
  }
})

export const skillsSelector = (state: RootState) => {
  const skills = state.skills.skills.map((skill) => {
    const attribute = state.attributes.attributes.find(({id}) => id === skill.attributeId)

    const valueAddedByAttribute = (attribute.value - 1) * SKILL_VALUE_ADDED_BY_ARRIBUTE
    const valueAddedByPoints = skill.points * SKILL_VALUE_ADDED_BY_POINT
    const value = valueAddedByAttribute + valueAddedByPoints

    return {...skill, value}
  })

  return skills
}
export const skillsPointsSelector = (state: RootState) => state.skills.points

export const { setSkills, incrementSkillPointsById, decrementSkillPointsById } = slice.actions

export default slice.reducer