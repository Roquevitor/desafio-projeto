//criar uma variavel para armazenar o nome e -
// quantidade de experiência (XP) de um herói - 
// depois ultilizar uma estrutura de decisão para -
// apresentar.

let heroiFelipaoXp = 8.500;
let resultado = ""

switch  (true) { 

    case heroiFelipaoXp <= 1.000:
         resultado = "Ferro"
        break;
    case heroiFelipaoXp  <= 2.000:
        resultado = "Bronze";
        break;
        case heroiFelipaoXp  <= 5.000:
        resultado ="Prata";
        break;
        case heroiFelipaoXp  <= 7.000:
        resultado ="Ouro";
        break;
        case heroiFelipaoXp  <= 8.000:
        resultado ="Platina";
        break;
        case heroiFelipaoXp  <= 9.000:
        resultado= "Diamante";
        break;
        case heroiFelipaoXp  <= 10.500:
        resultado ="Acendente";
        break;
        case heroiFelipaoXp  <= 11.500:
        resultado ="imortal";
        break;
        case heroiFelipaoXp  >= 11.501:
        resultado ="Radiante";
        break;
    }
    console.log("O heroi esta no nivel " + resultado)

//explicando o código

// 1º) - A variavel "heroiFelipãoXp" atribuo a ela o valor de 9.500, 
// - esse valor representa a experiência do herói chamado "felipão".
//____________________________________________________________________

// 2°) - O 'Switch' avalia a espressão 'true' e executa o bloco de código
 
// 3°) - Na maioria dos 'case' ele verifica se o 'heroiFelipaoXp' --
// - é menor ou igual o valor declarado na 'case'. porem na --
// - penultima 'case', ele varifica se o valor é maior ou igual o --
// - valor declarado da 'case'. Se uma das case for verdadeiro --
// - ele executa 'console.log()' e o 'breack' para sair da 'swiitch'.
//_____________________________________________________________________________
 

