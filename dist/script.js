//Preciso criar uma lista com os três jogadores
personagemJogador = ["","",""];

viloesComputador = ["", "", ""];

forcaPersonagem = 0;
forcaViloes = 0;
alert ("0 array PersonagemJogador contém: " + personagemJogador)
for(let i=0; i<3; i++){
  escolhaPersonagem = prompt ("Digite o nome do seu personagem " + (i + 1))
  personagemJogador[i] = escolhaPersonagem;
  
  //Calcular a força de cada jogador, e depois somar pra saber a força do time.
  forcaPersonagem = forcaPersonagem + Math.floor(Math.random () * 10) + 1
  //  forcaPersonagem += Math.floor(Math.random () * 10) + 1 //Outra maneira de fazer a mesma coisa.
  
}
console.log ("Agora o Array PersonagemJogador contém : " + personagemJogador)
console.log("Início Vilões: " + viloesComputador)

for (let i=0; i<3; i++){
  indiceAleatorio = Math.floor(Math.random () * 5) 
  viloesPossiveis = ["Nazaré Tedesco", "Odete Roitmann", "Flora", "Carminha", "Bia Falcão"]
  viloesComputador[i] = viloesPossiveis [indiceAleatorio]
  
  //Calcular a força de cada jogador do time do computador.
    forcaViloes = forcaViloes + Math.floor(Math.random () * 10) + 1
  
  
}
console.log ("Final Vilões: " + viloesComputador)


//Comparar os dois times para saber quem venceu.

if (forcaPersonagem > forcaViloes){
  alert("Seu time é mais forte! Você ganhou o cabo de guerra. Sua força foi: " + forcaPersonagem + " e a força do computador foi: " + forcaViloes)
}
else {
  if (forcaPersonagem < forcaViloes){
    alert ("Seu time é mais fraco! Você perdeu o cabo de guerra. Sua força foi: " + forcaPersonagem + " e a força do computador foi: " + forcaViloes)
  }
  else {
    if (forcaPersonagem == forcaViloes){
      alert ("Os dois times tem a mesma fprça! Vocês empataram. Sua força foi: " + forcaPersonagem + " e a força do computador foi: " + forcaViloes)
    }
    
  }
}