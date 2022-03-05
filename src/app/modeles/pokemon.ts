export interface IPokemon {
  name: string;
  hp: number;
  speed: number;
  attack: number;
  defense: number;
  primaryAttachName: string;
  secondaryAttackName: string;
  thirdAttackName: string;
  fourthAttackName: string;
  color?: string;
  defaultImagePath?: string;
  initialHP?: number;
}
export class Pokemon implements IPokemon {
  name: string;
  hp: number;
  attack: number;
  speed: number;
  defense: number;
  primaryAttachName: string;
  secondaryAttackName: string;
  thirdAttackName: string;
  fourthAttackName: string;
  color?: string;
  defaultImagePath?: string;
  initialHp?: number;

  constructor(props: IPokemon)

export class Pokemon implements IPokemon {
  name: string;
  hp: number;
  attack: number;
  speed: number;
  defense: number;
  primaryAttachName: string;
  secondaryAttackName: string;
  thirdAttackName: string;
  fourthAttackName: string;
  color?: string;
  defaultImagePath?: string;
  initialHp?: number;

  constructor(props: IPokemon) {
    this.name = props.name;

    this.defaultImagePath = props.defaultImagePath;
    this.initialHp = props.hp;

  }


}
