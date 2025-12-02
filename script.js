const heart = document.getElementById('heart');
const countdownElement = document.getElementById('countdown');
const firstPage = document.getElementById('firstPage');
const mainPage = document.getElementById('mainPage');

// Data alvo: 04/12/2025 às 00:00
const targetDate = new Date('2025-12-04T00:00:00').getTime();

// Data de início do relacionamento: 04/12/2023 às 15:00
const relationshipStart = new Date('2023-12-04T15:00:00').getTime();

// 50 Frases do oráculo
const oracleMessages = [
    "Mensagem do oráculo 1",
    "Mensagem do oráculo 2",
    "Mensagem do oráculo 3",
    "Mensagem do oráculo 4",
    "Mensagem do oráculo 5",
    "Mensagem do oráculo 6",
    "Mensagem do oráculo 7",
    "Mensagem do oráculo 8",
    "Mensagem do oráculo 9",
    "Mensagem do oráculo 10",
    "Mensagem do oráculo 11",
    "Mensagem do oráculo 12",
    "Mensagem do oráculo 13",
    "Mensagem do oráculo 14",
    "Mensagem do oráculo 15",
    "Mensagem do oráculo 16",
    "Mensagem do oráculo 17",
    "Mensagem do oráculo 18",
    "Mensagem do oráculo 19",
    "Mensagem do oráculo 20",
    "Mensagem do oráculo 21",
    "Mensagem do oráculo 22",
    "Mensagem do oráculo 23",
    "Mensagem do oráculo 24",
    "Mensagem do oráculo 25",
    "Mensagem do oráculo 26",
    "Mensagem do oráculo 27",
    "Mensagem do oráculo 28",
    "Mensagem do oráculo 29",
    "Mensagem do oráculo 30",
    "Mensagem do oráculo 31",
    "Mensagem do oráculo 32",
    "Mensagem do oráculo 33",
    "Mensagem do oráculo 34",
    "Mensagem do oráculo 35",
    "Mensagem do oráculo 36",
    "Mensagem do oráculo 37",
    "Mensagem do oráculo 38",
    "Mensagem do oráculo 39",
    "Mensagem do oráculo 40",
    "Mensagem do oráculo 41",
    "Mensagem do oráculo 42",
    "Mensagem do oráculo 43",
    "Mensagem do oráculo 44",
    "Mensagem do oráculo 45",
    "Mensagem do oráculo 46",
    "Mensagem do oráculo 47",
    "Mensagem do oráculo 48",
    "Mensagem do oráculo 49",
    "Mensagem do oráculo 50"
];

// 10 Saudações por período (total 40)
const timeGreetings = {
    madrugada: [
        "Saudação madrugada 1",
        "Saudação madrugada 2",
        "Saudação madrugada 3",
        "Saudação madrugada 4",
        "Saudação madrugada 5",
        "Saudação madrugada 6",
        "Saudação madrugada 7",
        "Saudação madrugada 8",
        "Saudação madrugada 9",
        "Saudação madrugada 10"
    ],
    manha: [
        "Saudação manhã 1",
        "Saudação manhã 2",
        "Saudação manhã 3",
        "Saudação manhã 4",
        "Saudação manhã 5",
        "Saudação manhã 6",
        "Saudação manhã 7",
        "Saudação manhã 8",
        "Saudação manhã 9",
        "Saudação manhã 10"
    ],
    tarde: [
        "Saudação tarde 1",
        "Saudação tarde 2",
        "Saudação tarde 3",
        "Saudação tarde 4",
        "Saudação tarde 5",
        "Saudação tarde 6",
        "Saudação tarde 7",
        "Saudação tarde 8",
        "Saudação tarde 9",
        "Saudação tarde 10"
    ],
    noite: [
        "Saudação noite 1",
        "Saudação noite 2",
        "Saudação noite 3",
        "Saudação noite 4",
        "Saudação noite 5",
        "Saudação noite 6",
        "Saudação noite 7",
        "Saudação noite 8",
        "Saudação noite 9",
        "Saudação noite 10"
    ]
};

