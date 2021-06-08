export interface IPokemon {
    name: string;
    hp:number;
    speed:number;
    attack:number;
    defense:number;
}

export class Pokemon implements IPokemon{
    name: string;
    hp:number;
    attack: number;
    speed: number;
    defense: number;
    constructor(props:IPokemon) {
        this.name = props.name;
        this.hp = props.hp;
        this.speed = props.speed;
        this.attack = props.attack
        this.defense = props.defense;
    }

    private _attack = "attack";

     attack1(poke1: Pokemon):number {
        return (poke1.hp -= this.calculateAttack(poke1)) > 0 ? poke1.hp : 0;

    }

    static WhichShouldAttack(poke1: Pokemon, poke2: Pokemon):Pokemon {
        return poke1.speed >= poke2.speed ? poke1 : poke2;
    }

    private calculateAttack(poke1: Pokemon):number {
        return (this.attack/1+(poke1.defense/5));
    }

    attack2(poke1: Pokemon):number {
        return (poke1.hp -= (this.calculateAttack(poke1))*1.2) > 0 ? poke1.hp : 0;
    }
    attack3(poke1: Pokemon):number {
        return (poke1.hp -= (this.calculateAttack(poke1))*1.3) > 0 ? poke1.hp : 0;
    }
    attack4(poke1: Pokemon):number {
        return (poke1.hp -= (this.calculateAttack(poke1))*1.5) > 0 ? poke1.hp : 0;
    }
    async randomAttack(poke1: Pokemon,forcedNumber?:number): Promise<number> {
        if (this.hp > 0) {
            let randomAttack = this.returnAttackUsed(forcedNumber);
            // let promise = await new Promise(resolve => setTimeout(resolve, 1000));
            let result: any;
            // @ts-ignore
            result = this[randomAttack](poke1);
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(result)
                }, 1000);
            });
        } else {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(0)
                }, 1000);
            });

        }
    }




    private returnAttackUsed(forcedNumber?:number):string{
         if(forcedNumber !== undefined && forcedNumber < 5 && forcedNumber > 0)
             return this._attack + forcedNumber;
        let attack = this._attack;
        attack += Math.floor(Math.random()*4) + 1;
        return attack;
    }
}