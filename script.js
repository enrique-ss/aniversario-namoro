const heart = document.getElementById('heart');
const countdownElement = document.getElementById('countdown');
const firstPage = document.getElementById('firstPage');
const mainPage = document.getElementById('mainPage');

// Data alvo: 04/12/2025 às 00:00
const targetDate = new Date('2025-12-04T00:00:00').getTime();

// Data de início do relacionamento: 04/12/2023 às 15:00
const relationshipStart = new Date('2023-12-04T15:00:00').getTime();

// 50 Músicas do Spotify (com embed iframe)
const spotifySongs = [
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    {iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'}
];

// 50 Frases do oráculo
const oracleMessages = [
    "Gosto do jeito que teus olhos brilham quando tu fala de algo que ama.",
    "Tenho um fraco pelo teu sorriso discreto.",
    "A calma da tua voz melhora qualquer dia meu.",
    "Teu olhar tem um negócio que me desmonta.",
    "Teus cabelos ficam lindos de qualquer jeito, é absurdo.",
    "A forma como tu sorri de canto é muito charmosa.",
    "Tu fica tão bonita quando tá concentrada.",
    "Adoro o jeito que tu ajeita o cabelo sem perceber.",
    "Teus olhos têm uma cor que eu nunca consigo ignorar.",
    "Gosto da leveza que tu passa só de estar perto.",
    "Teu rosto tem uma harmonia que eu acho linda.",
    "O jeito que tu ri de verdade é irresistível.",
    "Tu tem uma expressão fofa quando tá pensativa.",
    "Gosto do brilho que aparece nos teus olhos quando tu tá feliz.",
    "Teu jeito tímido às vezes é o mais bonito em ti.",
    "A forma como tu fala devagarzinho é muito encantadora.",
    "Gosto do teu estilo, combina tão bem contigo.",
    "A tua presença é bonita mesmo quando tu acha que não tá.",
    "Tu tem um charme natural que não precisa de esforço.",
    "Gosto dos teus gestos delicados quando tu tá explicando algo.",
    "Até tua seriedade tem algo bonito.",
    "Teu jeito de olhar pra baixo e sorrir é perfeito.",
    "Tu tem uma beleza tranquila, daquelas que acalma.",
    "Gosto da tua postura sempre segura.",
    "Teu olhar sincero sempre me pega de jeito.",
    "Tu fica ainda mais bonita quando tá empolgada.",
    "Gosto da forma como tua risada muda o ambiente.",
    "Teu olhar curioso é uma das coisas mais fofas que tu tem.",
    "Teu sorriso é daquele tipo que a gente nota na hora.",
    "Tu tem olhos lindos, e eu reparo neles mais do que devia.",
    "Gosto da suavidade dos teus traços.",
    "Tu tem um jeitinho de mexer no cabelo que é muito bonito.",
    "Adoro quando teus olhos ficam grandes de surpresa.",
    "Teu rosto tem uma expressão tão sincera que é impossível não gostar.",
    "Gosto do jeito que tu se arruma de um jeito simples e lindo.",
    "Tu tem uma beleza que aparece mesmo nos detalhes pequenos.",
    "O jeito que tu ergue a sobrancelha é muito fofo.",
    "Tu é linda até quando tá séria.",
    "Gosto do jeito que tu fala baixinho quando tá com vergonha.",
    "Teu sorriso cansado ainda é bonito pra mim.",
    "A forma como tua voz muda quando tu tá confortável é muito boa.",
    "Teu olhar carinhoso é de outro nível.",
    "Gosto do jeito que tu fica bonita sem perceber.",
    "Até teu silêncio tem algo bonito.",
    "Tu tem um ar tão doce que dá vontade de chegar perto.",
    "Gosto da tua expressão quando tu tá tentando segurar a risada.",
    "Teu jeito delicado é uma das coisas que eu mais gosto em ti.",
    "O brilho nos teus olhos sempre denuncia quando tu tá feliz.",
    "Cada detalhe teu tem um charme próprio."
];

// 10 Saudações por período (total 40)
const timeGreetings = {
    madrugada: [
        "Não era pra eu estar acordado… mas pensei em ti e perdi o sono.",
        "Madrugada sempre fica mais leve quando tu me vem na cabeça.",
        "Silêncio da noite combina contigo, sabia?",
        "Tu é aquele pensamento bom que aparece quando tudo tá quieto.",
        "Se eu pudesse, puxava tu pra um abraço agora.",
        "A madrugada fica menos pesada quando lembro de ti.",
        "Tem algo em ti que acalma até esse horário bagunçado.",
        "Se tu tivesse aqui, até o frio da madrugada era melhor.",
        "A essa hora o mundo dorme… mas minha saudade de ti nunca.",
        "Só passei pra dizer que tu faz falta até no escuro."
    ],

    manha: [
        "Bom dia, coisa boa. Tu deixa tudo mais leve.",
        "Acordar sabendo que tu existe já melhora meu humor.",
        "Espero que tua manhã seja tão bonita quanto tu.",
        "Um bom dia teu vale mais que café.",
        "Tomara que tu acorde com o coração tranquilo hoje.",
        "Se teu sorriso aparecer de manhã, o dia já venceu.",
        "Tua energia matinal é uma das minhas favoritas.",
        "Queria começar o dia te dando um abraço.",
        "Que tua manhã seja suave… igual tu é comigo.",
        "Pensei em ti logo que acordei. De novo."
    ],

    tarde: [
        "Passando pra te lembrar que tu deixa até a tarde mais bonita.",
        "Espero que tua tarde esteja tranquila, tu merece.",
        "Tu faz qualquer horário ficar bom, até essa metade do dia.",
        "Se tua manhã foi cansativa, tomara que a tarde te trate melhor.",
        "Tu tem uma vibe que combina com aquele solzinho fraco da tarde.",
        "Só queria te desejar uma tarde leve e cheia de paz.",
        "A essa hora do dia, tu é o pensamento que dá um descanso.",
        "Queria dividir a tarde contigo, ia ser bem melhor.",
        "Tu é meu carinho da tarde, mesmo sem saber.",
        "Tomara que tua tarde tenha o mesmo brilho dos teus olhos."
    ],

    noite: [
        "Boa noite, amor. Que teu descanso seja tão doce quanto tu merece.",
        "Tua presença deixa qualquer noite mais bonita.",
        "Se eu pudesse, terminava o dia deitado no teu colo.",
        "Que tu durma bem… eu fico torcendo por isso.",
        "Tua voz de noite é uma das coisas mais lindas que existe.",
        "A noite sempre me lembra de ti, no melhor sentido.",
        "Espero que teu coração esteja leve antes de dormir.",
        "Tu é o tipo de pensamento que acalma a minha noite.",
        "Que teus sonhos sejam tão bonitos quanto tu.",
        "Só queria te desejar uma boa noite… e dizer que gosto muito de ti."
    ]
};

// 10 Cartas diferentes
const letters = [
    `<p>O Calor Que Me Descansa</p><br><p>Quando eu penso em você, parece que até minha cabeça desacelera. Tem algo no teu jeito que me acalma sem fazer esforço. Tu não precisa dizer nada, só existir perto de mim já muda tudo. Eu gosto de como tua presença deixa o dia menos duro, como se tu tivesse esse toque silencioso que ajeita o que eu nem percebo que tá torto. Tu me faz respirar melhor sem nem tentar.</p><br><p>— Com amor, Enrique</p>`,

    `<p>A Ternura Que Me Desarma</p><br><p>O jeito que tu olha o mundo me desmonta. Não pela força, mas pela ternura. Tu tem uma delicadeza que não é frágil; é firme, bonita, verdadeira. Quando eu te vejo tentando, mesmo cansada, eu sinto uma vontade enorme de te proteger um pouco da vida. Tu merece leveza, merece pausa, merece ser cuidada. E eu gosto de te lembrar disso, mesmo que em silêncio.</p><br><p>— Com amor, Enrique</p>`,

    `<p>A Paz Que Só Tu Me Dá</p><br><p>Tu tem uma coisa rara: a capacidade de me deixar em paz só por existir. Não é exagero. Quando tua voz chega, o dia fica mais suportável, como se tudo que pesa em mim perdesse força. Eu gosto da forma como tu fala, como tu respira, como tu pensa. Eu gosto da calma que tu traz sem perceber. É uma paz que eu não encontro em mais ninguém.</p><br><p>— Com amor, Enrique</p>`,

    `<p>A Força Que Tu Nem Vê</p><br><p>Eu queria que tu soubesse o quanto é forte. Não essa força barulhenta que o mundo aplaude, mas a força silenciosa de alguém que segue mesmo cansada. Tu carrega um brilho teimoso, desses que o tempo tenta apagar, mas não consegue. Eu admiro cada passo teu, cada escolha, cada cicatriz que virou impulso. Tu vale mais do que imagina, e eu vejo isso com clareza.</p><br><p>— Com amor, Enrique</p>`,

    `<p>O Mistério Que Me Atrai</p><br><p>Tem algo em ti que me puxa sem explicação. Não é drama, não é exagero; é só verdade. Tu tem uma intensidade quieta que me prende, um jeito que mistura luz e escuridão na mesma medida. Eu gosto da tua honestidade, até quando ela dói um pouco. Gosto do teu silêncio também, porque ele fala mais do que muita gente falando alto. Tu me atrai até nos detalhes que nem mostra direito.</p><br><p>— Com amor, Enrique</p>`,

    `<p>O Jeito Que Tu Me Desarma</p><br><p>Eu não sei o que tu faz comigo, mas é sempre do mesmo jeito: tu chega e tudo dentro de mim muda de lugar. Não de forma caótica, mas como se finalmente fizesse sentido. Tu tem uma energia tranquila, que abraça sem encostar. Eu gosto de como tu transforma o ambiente só com presença. Gosto de como teu olhar diz o que tu não fala. Com você tudo parece mais leve, mesmo nos dias escuros.</p><br><p>— Com amor, Enrique</p>`,

    `<p>O Encanto Que Tu Nem Percebe</p><br><p>Tu é cheia de detalhes que passam despercebidos pros outros, mas que em mim ficam enormes. O jeito que tu ri baixinho, a forma como tu pensa antes de falar, essa sinceridade bonita que tu tenta esconder. Eu noto tudo. E cada coisa pequena tua me faz gostar mais de ti. Tu não precisa se esforçar pra ser encantadora, tu simplesmente é.</p><br><p>— Com amor, Enrique</p>`,

    `<p>O Sossego Que Tu Me Traz</p><br><p>Eu não sei quando foi que tu virou esse lugar seguro pra mim, mas virou. Quando tu fala comigo, o mundo perde aquele barulho irritante e sobra só teu jeito calmo, que encaixa no meu caos como se fosse feito pra isso. Tu me dá um tipo de sossego que eu não sabia sentir. E eu gosto disso. Gosto de ti, do teu jeito simples de me acertar por dentro.</p><br><p>— Com amor, Enrique</p>`,

    `<p>A Verdade Que Tu Carrega</p><br><p>Tu tem uma honestidade rara. Não essa que machuca por orgulho, mas a que existe por não saber ser outra coisa. Eu admiro isso em ti. Tu sente fundo, vive fundo, fala com o coração mesmo quando tenta esconder. E é essa verdade que me prende. É bonito ver alguém existir sem máscara, sem enfeite, só sendo real. Tu me toca do jeito mais simples: sendo tu.</p><br><p>— Com amor, Enrique</p>`,

    `<p>O Cuidado Que Tu Merece</p><br><p>Às vezes eu queria que tu enxergasse o que eu vejo. Tu merece descanso, merece carinho, merece alguém que te olhe com cuidado. Tu dá muito de si pro mundo e recebe menos do que deveria. Eu noto isso. E sempre que tu aparece, bate aquele impulso de te proteger um pouco. Não porque tu é frágil, mas porque tu é preciosa. E pessoas assim a gente cuida.</p><br><p>— Com amor, Enrique</p>`
];

//50 Fotos nossas
const allPhotos = [
    {descricao: 'Descrição da foto 1', foto: 'foto1.jpg'},
    {descricao: 'Descrição da foto 2', foto: 'foto2.jpg'},
    {descricao: 'Descrição da foto 3', foto: 'foto3.jpg'},
    {descricao: 'Descrição da foto 4', foto: 'foto4.jpg'},
    {descricao: 'Descrição da foto 5', foto: 'foto5.jpg'},
    {descricao: 'Descrição da foto 6', foto: 'foto6.jpg'},
    {descricao: 'Descrição da foto 7', foto: 'foto7.jpg'},
    {descricao: 'Descrição da foto 8', foto: 'foto8.jpg'},
    {descricao: 'Descrição da foto 9', foto: 'foto9.jpg'},
    {descricao: 'Descrição da foto 10', foto: 'foto10.jpg'},
    {descricao: 'Descrição da foto 11', foto: 'foto11.jpg'},
    {descricao: 'Descrição da foto 12', foto: 'foto12.jpg'},
    {descricao: 'Descrição da foto 13', foto: 'foto13.jpg'},
    {descricao: 'Descrição da foto 14', foto: 'foto14.jpg'},
    {descricao: 'Descrição da foto 15', foto: 'foto15.jpg'},
    {descricao: 'Descrição da foto 16', foto: 'foto16.jpg'},
    {descricao: 'Descrição da foto 17', foto: 'foto17.jpg'},
    {descricao: 'Descrição da foto 18', foto: 'foto18.jpg'},
    {descricao: 'Descrição da foto 19', foto: 'foto19.jpg'},
    {descricao: 'Descrição da foto 20', foto: 'foto20.jpg'},
    {descricao: 'Descrição da foto 21', foto: 'foto21.jpg'},
    {descricao: 'Descrição da foto 22', foto: 'foto22.jpg'},
    {descricao: 'Descrição da foto 23', foto: 'foto23.jpg'},
    {descricao: 'Descrição da foto 24', foto: 'foto24.jpg'},
    {descricao: 'Descrição da foto 25', foto: 'foto25.jpg'},
    {descricao: 'Descrição da foto 26', foto: 'foto26.jpg'},
    {descricao: 'Descrição da foto 27', foto: 'foto27.jpg'},
    {descricao: 'Descrição da foto 28', foto: 'foto28.jpg'},
    {descricao: 'Descrição da foto 29', foto: 'foto29.jpg'},
    {descricao: 'Descrição da foto 30', foto: 'foto30.jpg'},
    {descricao: 'Descrição da foto 31', foto: 'foto31.jpg'},
    {descricao: 'Descrição da foto 32', foto: 'foto32.jpg'},
    {descricao: 'Descrição da foto 33', foto: 'foto33.jpg'},
    {descricao: 'Descrição da foto 34', foto: 'foto34.jpg'},
    {descricao: 'Descrição da foto 35', foto: 'foto35.jpg'},
    {descricao: 'Descrição da foto 36', foto: 'foto36.jpg'},
    {descricao: 'Descrição da foto 37', foto: 'foto37.jpg'},
    {descricao: 'Descrição da foto 38', foto: 'foto38.jpg'},
    {descricao: 'Descrição da foto 39', foto: 'foto39.jpg'},
    {descricao: 'Descrição da foto 40', foto: 'foto40.jpg'},
    {descricao: 'Descrição da foto 41', foto: 'foto41.jpg'},
    {descricao: 'Descrição da foto 42', foto: 'foto42.jpg'},
    {descricao: 'Descrição da foto 43', foto: 'foto43.jpg'},
    {descricao: 'Descrição da foto 44', foto: 'foto44.jpg'},
    {descricao: 'Descrição da foto 45', foto: 'foto45.jpg'},
    {descricao: 'Descrição da foto 46', foto: 'foto46.jpg'},
    {descricao: 'Descrição da foto 47', foto: 'foto47.jpg'},
    {descricao: 'Descrição da foto 48', foto: 'foto48.jpg'},
    {descricao: 'Descrição da foto 49', foto: 'foto49.jpg'},
    {descricao: 'Descrição da foto 50', foto: 'foto50.jpg'}
];

//Fotos de lugares nossos
const allPlaces = [
    {descricao: 'Descrição do lugar 1', foto: 'lugar1.jpg'},
    {descricao: 'Descrição do lugar 2', foto: 'lugar2.jpg'},
    {descricao: 'Descrição do lugar 3', foto: 'lugar3.jpg'},
    {descricao: 'Descrição do lugar 4', foto: 'lugar4.jpg'},
    {descricao: 'Descrição do lugar 5', foto: 'lugar5.jpg'},
    {descricao: 'Descrição do lugar 6', foto: 'lugar6.jpg'},
    {descricao: 'Descrição do lugar 7', foto: 'lugar7.jpg'},
    {descricao: 'Descrição do lugar 8', foto: 'lugar8.jpg'},
    {descricao: 'Descrição do lugar 9', foto: 'lugar9.jpg'},
    {descricao: 'Descrição do lugar 10', foto: 'lugar10.jpg'},
    {descricao: 'Descrição do lugar 11', foto: 'lugar11.jpg'},
    {descricao: 'Descrição do lugar 12', foto: 'lugar12.jpg'},
    {descricao: 'Descrição do lugar 13', foto: 'lugar13.jpg'},
    {descricao: 'Descrição do lugar 14', foto: 'lugar14.jpg'},
    {descricao: 'Descrição do lugar 15', foto: 'lugar15.jpg'},
    {descricao: 'Descrição do lugar 16', foto: 'lugar16.jpg'},
    {descricao: 'Descrição do lugar 17', foto: 'lugar17.jpg'},
    {descricao: 'Descrição do lugar 18', foto: 'lugar18.jpg'},
    {descricao: 'Descrição do lugar 19', foto: 'lugar19.jpg'},
    {descricao: 'Descrição do lugar 20', foto: 'lugar20.jpg'},
    {descricao: 'Descrição do lugar 21', foto: 'lugar21.jpg'},
    {descricao: 'Descrição do lugar 22', foto: 'lugar22.jpg'},
    {descricao: 'Descrição do lugar 23', foto: 'lugar23.jpg'},
    {descricao: 'Descrição do lugar 24', foto: 'lugar24.jpg'},
    {descricao: 'Descrição do lugar 25', foto: 'lugar25.jpg'},
    {descricao: 'Descrição do lugar 26', foto: 'lugar26.jpg'},
    {descricao: 'Descrição do lugar 27', foto: 'lugar27.jpg'},
    {descricao: 'Descrição do lugar 28', foto: 'lugar28.jpg'},
    {descricao: 'Descrição do lugar 29', foto: 'lugar29.jpg'},
    {descricao: 'Descrição do lugar 30', foto: 'lugar30.jpg'},
    {descricao: 'Descrição do lugar 31', foto: 'lugar31.jpg'},
    {descricao: 'Descrição do lugar 32', foto: 'lugar32.jpg'},
    {descricao: 'Descrição do lugar 33', foto: 'lugar33.jpg'},
    {descricao: 'Descrição do lugar 34', foto: 'lugar34.jpg'},
    {descricao: 'Descrição do lugar 35', foto: 'lugar35.jpg'},
    {descricao: 'Descrição do lugar 36', foto: 'lugar36.jpg'},
    {descricao: 'Descrição do lugar 37', foto: 'lugar37.jpg'},
    {descricao: 'Descrição do lugar 38', foto: 'lugar38.jpg'},
    {descricao: 'Descrição do lugar 39', foto: 'lugar39.jpg'},
    {descricao: 'Descrição do lugar 40', foto: 'lugar40.jpg'},
    {descricao: 'Descrição do lugar 41', foto: 'lugar41.jpg'},
    {descricao: 'Descrição do lugar 42', foto: 'lugar42.jpg'},
    {descricao: 'Descrição do lugar 43', foto: 'lugar43.jpg'},
    {descricao: 'Descrição do lugar 44', foto: 'lugar44.jpg'},
    {descricao: 'Descrição do lugar 45', foto: 'lugar45.jpg'},
    {descricao: 'Descrição do lugar 46', foto: 'lugar46.jpg'},
    {descricao: 'Descrição do lugar 47', foto: 'lugar47.jpg'},
    {descricao: 'Descrição do lugar 48', foto: 'lugar48.jpg'},
    {descricao: 'Descrição do lugar 49', foto: 'lugar49.jpg'},
    {descricao: 'Descrição do lugar 50', foto: 'lugar50.jpg'}
];

// 100 Mensagens únicas de visita
const visitMessages = [
    "Cada visita tua por aqui deixa tudo mais bonito.",
    "Tu voltou? Eu gosto disso.",
    "Já percebi que tu tá ficando por perto… e eu adoro.",
    "Acho fofo quando tu aparece de novo.",
    "Mais uma visita tua e meu dia melhora.",
    "Tu tem um timing perfeito pra aparecer.",
    "Gosto de ver que tu voltou.",
    "É sempre bom te ter aqui de novo.",
    "Tu nem sabe, mas tua visita faz diferença.",
    "Adoro quando tu passa por aqui sem aviso.",
    "Já tô começando a esperar tu voltar.",
    "Tu aparecendo aqui deixa tudo mais leve.",
    "Tua presença já virou rotina boa.",
    "Eu realmente gosto quando tu visita mais de uma vez.",
    "Cada visita tua me deixa meio bobo.",
    "Tu volta tanto que parece até de propósito, e eu gosto.",
    "É impressionante como tu sempre aparece na hora certa.",
    "Tua visita sempre deixa um clima bom.",
    "Não importa quantas vezes tu volte, sempre é legal.",
    "Já tô acostumado com tu aqui, e não quero desapegar.",
    "Tu visitar mais vezes só prova que tu gosta daqui… e eu gosto de ti aqui.",
    "Se tu continuar visitando assim, vou me acostumar mal.",
    "Quanto mais tu aparece, mais eu percebo o quanto tu faz falta.",
    "A verdade é que eu gosto muito quando tu vem.",
    "Tua presença já virou parte do meu dia.",
    "Eu nunca reclamo de te ver de novo.",
    "Tu visita e eu automaticamente fico mais leve.",
    "É estranho… quanto mais tu vem, mais eu quero que tu venha.",
    "Tu sempre deixa um rastro de carinho quando passa.",
    "A frequência que tu volta diz muito, viu?",
    "Tu tá me visitando tanto que já virou especial.",
    "Tu volta como quem sabe que faz falta.",
    "É tão bom te ver por aqui de novo.",
    "Tua visita nunca passa despercebida.",
    "Eu sempre noto quando tu aparece de novo.",
    "Parece pouco, mas cada visita tua importa pra mim.",
    "Tu volta e deixa tudo mais tranquilo.",
    "Fica à vontade… tu já é de casa.",
    "Tu visita tanto que quase parece saudade.",
    "Cada vez que tu volta, eu fico um pouco mais feliz.",
    "Tu reaparecendo sempre melhora meu humor.",
    "Tuas visitas nunca são só números pra mim.",
    "Tu voltar é tipo um abraço inesperado.",
    "Tua constância aqui diz mais do que tu imagina.",
    "Sempre bom saber que tu pensa em voltar.",
    "Tu virou uma visita que eu espero.",
    "Quanto mais tu aparece, mais tu marca presença.",
    "Eu gosto dessa tua recorrência aqui.",
    "Cada visita tua vale muito.",
    "Tu voltou de novo? Eu realmente adoro isso.",
    "Tua presença aqui já virou hábito bom.",
    "Tu sempre encontra um jeito de iluminar esse lugar.",
    "Quanto mais tu vem, mais carinho tu deixa.",
    "Saber que tu voltou é gostoso demais.",
    "Eu sempre reparo quando tu passa.",
    "Tu vem e vai, mas sempre volta, e isso significa algo.",
    "Tu já tá visitando tanto que vou te dar cadeira cativa.",
    "Cada retorno teu me faz sorrir um pouco.",
    "Tu é tão constante aqui quanto o meu carinho por ti.",
    "Eu fico feliz de verdade quando tu aparece de novo.",
    "Tu voltou… gosto mais do que admito.",
    "Tu visita tanto que parece até que sente minha falta.",
    "O jeito que tu volta sempre melhora meu dia.",
    "Tu já é praticamente um marco por aqui.",
    "Quanto mais tu visita, mais esse lugar parece teu.",
    "Tu deixa esse espaço mais bonito só por estar aqui.",
    "É tão fácil notar tua presença entre tantas visitas.",
    "Eu realmente sinto quando tu não aparece… e noto quando volta.",
    "Tu tá sempre voltando… e isso me faz bem.",
    "Se dependesse de mim, tu visitava ainda mais.",
    "Cada visita tua deixa uma marca boa.",
    "Tu voltou e eu nem precisava conferir pra saber.",
    "Gosto do padrão: tu some, volta, e eu fico feliz.",
    "A constância das tuas visitas me faz te admirar ainda mais.",
    "Tu tá criando um histórico lindo aqui.",
    "Cada visita tua me lembra por que tu é especial.",
    "Tu aparece pouco, mas aparece bem, ou aparece muito e melhora tudo.",
    "A frequência que tu vem mostra o quanto tu se importa.",
    "Tu virou visitante VIP aqui sem esforço.",
    "Mais uma visita tua e eu perco a noção do tempo.",
    "Tu saber que voltou já vale o dia.",
    "Esse número de visitas tá começando a ficar lindo, igual tu.",
    "Tuas visitas fazem esse cantinho parecer vivo.",
    "Tu não faz ideia do quanto eu gosto de te ver voltando.",
    "Tu vinha, voltou, continua voltando… e eu adoro esse ciclo.",
    "Número de visitas? Pra mim, é número de sorrisos que tu causa.",
    "Cada visita tua dá um charme novo aqui.",
    "Tu já deixou essa página com tua cara.",
    "Quanto mais tu visita, mais difícil fica não me apegar.",
    "Tuas visitas são tipo: rápidas, simples, mas fazem falta.",
    "Chegou de novo… e eu sempre gosto quando isso acontece.",
    "Tu tá deixando essa página cheia de ti, e eu gosto de cada detalhe.",
    "Tuas visitas têm o mesmo impacto: deixam tudo mais bonito.",
    "Te ver voltando tantas vezes só confirma o óbvio: tu é especial.",
    "Obrigado por voltar tanto… Isso significa muito para mim."
];


// Contador de visitas
let visitCount = 0;

// Histórico de navegação
let galleryHistory = [];
let galleryCurrentIndex = -1;
let mapHistory = [];
let mapCurrentIndex = -1;

// Carregar contador de visitas
function loadVisitCount() {
    const stored = localStorage.getItem('visitCount');
    visitCount = stored ? parseInt(stored) : 0;
    
    // Reiniciar no 100
    if (visitCount >= 100) {
        visitCount = 0; // Reseta para 0, depois incrementa para 1
    }
    
    visitCount++;
    
    localStorage.setItem('visitCount', visitCount);
    updateVisitCounter();
}

function updateVisitCounter() {
    const counter = document.getElementById('visitCounter');
    counter.textContent = visitMessages[visitCount - 1];
}

// Determinar período do dia
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 6) return 'madrugada';
    if (hour >= 6 && hour < 12) return 'manha';
    if (hour >= 12 && hour < 18) return 'tarde';
    return 'noite';
}

