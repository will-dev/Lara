const memory = document.getElementById('memoryImage');
const changeL = document.getElementById('changeLeft');
const changeR = document.getElementById('changeRight');
const text = document.getElementById('txt')
const image0 = 'memories/image0.png';
const image1 = 'memories/image1.png';
const image2 = 'memories/image2.png';
const image3 = 'memories/image3.png';
const image4 = 'memories/image4.png';
const image5 = 'memories/image5.png';
const image6 = 'memories/image6.png';
const image7 = 'memories/image7.png';
const image8 = 'memories/image8.png';
const image9 = 'memories/image9.png';
const image10 = 'memories/image10.png';
const image11 = 'memories/image11.png';
const image12 = 'memories/image12.png';
const image13 = 'memories/image13.png';
const image14 = 'memories/image14.png';
const image15 = 'memories/image15.png';
const image16 = 'memories/image16.png';
const image17 = 'memories/image17.png';
const image18 = 'memories/image18.png';
const image19 = 'memories/image19.png';
const image20 = 'memories/image20.png';
const image21 = 'memories/image21.png';
const image22 = 'memories/image22.png';
const image23 = 'memories/image23.png';
const image24 = 'memories/image24.png';
const image25 = 'memories/image25.png';
const image26 = 'memories/image26.png';
const image27 = 'memories/image27.png';
const image28 = 'memories/image28.png';
const image29 = 'memories/image29.png';
const image30 = 'memories/image30.png';
const image31 = 'memories/image31.png';
const image32 = 'memories/image32.png';
const image33 = 'memories/image33.png';
const image34 = 'memories/image34.png';
const image35 = 'memories/image35.png';
const image36 = 'memories/image36.png';
const text0 = "Para começar, uma doce memória de nossas aventuras.\nLembro muito bem como se fosse ontem, cada vez que nos perdemos e rolos que entramos... Muito bom kk.\nEspero que possamos ter essa oportunidade novamente.";
const text1 = "O primeiro jogo que zeramos juntos, primeiro de muitos que ainda vamos zerar.\nAinda vamos fazer a speedrun, né? Não precisa ser tão cedo, podemos fazer quando estivermos juntinhos (:";
const text2 = "Essa não poderia faltar kk.\nÉ sempre uma honra ter você em minha vida. A única razão para eu ser feliz hoje é porque tenho a melhor amiga que eu poderia ter, é porque tenho você.";
const text3 = "Foi por aqui que começamos a nos abrir, não é mesmo? Ainda bem que começamos a nos abrir. Mesmo estando distantes e tendo que sofrer um poquinho, ainda acho que foi bem melhor assim.\nEspero ansiosamente por quando formos recomeçar isso porém pessoalmente. Poder dizer tudo que já disse e mais um pouco olhando nos seus olhos...";
const text4 = "Ai, esse dia foi muito bom! Sorrio só de lembrar de você diminuindo no horizonte enquanto eu pensava sobre estar sendo deixado por ti kk.\n'Ela vai mesmo me deixar aqui sozinho?' kk";
const text5 = "Pelo menos agora acho que não é preciso colocar em números para você saber. Mas se for preciso, 10/10. Posso ficar repetindo o quanto gosto de ti eternamente.";
const text6 = "Acredita que fazíamos isso desde o começo? kk Sempre esteve em nosso cerne enrolarmos para ficarmos juntos kk. Principalmente você, sua teimosa.";
const text7 = "Esse ano também completamos um ano de casados kk (:\nVocê quase me rejeito no meio do altar... Pelo menos deu tudo certo no final kk";
const text8 = "Lembra quando eu fiquei até tarde da noite procurando todos os verbos que gostaria de fazer contigo?\nAiai, eu sou muito doido... (doidinho por você)";
const text9 = "Ainda não acredito no quão surpresa ficou por eu ter dito que queria o mesmo que você. Eu não estava deixando meio óbvio minhas intenções e sentimentos? kk";
const text10 = "Viu? Até meu corretor sabe como você é kk. Pelo menos não sou só eu que acho que é perfeita para mim.";
const text11 = "Você realmente não cansa? kk\nVivo te dizendo essas coisas e vou continuar te dizendo sempre.";
const text12 = "Pelo visto você não é a única boba por aqui kk\nsomos ambos bobos (:";
const text13 = "Não é só do seu lado bobo que eu gosto... hehe \ngosto de ti por inteira!";
const text14 = "Kk e de novo você não é a única, eu também sou meio safado.\nSobre o que está na imagem, EU CONFIRMO! kk";
const text15 = "Ui, às vezes sou bem direto né kk.\nSei que somos só amigos e que seria melhor não dizer certas coisas, talvez eu nem deveria ter dito muitas das coisas que já te disse. Mas uma coisa eu sei, todas as palavras ditas por mim foram sinceras, cada jura, cada sentimento, cada tudo. Talvez seja difícil acreditar pela distância, mas se tudo der certo, um dia estarei aí demonstrando tudo que havia dito.";
const text16 = "Ah, kk o dia em que viramos a noite comigo de castigo kk.\nEu não havia te dito que você tinha me conquistado? Por que tanta hesitação em falar sobre isso? Você já me consquistou, sou inteiramente seu.";
const text17 = "Aiai, eu tinha vergonha de dizer essas coisas, pensava que você poderia achar meio... não sei kk";
const text18 = "Bom, também existem os momentos em que ambos somos safados kk.\nSó você mesmo para me deixar assim kk";
const text19 = "Falando em estarmos na cama, esse não é muito, mas só de ter visto ele já foi capaz de me tirar um sorriso. \nAgora, se um desenho de palitinhos já é capaz de me fazer sorrir, imagina estarmos assim de verdade. (:";
const text20 = "Poucos dias de amizade e já diziamos essas coisas... Quem bom que sempre nos demos bem assim.";
const text21 = "Eu sei que eu estava de castigo nesse dia, mas esse castigo já foi muito longe, não? Até hoje eu tenho curiosidade para saber do que você estava falando kk.";
const text22 = "Pode se abrir sim, sou só eu (: Mas se preferir esperar para que nos encontremos pessoalmente para se abrir, então está tudo bem também.\nEsperarei ansiosamente por esse dia.";
const text23 = "Ah, esse dia... Eu realmente não pude acreditar naquilo. Todos aqueles dias que não conversamos seu nome me aparecia em algum lugar ou apareciam coisas que me lembravam de você e sentia vontade de te chamar para voltarmos a conversar, mas achei que você já não queria.\nLembro que uma das coisas que me fizeram lembrar de você foi olhar para o céu e ter visto uma nuvem em formato de coração kk. sz";
const text24 = "Um dia inesquecível kk Nem precisaria estar no memorial.\n Pior que eu sabia que iria me arrepender enquanto ainda estava escrevendo, mas queria fazer um pouquinho de graça kk.";
const text25 = "O momento em que se originou @Fofinha e @Fofinho.\nAinda bem que encontramos essa conversa e começamos isso kk (:";
const text26 = "Ainda acho muito intrigante meu único medo ser te perder. Tinha ficado muito cabisbaixo só de pensar na possibilidade.";
const text27 = "Mas eu não sou o único a sentir fio na barriga. Pelo menos o seu não foi de medo kk.\nLer essa conversa me deixou com muita vontade de estar contigo agora, mas no momento que estou escrevendo isso você deve estar dormindo.";
const text28 = "Ah, esse dia eu fiquei com muita vergonha de dizer, mas eu queria muito confessar o que eu queria e o que estava pensando. A verdade é que eu queria dizer que preferia os dois escolhendo você nas duas opções. Por isso eu disse 'ah depende' e 'seria bom se tivesse como n escolher'.\nAcho que ainda estava meio cedo para eu confessar que namoraria você... \nTalvez ainda esteja cedo e eu to falando... kkk";
const text29 = "Esse dia é o único dia que lembro de estar irritado de verdade.\nNão sei se deveria estar mostrando algo negativo assim, mas é que eu queria te dizer que não quero te perder, muito pelo contrário, te quero para sempre ao meu lado.";
const text30 = "Uma mensagenzinha mais confortante para te lembrar que desejo a ti do jeitinho que é. Irei gostar de você independentemente de como você for. Você é a única para mim.";
const text31 = "Eu também não acreditei que havia enviado na hora kk. \nMesmo tendo gastado toda minha sorte, ainda me sinto o homem mais sortudo do mundo por ter encontrado você, uma pessoa tão preciosa para mim. Preciosa o bastante para não haver nada no universo pelo qual a trocaria.";
const text32 = "kk Espero que você não tenha esquecido dessa reação, já que ficou relembrando dela por tanto tempo. \nEu fiquei realmente bobo ao ler sobre o que você sentia...";
const text33 = "Tão bobo que não conseguia nem escrever algo direito. E olha que eu nem disse muito mesmo após escrever por tanto tempo. Hoje, te digo algo que se encaixa bem melhor e possui bem menos palavras: 'Te adoro!' \nE sempre irei adorar.";
const text34 = "Espero que você não mude de idéia.\nTambém sou todo seu.";
const text35 = "Queria te lembrar também dessas palavras que, como eu disse antes, são totalmente sinceras. \nSempre que você precisar estarei aqui. Espero que eu possa dizer que estarei aí logo.";
const text36 = "Para finalizar, só queria te lembrar de uma coisinha: \nUma flor para outra flor! \nTe adoro mais que tudo!";
let id = 0;
memory.src = image0;
text.innerText = text0;
changeL.style.display = 'none';

