interface IAttribute {
  id: number,
  name: string,
  tag: string,
  value?: number,
}

interface ISkill {
  id: number,
  name: string,
  description: string,
  attributeId: number,
  value?: number,
  points?: number,
}

interface IPerk {
  id: number,
  name: string,
  requiredSkillValue: number,
  skillId: number,
  alternativePerk?: number | string,
  primaryDescription: string,
  primaryRole?: PerkRole | string,
  secondaryDescription?: string,
  secondaryRole?: PerkRole | string,
  troopClasses?: string[],
  selected?: boolean,
  disabled?: boolean,
}

enum PerkRole {
  None = "None",
  Ruler = "Ruler",
  ClanLeader = "ClanLeader",
  Governor = "Governor",
  ArmyCommander = "ArmyCommander",
  PartyLeader = "PartyLeader",
  PartyOwner = "PartyOwner",
  Surgeon = "Surgeon",
  Engineer = "Engineer",
  Scout = "Scout",
  Quartermaster = "Quartermaster",
  PartyMember = "PartyMember",
  Personal = "Personal",
  Captain = "Captain",
  NumberOfPerkRoles = "NumberOfPerkRoles",
}