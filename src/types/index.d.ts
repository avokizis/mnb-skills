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