// 10 Cartas diferentes
const letters = [
    `<p>Carta 1</p><br><p>Conteúdo da carta 1...</p>`,
    `<p>Carta 2</p><br><p>Conteúdo da carta 2...</p>`,
    `<p>Carta 3</p><br><p>Conteúdo da carta 3...</p>`,
    `<p>Carta 4</p><br><p>Conteúdo da carta 4...</p>`,
    `<p>Carta 5</p><br><p>Conteúdo da carta 5...</p>`,
    `<p>Carta 6</p><br><p>Conteúdo da carta 6...</p>`,
    `<p>Carta 7</p><br><p>Conteúdo da carta 7...</p>`,
    `<p>Carta 8</p><br><p>Conteúdo da carta 8...</p>`,
    `<p>Carta 9</p><br><p>Conteúdo da carta 9...</p>`,
    `<p>Carta 10</p><br><p>Conteúdo da carta 10...</p>`
];

// 50 Fotos
const allPhotos = [
    'foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg',
    'foto6.jpg', 'foto7.jpg', 'foto8.jpg', 'foto9.jpg', 'foto10.jpg',
    'foto11.jpg', 'foto12.jpg', 'foto13.jpg', 'foto14.jpg', 'foto15.jpg',
    'foto16.jpg', 'foto17.jpg', 'foto18.jpg', 'foto19.jpg', 'foto20.jpg',
    'foto21.jpg', 'foto22.jpg', 'foto23.jpg', 'foto24.jpg', 'foto25.jpg',
    'foto26.jpg', 'foto27.jpg', 'foto28.jpg', 'foto29.jpg', 'foto30.jpg',
    'foto31.jpg', 'foto32.jpg', 'foto33.jpg', 'foto34.jpg', 'foto35.jpg',
    'foto36.jpg', 'foto37.jpg', 'foto38.jpg', 'foto39.jpg', 'foto40.jpg',
    'foto41.jpg', 'foto42.jpg', 'foto43.jpg', 'foto44.jpg', 'foto45.jpg',
    'foto46.jpg', 'foto47.jpg', 'foto48.jpg', 'foto49.jpg', 'foto50.jpg'
];