changeR.onclick = function()
{   
    id = id + 1;
    if(id == 1)
    {
        memory.src = image1;
        text.innerText = text1;
        changeL.style.display = 'inline';
    }
    if(id == 2)
    {
        memory.src = image2;
        text.innerText = text2;
    }
    if(id == 3)
    {
        memory.src = image3;
        text.innerText = text3;
    }
    if(id == 4)
    {
        memory.src = image4;
        text.innerText = text4;
    }
    if(id == 5)
    {
        memory.src = image5;
        text.innerText = text5;
    }
    if(id == 6)
    {
        memory.src = image6;
        text.innerText = text6;
    }
    if(id == 7)
    {
        memory.src = image7;
        text.innerText = text7;
    }
    if(id == 8)
    {
        memory.src = image8;
        text.innerText = text8;
    }
    if(id == 9)
    {
        memory.src = image9;
        text.innerText = text9;
    }
    if(id == 10)
    {
        memory.src = image10;
        text.innerText = text10;
    }
    if(id == 11)
    {
        memory.src = image11;
        text.innerText = text11;
    }
    if(id == 12)
    {
        memory.src = image12;
        text.innerText = text12;
    }
    if(id == 13)
    {
        memory.src = image13;
        text.innerText = text13;
    }
    if(id == 14)
    {
        memory.src = image14;
        text.innerText = text14;
    }
    if(id == 15)
    {
        memory.src = image15;
        text.innerText = text15;
    }
    if(id == 16)
    {
        memory.src = image16;
        text.innerText = text16;
    }
    if(id == 17)
    {
        memory.src = image17;
        text.innerText = text17;
    }
    if(id == 18)
    {
        memory.src = image18;
        text.innerText = text18;
    }
    if(id == 19)
    {
        memory.src = image19;
        text.innerText = text19;
    }
    if(id == 20)
    {
        memory.src = image20;
        text.innerText = text20;
    }
    if(id == 21)
    {
        memory.src = image21;
        text.innerText = text21;
    }
    if(id == 22)
    {
        memory.src = image22;
        text.innerText = text22;
    }
    if(id == 23)
    {
        memory.src = image23;
        text.innerText = text23;
    }
    if(id == 24)
    {
        memory.src = image24;
        text.innerText = text24;
    }
    if(id == 25)
    {
        memory.src = image25;
        text.innerText = text25;
    }
    if(id == 26)
    {
        memory.src = image26;
        text.innerText = text26;
    }
    if(id == 27)
    {
        memory.src = image27;
        text.innerText = text27;
    }
    if(id == 28)
    {
        memory.src = image28;
        text.innerText = text28;
    }
    if(id == 29)
    {
        memory.src = image29;
        text.innerText = text29;
    }
    if(id == 30)
    {
        memory.src = image30;
        text.innerText = text30;
    }
    if(id == 31)
    {
        memory.src = image31;
        text.innerText = text31;
    }
    if(id == 32)
    {
        memory.src = image32;
        text.innerText = text32;
    }
    if(id == 33)
    {
        memory.src = image33;
        text.innerText = text33;
    }
    if(id == 34)
    {
        memory.src = image34;
        text.innerText = text34;
    }
    if(id == 35)
    {
        memory.src = image35;
        text.innerText = text35;
    }
    if(id == 36)
    {
        memory.src = image36;
        text.innerText = text36;
        changeR.style.display = 'none';
    }
}

