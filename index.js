class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        
        // Verifica o tipo do herói e define o tipo de ataque correspondente
        switch(this.tipo) {
            case "Monge":
                ataque = "artes marciais";
                break;
            case "Guerreiro":
                ataque = "espada";
                break;
            case "Mago":
                ataque = "magia";
                break;
            case "Ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }
        
        // Exibe a mensagem com o tipo de ataque realizado
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}


const heroi1 = new hero("João", 25, "Guerreiro");
heroi1.atacar(); 

const heroi2 = new hero("Maria", 30, "Mago");
heroi2.atacar(); 