// 50 Lugares para o mapa
const allPlaces = [
    {nome: 'Lugar 1', descricao: 'Descrição do lugar 1', foto: 'lugar1.jpg'},
    {nome: 'Lugar 2', descricao: 'Descrição do lugar 2', foto: 'lugar2.jpg'},
    {nome: 'Lugar 3', descricao: 'Descrição do lugar 3', foto: 'lugar3.jpg'},
    {nome: 'Lugar 4', descricao: 'Descrição do lugar 4', foto: 'lugar4.jpg'},
    {nome: 'Lugar 5', descricao: 'Descrição do lugar 5', foto: 'lugar5.jpg'},
    {nome: 'Lugar 6', descricao: 'Descrição do lugar 6', foto: 'lugar6.jpg'},
    {nome: 'Lugar 7', descricao: 'Descrição do lugar 7', foto: 'lugar7.jpg'},
    {nome: 'Lugar 8', descricao: 'Descrição do lugar 8', foto: 'lugar8.jpg'},
    {nome: 'Lugar 9', descricao: 'Descrição do lugar 9', foto: 'lugar9.jpg'},
    {nome: 'Lugar 10', descricao: 'Descrição do lugar 10', foto: 'lugar10.jpg'},
    {nome: 'Lugar 11', descricao: 'Descrição do lugar 11', foto: 'lugar11.jpg'},
    {nome: 'Lugar 12', descricao: 'Descrição do lugar 12', foto: 'lugar12.jpg'},
    {nome: 'Lugar 13', descricao: 'Descrição do lugar 13', foto: 'lugar13.jpg'},
    {nome: 'Lugar 14', descricao: 'Descrição do lugar 14', foto: 'lugar14.jpg'},
    {nome: 'Lugar 15', descricao: 'Descrição do lugar 15', foto: 'lugar15.jpg'},
    {nome: 'Lugar 16', descricao: 'Descrição do lugar 16', foto: 'lugar16.jpg'},
    {nome: 'Lugar 17', descricao: 'Descrição do lugar 17', foto: 'lugar17.jpg'},
    {nome: 'Lugar 18', descricao: 'Descrição do lugar 18', foto: 'lugar18.jpg'},
    {nome: 'Lugar 19', descricao: 'Descrição do lugar 19', foto: 'lugar19.jpg'},
    {nome: 'Lugar 20', descricao: 'Descrição do lugar 20', foto: 'lugar20.jpg'},
    {nome: 'Lugar 21', descricao: 'Descrição do lugar 21', foto: 'lugar21.jpg'},
    {nome: 'Lugar 22', descricao: 'Descrição do lugar 22', foto: 'lugar22.jpg'},
    {nome: 'Lugar 23', descricao: 'Descrição do lugar 23', foto: 'lugar23.jpg'},
    {nome: 'Lugar 24', descricao: 'Descrição do lugar 24', foto: 'lugar24.jpg'},
    {nome: 'Lugar 25', descricao: 'Descrição do lugar 25', foto: 'lugar25.jpg'},
    {nome: 'Lugar 26', descricao: 'Descrição do lugar 26', foto: 'lugar26.jpg'},
    {nome: 'Lugar 27', descricao: 'Descrição do lugar 27', foto: 'lugar27.jpg'},
    {nome: 'Lugar 28', descricao: 'Descrição do lugar 28', foto: 'lugar28.jpg'},
    {nome: 'Lugar 29', descricao: 'Descrição do lugar 29', foto: 'lugar29.jpg'},
    {nome: 'Lugar 30', descricao: 'Descrição do lugar 30', foto: 'lugar30.jpg'},
    {nome: 'Lugar 31', descricao: 'Descrição do lugar 31', foto: 'lugar31.jpg'},
    {nome: 'Lugar 32', descricao: 'Descrição do lugar 32', foto: 'lugar32.jpg'},
    {nome: 'Lugar 33', descricao: 'Descrição do lugar 33', foto: 'lugar33.jpg'},
    {nome: 'Lugar 34', descricao: 'Descrição do lugar 34', foto: 'lugar34.jpg'},
    {nome: 'Lugar 35', descricao: 'Descrição do lugar 35', foto: 'lugar35.jpg'},
    {nome: 'Lugar 36', descricao: 'Descrição do lugar 36', foto: 'lugar36.jpg'},
    {nome: 'Lugar 37', descricao: 'Descrição do lugar 37', foto: 'lugar37.jpg'},
    {nome: 'Lugar 38', descricao: 'Descrição do lugar 38', foto: 'lugar38.jpg'},
    {nome: 'Lugar 39', descricao: 'Descrição do lugar 39', foto: 'lugar39.jpg'},
    {nome: 'Lugar 40', descricao: 'Descrição do lugar 40', foto: 'lugar40.jpg'},
    {nome: 'Lugar 41', descricao: 'Descrição do lugar 41', foto: 'lugar41.jpg'},
    {nome: 'Lugar 42', descricao: 'Descrição do lugar 42', foto: 'lugar42.jpg'},
    {nome: 'Lugar 43', descricao: 'Descrição do lugar 43', foto: 'lugar43.jpg'},
    {nome: 'Lugar 44', descricao: 'Descrição do lugar 44', foto: 'lugar44.jpg'},
    {nome: 'Lugar 45', descricao: 'Descrição do lugar 45', foto: 'lugar45.jpg'},
    {nome: 'Lugar 46', descricao: 'Descrição do lugar 46', foto: 'lugar46.jpg'},
    {nome: 'Lugar 47', descricao: 'Descrição do lugar 47', foto: 'lugar47.jpg'},
    {nome: 'Lugar 48', descricao: 'Descrição do lugar 48', foto: 'lugar48.jpg'},
    {nome: 'Lugar 49', descricao: 'Descrição do lugar 49', foto: 'lugar49.jpg'},
    {nome: 'Lugar 50', descricao: 'Descrição do lugar 50', foto: 'lugar50.jpg'}
];