changeL.onclick = function()
{
    id = id - 1;
    if(id == 0)
    {
        memory.src = image0;
        text.innerText = text0;
        changeL.style.display = 'none';
    }
    if(id == 1)
    {
        memory.src = image1;
        text.innerText = text1;
    }
    if(id == 2)
    {
        memory.src = image2;
        text.innerText = text2;
    }
    if(id == 3)
    {
        memory.src = image3;
        text.innerText = text3;
    }
    if(id == 4)
    {
        memory.src = image4;
        text.innerText = text4;
    }
    if(id == 5)
    {
        memory.src = image5;
        text.innerText = text5;
    }
    if(id == 6)
    {
        memory.src = image6;
        text.innerText = text6;
    }
    if(id == 7)
    {
        memory.src = image7;
        text.innerText = text7;
    }
    if(id == 8)
    {
        memory.src = image8;
        text.innerText = text8;
    }
    if(id == 9)
    {
        memory.src = image9;
        text.innerText = text9;
    }
    if(id == 10)
    {
        memory.src = image10;
        text.innerText = text10;
    }
    if(id == 11)
    {
        memory.src = image11;
        text.innerText = text11;
    }
    if(id == 12)
    {
        memory.src = image12;
        text.innerText = text12;
    }
    if(id == 13)
    {
        memory.src = image13;
        text.innerText = text13;
    }
    if(id == 14)
    {
        memory.src = image14;
        text.innerText = text14;
    }
    if(id == 15)
    {
        memory.src = image15;
        text.innerText = text15;
    }
    if(id == 16)
    {
        memory.src = image16;
        text.innerText = text16;
    }
    if(id == 17)
    {
        memory.src = image17;
        text.innerText = text17;
    }
    if(id == 18)
    {
        memory.src = image18;
        text.innerText = text18;
    }
    if(id == 19)
    {
        memory.src = image19;
        text.innerText = text19;
    }
    if(id == 20)
    {
        memory.src = image20;
        text.innerText = text20;
    }
    if(id == 21)
    {
        memory.src = image21;
        text.innerText = text21;
    }
    if(id == 22)
    {
        memory.src = image22;
        text.innerText = text22;
    }
    if(id == 23)
    {
        memory.src = image23;
        text.innerText = text23;
    }
    if(id == 24)
    {
        memory.src = image24;
        text.innerText = text24;
    }
    if(id == 25)
    {
        memory.src = image25;
        text.innerText = text25;
    }
    if(id == 26)
    {
        memory.src = image26;
        text.innerText = text26;
    }
    if(id == 27)
    {
        memory.src = image27;
        text.innerText = text27;
    }
    if(id == 28)
    {
        memory.src = image28;
        text.innerText = text28;
    }
    if(id == 29)
    {
        memory.src = image29;
        text.innerText = text29;
    }
    if(id == 30)
    {
        memory.src = image30;
        text.innerText = text30;
    }
    if(id == 31)
    {
        memory.src = image31;
        text.innerText = text31;
    }
    if(id == 32)
    {
        memory.src = image32;
        text.innerText = text32;
    }
    if(id == 33)
    {
        memory.src = image33;
        text.innerText = text33;
    }
    if(id == 34)
    {
        memory.src = image34;
        text.innerText = text34;
    }
    if(id == 35)
    {
        memory.src = image35;
        text.innerText = text35;
        changeR.style.display = 'inline';
    }
}

function checkWidth()
{
    var width = window.innerWidth;
    const col = document.getElementById("col")
    if(width <= 1060)
    {
        col.style.columns = 1;
    }
    else{
        col.style.columns = 2;
    }
}

window.addEventListener("resize", checkWidth);

const image = document.getElementById("memoryImage");
const popup = document.getElementById("Popup");
const popupImage = document.getElementById("imagePopup");

function openPopup()
{   
    popupImage.src = memory.src
    popup.style.display = 'flex';
};

function closePopup(){
    popup.style.display = 'none';
}