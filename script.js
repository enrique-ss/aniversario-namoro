const heart = document.getElementById('heart');
const countdownElement = document.getElementById('countdown');
const firstPage = document.getElementById('firstPage');
const mainPage = document.getElementById('mainPage');

// Data alvo: 04/12/2025 às 00:00
const targetDate = new Date('2025-12-04T00:00:00').getTime();

// Data de início do relacionamento: 04/12/2023 às 15:00
const relationshipStart = new Date('2023-12-04T15:00:00').getTime();

// 50 Músicas do Spotify (com embed iframe) — versão mobile
const spotifySongs = [
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0utqWsykxgSFqI1ODE9UqN"></iframe>', descricao: 'Descrição da música 1'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/37vVp2sWHuuIBOSl1NswP6?utm_source=generator"></iframe>', descricao: 'Descrição da música 2'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0MKaYAce0M8ouwSTVw2JB7?utm_source=generator"></iframe>', descricao: 'Descrição da música 3'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator"></iframe>', descricao: 'Descrição da música 4'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5o2rYExTsDD5Xj2WlBU3Ik?utm_source=generator"></iframe>', descricao: 'Descrição da música 5'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0F845nujLVqCb0XMZCh5Pc?utm_source=generator"></iframe>', descricao: 'Foi a última música que te mostrei na nossa casa'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/34MoL64z4nrmPpoCZp2Gwf?utm_source=generator"></iframe>', descricao: 'Descrição da música 7'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6gJ2H930mAD1zRqmoFiE4W?utm_source=generator"></iframe>', descricao: 'Descrição da música 8'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/4lriIG2vNqwDWzOj2I9rtj?utm_source=generator"></iframe>', descricao: 'Descrição da música 9'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/3Tc57t9l2O8FwQZtQOvPXK?utm_source=generator"></iframe>', descricao: 'Descrição da música 10'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6SuEgkFfiESo1pMLSyAbl3?utm_source=generator"></iframe>', descricao: 'Descrição da música 11'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6syar8JKCt3R9ZBl11zmgI?utm_source=generator"></iframe>', descricao: 'Descrição da música 12'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/4RyK6N4IQ85xxLgguQAFH5?utm_source=generator"></iframe>', descricao: 'Descrição da música 13'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/3ZMARVwdgUe6W9iItJUAJW?utm_source=generator"></iframe>', descricao: 'Descrição da música 14'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/2mdEsXPu8ZmkHRRtAdC09e?utm_source=generator"></iframe>', descricao: 'Descrição da música 15'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/4TjaDr4QlsfNYiRu3agmry?utm_source=generator"></iframe>', descricao: 'Descrição da música 16'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1BmvCldqrJeAKZ898FPdUZ?utm_source=generator"></iframe>', descricao: 'Descrição da música 17'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5lqYdK4KCkhJnng32ef1Qe?utm_source=generator"></iframe>', descricao: 'Descrição da música 18'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1ucnuV88gFTfR3BalmznDk?utm_source=generator"></iframe>', descricao: 'Descrição da música 19'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/7wp6CdZePdMmNsfs8kKNwN?utm_source=generator"></iframe>', descricao: 'Descrição da música 20'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/75c2zaSdDBSX0A8Jyvm4fO?utm_source=generator"></iframe>', descricao: 'Descrição da música 21'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6jHvX8ZnHKC1PnrPMJ0Emt?utm_source=generator"></iframe>', descricao: 'Descrição da música 22'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/2p8IUWQDrpjuFltbdgLOag?utm_source=generator"></iframe>', descricao: 'Descrição da música 23'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1unDZmI0EXHaZ7FWugXSqC?utm_source=generator"></iframe>', descricao: 'Descrição da música 24'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6rY5FAWxCdAGllYEOZMbjW?utm_source=generator"></iframe>', descricao: 'Descrição da música 25'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1VREVb61J8aSWrT2sMrnfu?utm_source=generator"></iframe>', descricao: 'Descrição da música 26'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5Q4H1XkVHxQjnrHCUpS61d?utm_source=generator"></iframe>', descricao: 'Descrição da música 27'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/3w3y8KPTfNeOKPiqUTakBh?utm_source=generator"></iframe>', descricao: 'Descrição da música 28'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/22tAOnXPrSFOp2En3WcyyA?utm_source=generator"></iframe>', descricao: 'Descrição da música 29'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/2byAARFegismY8FUFj8u6M?utm_source=generator"></iframe>', descricao: 'Descrição da música 30'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0BxE4FqsDD1Ot4YuBXwAPp?utm_source=generator"></iframe>', descricao: 'Descrição da música 31'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5QO79kh1waicV47BqGRL3g?utm_source=generator"></iframe>', descricao: 'Tu mostrou a primeira música que nos marcou. Lembro de tu pondo ela quando a gente tava no Cassino na primeira vez'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/06cqIVC8kRAT02qfHQT65v?utm_source=generator"></iframe>', descricao: 'Descrição da música 33'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/2Mvpojfs3257Yk0UsHsi7n?utm_source=generator"></iframe>', descricao: 'Descrição da música 34'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/190IqlryWu91WBKeDgZqZz?utm_source=generator"></iframe>', descricao: 'Descrição da música 35'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5uqKTVw6EbyNoWkEHxyZew?utm_source=generator"></iframe>', descricao: 'Descrição da música 36'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0gRNBFAXFhq1Z8QgTd0aXI?utm_source=generator"></iframe>', descricao: 'Descrição da música 37'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/0fBSs3fRoh1yJcne77fdu9?utm_source=generator"></iframe>', descricao: 'Descrição da música 38'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/4dYODiAYvJHWQJtNganYCY?utm_source=generator"></iframe>', descricao: 'Descrição da música 39'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6fVJ3yOBSax3MVw5ko7bJN?utm_source=generator"></iframe>', descricao: 'Descrição da música 40'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/62rwEl9PfnDqrjqNjApOwV?utm_source=generator"></iframe>', descricao: 'Descrição da música 41'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/6KfoDhO4XUWSbnyKjNp9c4?utm_source=generator"></iframe>', descricao: 'Descrição da música 42'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1Zqs6A90va6FUxQ7KJAckG?utm_source=generator"></iframe>', descricao: 'Descrição da música 43'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/4QUHJVXhwt14EzC0zOGa2I?utm_source=generator"></iframe>', descricao: 'Descrição da música 44'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/20R4HfKloPKgXDqU7UKk3x?utm_source=generator"></iframe>', descricao: 'Descrição da música 45'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5dRQUolXAVX3BbCiIxmSsf?utm_source=generator"></iframe>', descricao: 'Descrição da música 46'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/1kuGVB7EU95pJObxwvfwKS?utm_source=generator"></iframe>', descricao: 'Descrição da música 47'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/54K4n16mx0NVQbrbOvRYpa?utm_source=generator"></iframe>', descricao: 'Descrição da música 48'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/45djjsjM1lMV7fHoKEGm9h?utm_source=generator"></iframe>', descricao: 'Descrição da música 49'},
    {iframe: '<iframe class="spotify-embed" src="https://open.spotify.com/embed/track/5LDRdn2a5AGc8YLpYOnSfM?utm_source=generator"></iframe>', descricao: 'Descrição da música 50'},
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
    {descricao: 'Nossa primeira vez nas pista do Cassino', foto: 'nos/1.jpg'},
    {descricao: 'Na roda gigante do Festmar', foto: 'nos/2.jpg'},
    {descricao: 'No cinema do Praça', foto: 'nos/3.jpg'},
    {descricao: 'Nosso espelho do lixo, mas muito útil', foto: 'nos/4.jpg'},
    {descricao: 'Tu toda linda, na epoca que a gente tava viciado em Monster branco', foto: 'nos/5.jpg'},
    {descricao: 'Minha primeira vez no teu trabalho', foto: 'nos/6.jpg'},
    {descricao: 'Procurando roupa pra ti na Renner (como sempre, não achamos nada(tu não gostou de nenhuma que indiquei))', foto: 'nos/7.jpg'},
    {descricao: 'Nosso primeiro cosplay juntos', foto: 'nos/8.jpg'},
    {descricao: 'Nosso segundo cosplay juntos', foto: 'nos/9.jpg'},
    {descricao: 'Tirar foto de corpo todo é difícil', foto: 'nos/10.jpg'},
    {descricao: 'A gente meio dormindo/mei sujo', foto: 'nos/11.jpg'},
    {descricao: 'Tu atrapalhando meu sono', foto: 'nos/12.jpg'},
    {descricao: 'A gente com o Guts', foto: 'nos/13.jpg'},
    {descricao: 'A foto clássica de todo casal de adolescentes Pelotense', foto: 'nos/14.jpg'},
    {descricao: 'Último beijo com o Guts', foto: 'nos/15.jpg'},
    {descricao: 'Pós coito', foto: 'nos/16.jpg'},
    {descricao: 'Tu sempre com esse sorriso lindo', foto: 'nos/17.jpg'},
    {descricao: 'No Mequi Donalds', foto: 'nos/18.jpg'},
    {descricao: 'Primeiro date no Icarias', foto: 'nos/19.jpg'},
    {descricao: 'Descobrimos nossa sorveteria favorita', foto: 'nos/20.jpg'},
    {descricao: 'Mesmo quando te ver não era fácil, sempre valeu a pena', foto: 'nos/21.jpg'},
    {descricao: 'Descobrimos nossa segunda sorveteria favorita (só pq é caro, se não seria o melhor)', foto: 'nos/22.jpg'},
    {descricao: 'Amo passar os intervalos contigo', foto: 'nos/23.jpg'},
    {descricao: 'Tua primeira ida ao Laranjal. Esse dia foi muito divertido', foto: 'nos/24.jpg'},
    {descricao: 'Saudades das tua coxas, e dessa camisa', foto: 'nos/25.jpg'},
    {descricao: 'Sempre fazendo coisas estranhas com minhas bochechas', foto: 'nos/26.jpg'},
    {descricao: 'A gente bonito pra mais um role a sós', foto: 'nos/27.jpg'},
    {descricao: 'Um dos primeiros roles em Pel contigo', foto: 'nos/28.jpg'},
    {descricao: 'Te levando pra conhecero Una', foto: 'nos/29.jpg'},
    {descricao: 'Mesmo preocupada com gravidez, continua linda', foto: 'nos/30.jpg'},
    {descricao: 'Na tua casa, fazendo coisas escondidas', foto: 'nos/31.jpg'},
    {descricao: 'Aqui tudo começou de verdade', foto: 'nos/32.jpg'},
    {descricao: 'Todo dia, é teu dia', foto: 'nos/33.jpg'},
    {descricao: 'Linda de todos oss jeitos', foto: 'nos/34.jpg'},
    {descricao: 'Conhecendo o Bobs de Pelotas, mas queria mesmo os teu boobs', foto: 'nos/35.jpg'},
    {descricao: 'Rolezinho no Bobs de Rio Grande', foto: 'nos/36.jpg'},
    {descricao: 'Muito lindos combinando a roupa', foto: 'nos/37.jpg'},
    {descricao: 'Num dos cafés mais caros que já fomos, mas valeu a pena porque foi contigo', foto: 'nos/38.jpg'},
    {descricao: 'Uma das nossas mais clássicas fotos, ficou muito tempo no meu perfil', foto: 'nos/39.jpg'},
    {descricao: 'É sempre bom dormir abraçado contigo', foto: 'nos/40.jpg'},
    {descricao: 'Muito fofa com essa jaqueta maior que tu', foto: 'nos/41.jpg'},
    {descricao: 'Rolezinho de ônibus em Pel', foto: 'nos/42.jpg'},
    {descricao: 'Saudades tomar banho no Cassino contigo', foto: 'nos/43.jpg'},
    {descricao: 'Nossa primeira viagem juntos', foto: 'nos/44.jpg'},
    {descricao: 'Showzinho do Gabardines juntos, saudades', foto: 'nos/45.jpg'},
    {descricao: 'Mais um showzinho do Gabardines, tava muito bom, mas a gente tava tão cansado que foi pra casa pedir lanche e dormir', foto: 'nos/46.jpg'},
    {descricao: 'O pote de paçoca finalmente teve um fim', foto: 'nos/47.jpg'},
    {descricao: 'Lanchada antes do fim de uma fase, mas sempre terá a próxima, e a próxima será sempre melhor', foto: 'nos/48.jpg'},
    {descricao: 'Primeiro rolezinho no Cassino contigo', foto: 'nos/49.jpg'},
    {descricao: 'Te levando pra conhecer a Baronesa, e a pedra do mijo', foto: 'nos/50.jpg'}
];