// 100 Mensagens únicas de visita
const visitMessages = [
    "Mensagem visita 1", "Mensagem visita 2", "Mensagem visita 3", "Mensagem visita 4", "Mensagem visita 5",
    "Mensagem visita 6", "Mensagem visita 7", "Mensagem visita 8", "Mensagem visita 9", "Mensagem visita 10",
    "Mensagem visita 11", "Mensagem visita 12", "Mensagem visita 13", "Mensagem visita 14", "Mensagem visita 15",
    "Mensagem visita 16", "Mensagem visita 17", "Mensagem visita 18", "Mensagem visita 19", "Mensagem visita 20",
    "Mensagem visita 21", "Mensagem visita 22", "Mensagem visita 23", "Mensagem visita 24", "Mensagem visita 25",
    "Mensagem visita 26", "Mensagem visita 27", "Mensagem visita 28", "Mensagem visita 29", "Mensagem visita 30",
    "Mensagem visita 31", "Mensagem visita 32", "Mensagem visita 33", "Mensagem visita 34", "Mensagem visita 35",
    "Mensagem visita 36", "Mensagem visita 37", "Mensagem visita 38", "Mensagem visita 39", "Mensagem visita 40",
    "Mensagem visita 41", "Mensagem visita 42", "Mensagem visita 43", "Mensagem visita 44", "Mensagem visita 45",
    "Mensagem visita 46", "Mensagem visita 47", "Mensagem visita 48", "Mensagem visita 49", "Mensagem visita 50",
    "Mensagem visita 51", "Mensagem visita 52", "Mensagem visita 53", "Mensagem visita 54", "Mensagem visita 55",
    "Mensagem visita 56", "Mensagem visita 57", "Mensagem visita 58", "Mensagem visita 59", "Mensagem visita 60",
    "Mensagem visita 61", "Mensagem visita 62", "Mensagem visita 63", "Mensagem visita 64", "Mensagem visita 65",
    "Mensagem visita 66", "Mensagem visita 67", "Mensagem visita 68", "Mensagem visita 69", "Mensagem visita 70",
    "Mensagem visita 71", "Mensagem visita 72", "Mensagem visita 73", "Mensagem visita 74", "Mensagem visita 75",
    "Mensagem visita 76", "Mensagem visita 77", "Mensagem visita 78", "Mensagem visita 79", "Mensagem visita 80",
    "Mensagem visita 81", "Mensagem visita 82", "Mensagem visita 83", "Mensagem visita 84", "Mensagem visita 85",
    "Mensagem visita 86", "Mensagem visita 87", "Mensagem visita 88", "Mensagem visita 89", "Mensagem visita 90",
    "Mensagem visita 91", "Mensagem visita 92", "Mensagem visita 93", "Mensagem visita 94", "Mensagem visita 95",
    "Mensagem visita 96", "Mensagem visita 97", "Mensagem visita 98", "Mensagem visita 99", "🎉 Mensagem especial visita 100! 🎉"
];

// Contador de visitas
let visitCount = 0;

// Carregar contador de visitas
function loadVisitCount() {
    const stored = localStorage.getItem('visitCount');
    visitCount = stored ? parseInt(stored) : 0;
    visitCount++;
    
    // Limitar a 100
    if (visitCount > 100) visitCount = 100;
    
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
    const randomPhoto = allPhotos[Math.floor(Math.random() * allPhotos.length)];
    
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = `
        <div class="single-polaroid">
            <img src="${randomPhoto}" alt="Nossa memória" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2230%22%3E❤️%3C/text%3E%3C/svg%3E'">
            <p class="polaroid-caption">Uma memória especial nossa</p>
        </div>
    `;
    
    document.getElementById('galleryModal').classList.add('active');
}

// Abrir playlist
function openPlaylist() {
    const modal = document.getElementById('playlistModal');
    const content = document.querySelector('#playlistModal .letter-content');
    
    const playlistHtml = '<p style="text-align: center;">Em breve você poderá adicionar suas músicas especiais aqui! 🎵</p>';
    
    modal.classList.add('active');
    typeWriter(content, playlistHtml, 30);
}

// Abrir mapa (mostra 1 lugar aleatório dos 50)
function openMap() {
    const randomPlace = allPlaces[Math.floor(Math.random() * allPlaces.length)];
    
    const modal = document.getElementById('mapModal');
    const content = document.querySelector('#mapModal .letter-content');
    
    let mapHtml = `
        <div class="single-place">
            <div class="single-polaroid">
                <img src="${randomPlace.foto}" alt="${randomPlace.nome}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23333%22 width=%22300%22 height=%22300%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2230%22%3E📍%3C/text%3E%3C/svg%3E'">
                <div class="place-info">
                    <h3 class="place-name">${randomPlace.nome}</h3>
                    <p class="place-description">${randomPlace.descricao}</p>
                </div>
            </div>
        </div>
    `;
    
    content.innerHTML = mapHtml;
    modal.classList.add('active');
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