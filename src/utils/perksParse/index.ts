import skills from '../../database/skills'
import Language from './Language'
import Perk from './Perk'
import Perks from './Perks'
import perksRaw from './perksRaw'

const langsFiles = [
  {
    key: 'en',
    filePath: require('./langs/en.xml')
  },
  {
    key: 'ru',
    filePath: require('./langs/ru.xml')
  },
]

export const parsePerks = () => {  
  const languages = langsFiles.map(({key, filePath}) => new Language(key, filePath))
  
  Perk.setSkills(skills)

  const perks = new Perks(perksRaw)

  console.log(perks.getDatabaseFile())

  perks.geti18nFiles(languages).forEach(lang => {
    console.log(lang.lang, lang.file)
  })
}