//Fotos de lugares nossos
const allPlaces = [
    {descricao: 'Nossa casinha e meu amor', foto: 'lugares/1.jpg'},
    {descricao: 'Conhecendo a catedral de Pelotas. Muito linda, só não mais quetu', foto: 'lugares/2.jpg'},
    {descricao: 'Essa roda gigante foi muito massa', foto: 'lugares/3.jpg'},
    {descricao: 'A árvore de natal se mantendo firme até o fim', foto: 'lugares/4.jpg'},
    {descricao: 'Até o último dia ela nos iluminando. Fala dela', foto: 'lugares/5.jpg'},
    {descricao: 'Foi um rolê muito legal o Festmar, temo que ir mais vezes', foto: 'lugares/6.jpg'},
    {descricao: 'Não importa o rolê, não pode faltar um lanchino', foto: 'lugares/7.jpg'},
    {descricao: 'Nosso segurança particular', foto: 'lugares/8.jpg'},
    {descricao: 'Minha lancheria favorita é essa da Tramandaré (é a mais barata)', foto: 'lugares/9.jpg'},
    {descricao: 'Nossa Air Fry e um gato intruso', foto: 'lugares/10.jpg'},
    {descricao: 'Dorminhoco', foto: 'lugares/11.jpg'},
    {descricao: 'Nossa salinha era muito bonita', foto: 'lugares/12.jpg'},
    {descricao: 'Nosso cantinho', foto: 'lugares/13.jpg'},
    {descricao: 'Leds e quadros que nos deram muito trabalho, mas valeu muito a pena', foto: 'lugares/14.jpg'},
    {descricao: 'Tava muito bom, mas sofremos pra comer dois', foto: 'lugares/15.jpg'},
    {descricao: 'Saudades dessa paz', foto: 'lugares/16.jpg'},
    {descricao: 'Oi', foto: 'lugares/17.jpg'},
    {descricao: 'Sempre pensando em um lugar novo pra te levar. Meu sonho era te levar aqui, mesmo que fosse simples, minha piratinha', foto: 'lugares/18.jpg'},
    {descricao: 'O rolê foi legal mas a pizza tava um pouco queimada', foto: 'lugares/19.jpg'},
    {descricao: 'Amo rolês noturnos contigo', foto: 'lugares/20.jpg'},
    {descricao: 'Obrigado por não deixar passar em branco', foto: 'lugares/21.jpg'},
    {descricao: 'Saindo cedo pra trabalhar pelo nosso sonho', foto: 'lugares/22.jpg'},
    {descricao: 'Nossa casinha linda, e minha mulher ainda mais linda', foto: 'lugares/23.jpg'},
    {descricao: 'Saudades da nossa simples casinha e varal torto', foto: 'lugares/24.jpg'},
    {descricao: 'No Kalzone de Pel', foto: 'lugares/25.jpg'},
    {descricao: 'Já to chegando', foto: 'lugares/26.jpg'},
    {descricao: 'Só faltou tu esse dia', foto: 'lugares/27.jpg'},
    {descricao: 'De boa na nossa casa levemente bagunçada', foto: 'lugares/28.jpg'},
    {descricao: 'O começo de um sonho', foto: 'lugares/29.jpg'},
    {descricao: 'Passa essa foto. Não quero lembrar das bagunças', foto: 'lugares/30.jpg'},
    {descricao: 'Mini Hitler', foto: 'lugares/31.jpg'},
    {descricao: 'Minha sereia <3', foto: 'lugares/32.jpg'},
    {descricao: 'Obrigando o Guts a dividir comida. Acho que ele não gostou', foto: 'lugares/33.jpg'},
    {descricao: 'Obrigando o Guts a socializar. Acho que eleta desconfortavel', foto: 'lugares/34.jpg'},
    {descricao: 'Eu tava na abertura esse dia. Foi um dia feliz. Primeiro dia no novo emprego.', foto: 'lugares/35.jpg'},
    {descricao: 'Começando a desmontar nossa casinha', foto: 'lugares/36.jpg'},
    {descricao: 'Ficou bonita, mas aqui já tinhamos aceitado que as coisas não seriam mais como antes', foto: 'lugares/37.jpg'},
    {descricao: 'Eu sinto falta das comidas incnsistentes que faziamos aqui. Mas na maioria das vezes eram boas', foto: 'lugares/38.jpg'},
    {descricao: 'Onde eu jogava e tu tentava dormir', foto: 'lugares/39.jpg'},
    {descricao: 'Nossa salinha humilde, mas muito confortante', foto: 'lugares/40.jpg'},
    {descricao: 'As cobertas  da Havana que compramos no inicio e nos acompanharam até o final', foto: 'lugares/41.jpg'},
    {descricao: 'Minha gatinha e meu gatinho <3>', foto: 'lugares/42.jpg'},
    {descricao: 'Usando as cortinhas como parede. Foi uma ideia genial, pode falar', foto: 'lugares/43.jpg'},
    {descricao: 'Foi o Guts que bagunçou', foto: 'lugares/44.jpg'},
    {descricao: 'Como será que teria sido se esse ideia tivesse dado certo?', foto: 'lugares/45.jpg'},
    {descricao: 'Foi muito bom enquanto durou', foto: 'lugares/46.jpg'},
    {descricao: 'Nosso sofazinho. Uma das nossas primeiras "grandes" conquistas.', foto: 'lugares/47.jpg'},
    {descricao: 'Obrigado por tudo. Por ter ajudado a arrumar inumeras vezes, e agora, por estar me ajudando a desarrumar. Um dia estaremos arrumando denovo', foto: 'lugares/48.jpg'},
    {descricao: 'Eu te amo. Desculpa te fazer sofrer com essa mudança. Mas eu confio que valeu a pena. Sem dor, sem ganha. E depois de tanta dor, teremos muito ganho.', foto: 'lugares/49.jpg'},
    {descricao: 'Lugar lindo com namorada linda', foto: 'lugares/50.jpg'}
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
    countdownElement.textContent = "Feliz Dois Anos, meu amor!";
        return;
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
    heart.classList.add('beating');
        
        setTimeout(() => {
            firstPage.classList.add('hidden');
            setTimeout(() => {
                mainPage.classList.add('active');
                initMainPage();
            }, 500);
        }, 1600);
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
        
        playlistHistory = playlistHistory.slice(0, playlistCurrentIndex + 1);
        playlistHistory.push(randomIndex);
        playlistCurrentIndex = playlistHistory.length - 1;
    }
    
    const content = document.querySelector('#playlistModal .letter-content');

    // Substitui completamente o conteúdo com o Polaroid
    content.innerHTML = `
        <div class="playlist-polaroid">
            ${randomSong.iframe}
            <p class="playlist-descricao">${randomSong.descricao}</p>
        </div>
    `;
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