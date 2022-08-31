import Language from "./Language"

class Perk {
  public key: string
  
  public object: IPerk
  public static skills: ISkill[]

  constructor(id: number, perkString: string) {
    this.key = ''
    this.object = this.parse(perkString)
    this.object.id = id
  }

  private parse(perkString: string) {
    let clearedStr = this.clearingPerkRawStr(perkString)
    const parseMethod = clearedStr.includes('InitializeNew') ? "parseInitializeNew" : "parseInitialize"

    this.key = this.lowercaseFirstLetter(clearedStr.slice(0, clearedStr.indexOf('.')))
    clearedStr = clearedStr.replace(/^.+?\(/, '')

    return this[parseMethod](clearedStr)
  }

  private clearingPerkRawStr(perkString: string) {
    const unnecessaryTextRegex = /}(.+?)"/g

    const unnecessaryTexts = [
      unnecessaryTextRegex,
      "this._oneHanded",
      "this._twoHanded",
      "this._polearm",
      "this._bow",
      "this._crossbow",
      "this._throwing",
      "this._riding",
      "this._athletics",
      "this._crafting",
      "this._tactics",
      "this._scouting",
      "this._roguery",
      "this._leadership",
      "this._charm",
      "this._trade",
      "this._steward",
      "this._medicine",
      "this._engineering",
      "DefaultSkills.",
      "SkillEffect.PerkRole.",
      "SkillEffect.EffectIncrementType.",
      "TroopClassFlag.",
      ");",
      "secondaryTroopClassMask: ",
    ]

    let result = perkString

    unnecessaryTexts.forEach(substr => {
      result = result.replaceAll(substr, '')
    })

    return result
  }
  private parseInitializeNew(str: string): IPerk {
    const splitedStr = str.split(', ')
    
    const result: IPerk = {
      id: 0,
      name: this.getStringId(splitedStr[0]),
      skillId: this.getSkillIdByName(this.lowercaseFirstLetter(splitedStr[1])),
      // @ts-ignore
      requiredSkillValue: this.getRequiredSkillValue(+(splitedStr[2].match(/\((\d+)\)/)[1])),
      alternativePerk: this.lowercaseFirstLetter(splitedStr[3]),
      primaryDescription: this.getStringId(splitedStr[4]),
      primaryRole: splitedStr[5],
      secondaryDescription: this.getStringId(splitedStr[8]),
      secondaryRole: splitedStr[9],
    }

    if(splitedStr[12]) {
      const troopClasses = splitedStr[12].replace('(', '').replace(')', '').split(' | ')

      result.troopClasses = troopClasses
    }

    return result
  }
  private parseInitialize(str: string): IPerk {
    const splitedStr = str.split(', ')

    const result: IPerk = {
      id: 0,
      name: this.getStringId(splitedStr[0]),
      primaryDescription: this.getStringId(splitedStr[1]),
      skillId: this.getSkillIdByName(this.lowercaseFirstLetter(splitedStr[2])),
      // @ts-ignore
      requiredSkillValue: this.getRequiredSkillValue(splitedStr[3].match(/\((\d+)\)/)[1]),
    }

    for (let index = 4; index < splitedStr.length; index++) {
      const value = splitedStr[index];

      switch (true) {
        case !!this.getStringId(value):
          result.secondaryDescription = this.getStringId(value)
          break
        case this.isFloat(value):
        case !!this.isIncrementType(value):
          break
        case !!this.isPerkRole(value) && !!result.primaryRole:
          result.secondaryRole = this.isPerkRole(value)
          break
        case !!this.isPerkRole(value):
          result.primaryRole = this.isPerkRole(value)
          break
      
        default:
          result.alternativePerk = value
          break
      }
    }

    return result
  }


  private lowercaseFirstLetter(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1)
  }
  private getRequiredSkillValue(idx: number) {
    const skillValues = [
        25,
        50,
        75,
        100,
        125,
        150,
        175,
        200,
        225,
        250,
        275,
        300
    ]

    return skillValues[--idx]
  }
  private getStringId(str: string) {
    const stringIdRegex = /{=([\S]+)/
    const match = str.match(stringIdRegex)

    return match ? `{i18n-id}${match[1]}` : ''
  }
  private getSkillIdByName(str: string) {
    return Perk.skills.find(skill => skill.name.replace('.name', '') === str)?.id ?? 0
  }
  private isPerkRole(str: string) {
    const perksRoles = [
      "None",
      "Ruler",
      "ClanLeader",
      "Governor",
      "ArmyCommander",
      "PartyLeader",
      "PartyOwner",
      "Surgeon",
      "Engineer",
      "Scout",
      "Quartermaster",
      "PartyMember",
      "Personal",
      "Captain",
      "NumberOfPerkRoles",
    ]

    return perksRoles.find((role) => str.includes(role))
  }
  private isIncrementType(str: string) {
    const incrementTypes = [
      "Invalid",
      "Add",
      "AddFactor",
    ]

    return incrementTypes.find((role) => str.includes(role))
  }
  private isFloat(str: string) {
    return !!str.match(/\df/)
  }

  public getDBObject() {
    const result: IPerk = {...this.object}
    
    Object.keys(result).forEach((key) => {
      // @ts-ignore
      if(typeof result[key] === 'string' && result[key].includes('{i18n-id}')) {
        // @ts-ignore
        result[key] = `${this.key}.${key}`
      }
    })

    return result
  }

  public geti18nObject(lang: Language) {
      const result = {}

      for (const [key, value] of Object.entries(this.object)) {
        if(typeof value === 'string' && value.includes('{i18n-id}')) {
          // @ts-ignore
          result[key] = lang.getStringById(value.replace('{i18n-id}', ''))
          // @ts-ignore
          if(result[key] === '') {
            console.warn(`Not found | ${key} | ${lang.key}-translate from perk.id=${this.object.id}`)
          }
        }
      }

      return result
  }

  public static setSkills(skills: ISkill[]) {
    this.skills = skills
  }
}

export default Perk