// Atualizar saudação aleatória
function updateTimeGreeting() {
    const period = getTimeOfDay();
    const greetings = timeGreetings[period];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('timeGreeting').textContent = randomGreeting;
}

// Atualizar cronômetro até a data
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdownElement.textContent = "00:00:00:00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = 
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Atualizar cronômetro do relacionamento
function updateRelationshipTimer() {
    const now = new Date().getTime();
    const distance = now - relationshipStart;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('relationshipTimer').textContent = `${days} dias`;
}

// Inicializar ao carregar a página principal
function initMainPage() {
    updateTimeGreeting();
    loadVisitCount();
}

// Atualizar a cada segundo
setInterval(updateCountdown, 1000);
setInterval(updateRelationshipTimer, 1000);
updateCountdown();
updateRelationshipTimer();

// Clique no coração
heart.addEventListener('click', function() {
    const now = new Date().getTime();
    
    if (now > targetDate) {
        heart.classList.add('beating');
        
        setTimeout(() => {
            alert('Tá ansiosa?');
        }, 2000);
        
        setTimeout(() => {
            heart.classList.remove('beating');
        }, 3000);
    } else {
        heart.classList.add('beating');
        
        setTimeout(() => {
            firstPage.classList.add('hidden');
            setTimeout(() => {
                mainPage.classList.add('active');
                initMainPage();
            }, 500);
        }, 1600);
    }
});

