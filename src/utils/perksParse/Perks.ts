import Language from "./Language"
import Perk from "./Perk"

class Perks {
  public array: Perk[]

  constructor(perksRaw: string[]) {
    this.array = this.initPerks(perksRaw)
  }

  private initPerks(perksRaw: string[]) {
    const perks = perksRaw.map((perk, index) => new Perk(++index, perk))

    return perks
  }

  public getDatabaseFile() {
    return this.array.map(perk => perk.getDBObject())
  }

  public geti18nFiles(languages: Language[]) {
    return languages.map(lang => ({
      lang: lang.key,
      file:  Object.fromEntries(this.array.map((perk) => {
          return [perk.key, perk.geti18nObject(lang)]
        }))
    }))
  }
}

export default Perks