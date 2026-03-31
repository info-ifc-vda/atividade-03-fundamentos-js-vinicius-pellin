function bomDia(nome, hora){
    if(hora >= 0 && hora <=4){
        console.log("Boa madruga e uma ótima " + nome)
    }
    else if(hora >=5 && hora <= 11){
            console.log("bom dia e uma ótima " +nome);
    }
    else if(hora >=12 && hora <= 18){
            console.log("boa tarde e uma ótima " + nome);
    }
    else if(hora >=19 && hora <= 23){
            console.log("boa noite e uma ótima " + nome);
    }
}

const hora =13;
const nome ="terça";

bomDia(nome, hora);