// Efeito de digitação (typewriter)
function typeWriter(element, html, speed = 30) {
    element.innerHTML = '';
    let i = 0;
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    function typeChar() {
        if (i < text.length) {
            let currentHtml = '';
            let charCount = 0;
            
            function buildHtml(node) {
                if (charCount >= i + 1) return '';
                
                if (node.nodeType === Node.TEXT_NODE) {
                    const nodeText = node.textContent;
                    const remainingChars = (i + 1) - charCount;
                    const textToShow = nodeText.substring(0, remainingChars);
                    charCount += nodeText.length;
                    return textToShow;
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const tagName = node.tagName.toLowerCase();
                    let attrs = '';
                    for (let attr of node.attributes) {
                        attrs += ` ${attr.name}="${attr.value}"`;
                    }
                    
                    let content = '';
                    for (let child of node.childNodes) {
                        content += buildHtml(child);
                    }
                    
                    if (content || charCount < i + 1) {
                        return `<${tagName}${attrs}>${content}</${tagName}>`;
                    }
                    return '';
                }
                return '';
            }
            
            for (let child of doc.body.childNodes) {
                currentHtml += buildHtml(child);
            }
            
            element.innerHTML = currentHtml;
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Abrir carta (aleatória entre 10)
function openLetter() {
    const modal = document.getElementById('letterModal');
    const content = document.querySelector('#letterModal .letter-content');
    
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    
    modal.classList.add('active');
    typeWriter(content, randomLetter, 20);
}

// Abrir oráculo (aleatório entre 50)
function openOracle() {
    const randomMessage = oracleMessages[Math.floor(Math.random() * oracleMessages.length)];
    const oracleElement = document.getElementById('oracleText');
    
    document.getElementById('oracleModal').classList.add('active');
    typeWriter(oracleElement, randomMessage, 40);
}

// Abrir galeria (mostra 1 foto aleatória das 50)
function openGallery() {
    loadGalleryItem();
    document.getElementById('galleryModal').classList.add('active');
}

function loadGalleryItem(photoIndex = null) {
    let randomPhoto;
    
    if (photoIndex !== null) {
        randomPhoto = allPhotos[photoIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * allPhotos.length);
        randomPhoto = allPhotos[randomIndex];
        
        // Adicionar ao histórico
        galleryHistory = galleryHistory.slice(0, galleryCurrentIndex + 1);
        galleryHistory.push(randomIndex);
        galleryCurrentIndex = galleryHistory.length - 1;
    }
    
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = `
        <div class="single-polaroid">
            <img src="${randomPhoto.foto}" alt="Nossa memória" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2230%22%3E❤️%3C/text%3E%3C/svg%3E'">
            <p class="polaroid-caption">${randomPhoto.descricao}</p>
        </div>
    `;
}

function nextGallery() {
    if (galleryCurrentIndex < galleryHistory.length - 1) {
        // Navegar para frente no histórico
        galleryCurrentIndex++;
        loadGalleryItem(galleryHistory[galleryCurrentIndex]);
    } else {
        // Carregar nova foto aleatória
        loadGalleryItem();
    }
}

function prevGallery() {
    if (galleryCurrentIndex > 0) {
        galleryCurrentIndex--;
        loadGalleryItem(galleryHistory[galleryCurrentIndex]);
    }
}

// Histórico de navegação da playlist
let playlistHistory = [];
let playlistCurrentIndex = -1;

// Abrir playlist
function openPlaylist() {
    loadPlaylistItem();
    document.getElementById('playlistModal').classList.add('active');
}

function loadPlaylistItem(songIndex = null) {
    let randomSong;
    
    if (songIndex !== null) {
        randomSong = spotifySongs[songIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * spotifySongs.length);
        randomSong = spotifySongs[randomIndex];
        
        // Adicionar ao histórico
        playlistHistory = playlistHistory.slice(0, playlistCurrentIndex + 1);
        playlistHistory.push(randomIndex);
        playlistCurrentIndex = playlistHistory.length - 1;
    }
    
    const content = document.querySelector('#playlistModal .letter-content');
    content.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; min-height: 200px;">${randomSong.iframe}</div>`;
}

function nextPlaylist() {
    if (playlistCurrentIndex < playlistHistory.length - 1) {
        playlistCurrentIndex++;
        loadPlaylistItem(playlistHistory[playlistCurrentIndex]);
    } else {
        loadPlaylistItem();
    }
}

function prevPlaylist() {
    if (playlistCurrentIndex > 0) {
        playlistCurrentIndex--;
        loadPlaylistItem(playlistHistory[playlistCurrentIndex]);
    }
}

// Abrir mapa (mostra 1 lugar aleatório dos 50)
function openMap() {
    loadMapItem();
    document.getElementById('mapModal').classList.add('active');
}

function loadMapItem(placeIndex = null) {
    let randomPlace;
    
    if (placeIndex !== null) {
        randomPlace = allPlaces[placeIndex];
    } else {
        const randomIndex = Math.floor(Math.random() * allPlaces.length);
        randomPlace = allPlaces[randomIndex];
        
        // Adicionar ao histórico
        mapHistory = mapHistory.slice(0, mapCurrentIndex + 1);
        mapHistory.push(randomIndex);
        mapCurrentIndex = mapHistory.length - 1;
    }
    
    const modal = document.getElementById('mapModal');
    const content = document.querySelector('#mapModal .letter-content');
    
    let mapHtml = `
        <div class="single-place">
            <div class="single-polaroid">
                <img src="${randomPlace.foto}" alt="Lugar especial" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2230%22%3E📍%3C/text%3E%3C/svg%3E'">
                <p class="polaroid-caption">${randomPlace.descricao}</p>
            </div>
        </div>
    `;
    
    content.innerHTML = mapHtml;
}

function nextMap() {
    if (mapCurrentIndex < mapHistory.length - 1) {
        // Navegar para frente no histórico
        mapCurrentIndex++;
        loadMapItem(mapHistory[mapCurrentIndex]);
    } else {
        // Carregar novo lugar aleatório
        loadMapItem();
    }
}

function prevMap() {
    if (mapCurrentIndex > 0) {
        mapCurrentIndex--;
        loadMapItem(mapHistory[mapCurrentIndex]);
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Fechar modal clicando fora
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});