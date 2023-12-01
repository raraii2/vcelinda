document.addEventListener("DOMContentLoaded", function () {
    const playlistContainer = document.getElementById("playlist");

    const playlist = [
        {
            title: "A lua ",
            artist: "Teto",
            specialMessage: "Na música do Teto, tem diversas frases:\n\n“Vou te levar não importa onde eu for”\n\n“Cai a noite eu penso em você”\n\n“Deusa do primeiro olhar” (onde eu vejo seu olhar por mais que seja virtualmente, gosto muito. E literalmente seu olhar é lindo, quando sorri, fica mais lindo ainda).\n\n“Ê, meu coração vai ser todo seu, amor”\n\n“Nada vai tirar você de mim”\n\n“Quando meu lábio toca no seu”\n\n“Você vai ver como tudo vai mudar”",
            src: "teto.mp3"
        }, 
        {
            title: "Aquarela Luz",
            artist: "Matue ft Rael, Dada",
            specialMessage: "Basicamente, essa música me faz pensar muito em você, pelo que ela me faz sentir, e eu sinto que vou conseguir cantá-la olhando nos seus olhos.\n\n“Te procurei e até subi” - O monte mais alto pra te ter aqui, e aqui eu penso que eu subi o monte dos traumas e insegurança.\n\n“Só pra te ter aqui”\n\n“Que bom te encontrar” - Sim, que bom que eu te encontrei, consegui superar certos tipos de medo, e eu não me arrependo.\n\n“Ela é divina, ilumina”\n\n“Ela é chavosa, estilosa, de azul e rosa”\n\n“Cê manda, cê muda, cê é moda, cê é foda”\n\n“Cê é linda, cê é louca, cê sabe ser bela”\n\n“Sem filtro ou maquiagem”\n\n“É fonte que me inspira”\n\n“Em você que eu piro, é brisa da minha viagem”",
            src: "aquarela luz.mp3"
        },
        
        {
            title: "Bad Shawty",
            artist: "Yunk Vino",
            specialMessage: "Essa música traz um marco muito grande para mim. Comecei a te conhecer escutando essa música e ficava cantando “Cê combina com meu double cup” pelo simples motivo de você ser da mesma vibe que eu. Falava “Baby, cê me liga e diz que vem” porque é assim até hoje, me liga e diz que vem. “Baby, eu não tô longe, só confia e vem”. A gente foi se conhecendo, e eu fui me apaixonando mais e mais pela música. “Quero sentir esse seu toque em mim”. “Quero sentir que isso não vai ter fim”. E não vejo a hora de você “Amo quando vem e rebola em cima de mim”.",
            src: "bad sh.mp3"
        },
        { 
           title:"Campari",
           artist:"Yunk Vino",
           specialMessage: "Isso aqui me descreve muito, do que eu quero falar para você.\n\n“Quando você tá perto me sinto bem”\n\n“Sabe que eu não te comparo com ninguém”\n\n“Porque não existe, se existe é quem?”\n\n“Se rebola eu não quero mais que pare” - Eu quero muito.\n\n“Escuta e sente essa é a real vibe”\n\n“Sabe que isso tudo é mais que verdade”\n\nIsso é tudo que eu quero te falar. Sinta a vibe dessa música em um dia tão especial como esse.",
           src:"campari.mp3"
        },
        { 
           title:"Ela canta melodias",
           artist:"Aka rasta",
           specialMessage: "Essa música é muito nossa futura vibe, com um sonzinho rolando, olhando pra você e cantando muito.\n\n“Ela canta melodias quando tá prestes a gozar”\n\n“Hoje é tudo nosso”\n\n“Por favor, não quebre meu coração”\n\n“Por que foder com você é tão bom?”\n\nSimplesmente.",
           src:"ela canta melodia.mp3"
        },
        {
            title:"Romantico 2", 
            artist:"Aka rasta ft Veigh",
            specialMessage: "Essa música é muito loka, né?!\n\n“Ela acha que sou golpe porque eu sou bonita”\n\n“Desliza esse corpo em mim”\n\n“Mostra o que seu ex perdeu”\n\n“E não adianta cê pagar de santa”\n\n“Já ouvi falar muito de você”\n\n“Ela pede pra que eu pare e eu não paro, né”\n\n“De na frente dos outros”\n\n“Eu chamar de minha mulher”\n\n“Mas você tem que entender”\n\n“Que muitas vezes eu...”",
            src:"romantico2.mp3"
        },
        {
           title:"Baby Cê É Gata",
           artist:"Kyan",
           specialMessage: "Isso é muito a gente, algo bem ritmado cheio de vibes e com frases tocantes, mas essa é totalmente para você, porque você é mó gata, slc.\n\n“Ela que me acompanha no pren ou no ice” - Vai ser você, porra.\n\n“Fecha cinema, também fecha os baile”\n\n“Divide a dose e também os problema” - Você já divide os problemas, slc, mo parceira, tlgddd.\n\n“Ou a cerveja no final de tarde”\n\n“Baby, cê é gata”\n”Amo seu jeito, de graça”\n”Sempre que tiver trajada e arrumada”\n”Comigo cê tá sempre de mão dada”\n\n“E os pousado deixa injuriado” - Mano, demais tá.\n”Que eu sou ciumento e fico irritado” - Fico mesmo, fii.\n”Logo discuto, arrumo perreco”\n”Pousou na minha gata é mó problemaço”\n”E cê dá risada quando me vê irritado”\n”Porque sabe que vários vão pousar”\n”E quem vai fechar”\n”Vai ser sempre quem tá do seu lado”\n”Pra dividir o edredom, o último bombom, junto nosso macarrão”\n”Falando de macarrão, deixa que eu faço e você fala se tá bom”\n”Gata, eu te amo, tá bom?”\n”Não falo disso porque eu sou chucrão” - Sou grossona, tlgd?\n”Cê quebrou o ditado: Amor só de mãe, com os dois pés no meu coração”",
           src:"baby ce e gata.mp3"
        }, 
        {
            title:"Fico Assim sem voce",
            artist:"Claudinho & Buchecha", 
            specialMessage: "“Tô louco pra te ver chegar”\n\n“Tô louco pra te ter nas mãos”\n\n“Deitar no teu abraço”\n\n“Retomar o pedaço”\n\n“Que falta no meu coração”\n\n“Eu conto as horas pra poder te ver” - Chega nunca?????????\n\n“Mas o relógio tá de mal comigo”\n\n“Por que é que tem que ser assim”\n\n“Se o meu desejo não tem fim?”\n\n“Eu te quero a todo instante”\n\n“Nem mil alto-falantes”\n\n“Vão poder falar por mim”",
            src:"fico assim sem vc.mp3"
        },
        {
            title:"Dependente",
            artist:"Sorriso Maroto",
            specialMessage: "“Eu acho que a gente se apaixonou”\n\n“Parece que a gente já tá dependente um do outro”\n\n“Isso é amor”\n\n“Você me sorriu e a vida mudou”\n\n“E a nossa história só começou”",
            src:"dependente.mp3"
        },
        {
            title:"Casal Maluco",
            artist:"Pericles ft Jenifer",
            specialMessage: "Essa aqui te dedico, para você, minha futura esposa. A gente é casal maluco.\n\n“E se a gente acordasse amanhã”\n\n“E pegasse uma praia nós dois, sem avisar ninguém”\n\n“Estourasse o cartão, pode crer coração”\n\n“Essa nossa loucura pra gente faz bem”\n\n“E se a gente casasse da noite pro dia”\n\n“E fizesse um pagode num quarto de hotel”\n\n“Com direito a zerar todo o frigobar”\n\n“E ficar muito louco na Lua de mel”\n\n“Todo apaixonado é bobo”\n”Com certeza eu sou o dobro”\n”Meu juízo se perdeu”\n”Quando se juntou com o seu”\n”Mina você é mais louca do que eu” - LITERALMENTEEEEEEE\n\n“Eu falo vamo e você, bora lá”\n”Eu conto 1, 2, 3 e você, já”\n”Pra qualquer coisa tamo junto”\n”Não falta assunto, casal maluco”\n\nIsso reflete bastante a gente de verdade, meu amor. Sinto muito eu e você nessa música.",
            src:"casal maluco.mp3"
        },
        {
            title:"Sem Medo",
            artist:"Cjota",
            specialMessage: "Essa música só me lembra você, porque eu só escutava ela quando conversava com você, imaginando muitas bobagens, não vou mentir, minha linda.\n\n“Se eu te pedir pra sentar com força pode sentar sem medo”",
            src:"sem medo.mp3"
        },
        {
            title:"Da lua",
            artist:"parte Veigh",
            specialMessage: "A parte do Veigh diz muito sobre o que você quer que eu seja. Quero cuidar, me ajuda a te mimar, vai, vai, vai.\n\n“Imagine o que eu faço para as mulheres que eu amo” - Você e você.\n”É que nenhuma outra faz eu perder meu foco”\n”Faz eu perder meu tempo, faz eu mudar meus planos”\n”A não ser você”\n\n“Só pra deixar fácil a decisão”\n”Te dou tudo que você quiser”\n”Mesmo que eu não vá ouvir um não”\n”Confiança é um tiro no pé”\n”Por mais que eu saiba que garotas”\n”Às vezes são um pouco complicadas”\n”Por mais certo que eu esteja disso”\n”Ela nunca aceita tá errada”\n”É que você nua, noite escura, minha cura”",
            src:"da lua.mp3"
        },
        {
            title:"Mais um voo",
            artist:"Teto",
            specialMessage: "“Daqui eu vejo o mundo (uh), anoto uma observação”\n”O que será de mim, o que vai ser de nós?”\n\n“Tudo que é bom me lembra você”\n”Trouxe um violão, e se você quiser eu tenho melodias”\n\n“Oh, que bom encontrar você (oh)”\n”Amanhã é outro dia”\n”Podemos recomeçar”\n”Deixa eu te mostrar que o dom da vida tá no amar”",
            src:"mais um voo.mp3"
        },
        {
            title:"Lembrar de voce",
            artist:"Chris Mc",
            specialMessage: "“Lembrar de você”\n”É o caminho mais perto, tudo tão certo, conhecer”\n”Entender seus defeitos, todos os seus jeitos, e te ter”\n”Se a parte da minha vida, tão mais bonita, é você”\n\n“Mas cê não sai do meu coração, não nego”",
            src:"lembrar voce.mp3"
        }, 
        {
            title:"Maldivas",
            artist:"Ludmilla",
            specialMessage: "Essa aqui lembra muito você cantando para mim, e eu não tiro da cabeça, toda vez aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.\n\n“É a minha de fé, minha preferida”\n”Eu, eu caso com essa mulher, vou parar lá em Maldivas”\n”É a minha de fé, minha preferida”\n”Eu, eu caso com essa mulher, vou parar lá em Maldivas”\n\n“Ah, aquele mar azul, bebê”\n”Em falar nisso, quero fazer uns dezzzz com você”\n”Só imagina eu por baixo e tu por cima”\n”Aquela adrenalina, você toda possuída”\n”Me puxa pela camisa”\n”Me pede: Me bate, Rayssa”\n”Calma que eu não sei lutar”\n”Mas eu sou a melhor DJ”\n\n“Posso tocar a noite inteira, e você pode me pedir replay”\n”Se você cansar, eu paro só para você descansar”\n”Mas só tem 3 minutinhos, porque a festa vai continuar”",
            src:"maldivas.mp3"
        },
        {
            title:"Duas metade",
            artist:"Jorge e Mateus ",
            specialMessage:"Meu amor eu te amo.",
            src:"duas metade.mp3"
        },
        {
            title:"Antidoto",
            artist:"Matheus e Kauan",
            specialMessage:"Nossa loucura combina, Minha princesa, obrigada por me precisar esses momentos",
            src:"antidoto.mp3"
        },
    ]; 

    playlist.forEach((song, index) => {
        const musicCard = document.createElement("div");
        musicCard.classList.add("music-card");

        musicCard.innerHTML = `
            <h3>${index + 1}. ${song.title}</h3>
            <p>${song.artist}</p>
            <button onclick="toggleInfo(${index})">Mostrar Informações</button>
            <div class="music-info" id="info-${index}">
                <p>${song.specialMessage}</p>
                <audio controls>
                    <source src="${song.src}" type="audio/mp3">
                    Seu navegador não suporta o elemento de áudio.
                </audio>
            </div>
        `;

        playlistContainer.appendChild(musicCard);
    });
});

function toggleInfo(index) {
    const infoDiv = document.getElementById(`info-${index}`);
    infoDiv.style.display = infoDiv.style.display === "block" ? "none" : "block";
}

