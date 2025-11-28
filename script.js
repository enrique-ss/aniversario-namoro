const heart = document.getElementById('heart');
        const countdownElement = document.getElementById('countdown');
        const firstPage = document.getElementById('firstPage');
        const mainPage = document.getElementById('mainPage');

        // Data alvo: 04/12/2025 às 00:00
        const targetDate = new Date('2025-12-04T00:00:00').getTime();
        
        // Data de início do relacionamento: 04/12/2023 às 15:00
        const relationshipStart = new Date('2023-12-04T15:00:00').getTime();

        // Frases do oráculo
        const oracleMessages = [
            "Amo o seu sorriso que ilumina meu dia",
            "Amo como você me faz rir nos momentos mais simples",
            "Amo a forma carinhosa como você me olha",
            "Amo sua força e determinação",
            "Amo como você cuida de mim",
            "Amo suas histórias e sua forma de contar",
            "Amo seus abraços apertados",
            "Amo como você me entende sem precisar falar",
            "Amo sua risada contagiante",
            "Amo como você torna tudo mais especial",
            "Amo seus sonhos e como você luta por eles",
            "Amo como você me faz sentir amado(a)",
            "Amo sua paciência comigo",
            "Amo como você transforma dias comuns em mágicos"
        ];

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
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('relationshipTimer').textContent = 
                `${days} dias ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        // Atualizar a cada segundo
        setInterval(updateCountdown, 1000);
        setInterval(updateRelationshipTimer, 1000);
        updateCountdown();
        updateRelationshipTimer();

        // Clique no coração
        heart.addEventListener('click', function() {
            const now = new Date().getTime();
            
            if (now < targetDate) {
                heart.classList.add('beating');
                
                setTimeout(() => {
                    alert('Tá ansiosa?');
                }, 2000);
                
                setTimeout(() => {
                    heart.classList.remove('beating');
                }, 3000);
            } else {
                // Transição para a segunda página
                heart.classList.add('beating');
                
                setTimeout(() => {
                    firstPage.classList.add('hidden');
                    setTimeout(() => {
                        mainPage.classList.add('active');
                    }, 500);
                }, 1600);
            }
        });

        // Funções dos modais
        function openLetter() {
            document.getElementById('letterModal').classList.add('active');
        }

        function openOracle() {
            const randomMessage = oracleMessages[Math.floor(Math.random() * oracleMessages.length)];
            document.getElementById('oracleText').textContent = randomMessage;
            document.getElementById('oracleModal').classList.add('active');
        }

        function openGallery() {
            // Aqui você pode adicionar suas fotos
            const photos = [
                'foto1.jpg',
                'foto2.jpg',
                'foto3.jpg',
                'foto4.jpg'
            ];
            
            const gallery = document.getElementById('galleryGrid');
            gallery.innerHTML = photos.map(photo => 
                `<div class="polaroid">
                    <img src="${photo}" alt="Nossa memória" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22200%22/%3E%3Ctext fill=%22%23666%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E❤️%3C/text%3E%3C/svg%3E'">
                </div>`
            ).join('');
            
            document.getElementById('galleryModal').classList.add('active');
        }

        function openPlaylist() {
            document.getElementById('playlistModal').classList.add('active');
        }

        function openMap() {
            document.getElementById('mapModal').classList.add('active');
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