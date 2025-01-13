// Adaptei a premissa de ter uma propriedade para Idade (age) e usei uma propriedade para determinar o nível do herói (lvl); creio que faz mais sentido para o desafio "Escrevendo as Classes de Um Jogo". 

class MyHero{
    constructor(name, lvl, type){
        this.name = name;
        this.lvl = lvl;
        this.type = {};
        
        switch (type) {
          case 'Guerreiro':
            this.type = (`Guerreiro ${this.name} atacou usando espada!`)
            break;
          case 'Monge':
            this.type = (`Monge nível ${this.lvl} ${this.name} atacou usando artes marciais!`)
            break;
          case 'Mago':
            this.type = (`Mago ${this.name} atacou usando magia!`)
            break;
          case 'Ninja':
            this.type = (`Ninja ${this.name} atacou usando shuriken!`)
            break;          
          default:
            this.type = ("|Olá, herói! Coloque seu nome, nível e tipo corretamente, por favor.|")
        }
    }
  attack() {
    console.log(`${this.type}\n`)
  };
}

const hero1 = new MyHero("Raph", 34, "Guerreiro");
hero1.attack();

const hero2 = new MyHero("Azaal", 26, "Arqueiro");
hero2.attack();

const hero3 = new MyHero("Cayo", 5, "Monge")
hero3.attack()
