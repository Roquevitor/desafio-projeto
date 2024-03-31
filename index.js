//criar uma variavel para armazenar o nome e  quantidade de experiência (XP) de um herói, depois ultilizar uma estrutura de decisão para apresentar.

let heroiFelipaoXp = 9.500;

switch (true) {
    case heroiFelipaoXp <= 1.000:
        console.log("Ferro");
        break;
    case heroiFelipaoXp  <= 2.000:
        console.log("Bronze");
        break;
        case heroiFelipaoXp  <= 5.000:
        console.log("Prata");
        break;
        case heroiFelipaoXp  <= 7.000:
        console.log("Ouro");
        break;
        case heroiFelipaoXp  <= 8.000:
        console.log("Platina");
        break;
        case heroiFelipaoXp  <= 9.000:
        console.log("Diamante");
        break;
        case heroiFelipaoXp  <= 10.500:
        console.log("Acendente");
        break;
        case heroiFelipaoXp  <= 11.500:
        console.log("imortal");
        break;
        case heroiFelipaoXp  >= 11.501:
        console.log("Radiante");
        break;
}

//explicando o código

// 1º) - A variavel "heroiFelipãoXp" atribuo a ela o valor de 9.500, esse valor representa a experiência do herói chamado "felipão".

// 2°) - O 'Switch' avalia a espressão 'true' e executa o bloco de código
 
// 3°) - Na maioria dos 'case' ele verifica se o 'heroiFelipaoXp' é menor ou igual o valor declarado na 'case'. porem na penultima 'case', ele varifica se o valor é maior ou igual o --
// - valor declarado da 'case'. Por fim, se uma das case for verdadeiro ele executa 'console.log()' e o 'breack' para sair da 'swiitch'.

 

