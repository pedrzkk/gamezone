/* =========================================
   GAMEZONE - SCRIPT PRINCIPAL
========================================= */


/* =========================================
   DADOS DOS JOGOS
========================================= */

const games = {

    fortnite: {
        title: "FORTNITE",
        category: "BATTLE ROYALE",

        description:
            "Fortnite combina combate, sobrevivência e construção em partidas dinâmicas. Os jogadores precisam coletar recursos, encontrar equipamentos e permanecer dentro da área segura.",

        how:
            "Os jogadores entram em um mapa, procuram armas e recursos e enfrentam outros participantes. A área jogável diminui progressivamente, fazendo com que os jogadores se encontrem.",

        difference:
            "Seu grande diferencial é a construção. Durante as partidas, o jogador pode criar paredes, rampas e estruturas para atacar ou se defender.",

        objective:
            "Ser o último jogador ou equipe sobrevivente.",

        color: "#55c9ff",

        features: [
            "Battle Royale",
            "Construção",
            "Grande mapa",
            "Eventos especiais",
            "Personalização de personagens",
            "Jogo em equipe",
            "Temporadas",
            "Atualizações frequentes"
        ]
    },


    freefire: {
        title: "FREE FIRE",
        category: "BATTLE ROYALE MOBILE",

        description:
            "Free Fire é um Battle Royale desenvolvido pensando em partidas rápidas e acessibilidade, principalmente em dispositivos móveis.",

        how:
            "Os jogadores entram em uma ilha e procuram armas e equipamentos enquanto a área segura diminui. É preciso sobreviver até o final.",

        difference:
            "Um dos principais diferenciais é o ritmo rápido das partidas e a possibilidade de rodar em uma grande variedade de dispositivos móveis.",

        objective:
            "Sobreviver aos adversários e alcançar a vitória sendo o último jogador ou equipe restante.",

        color: "#ff8b2d",

        features: [
            "Partidas rápidas",
            "Battle Royale",
            "Personagens",
            "Habilidades especiais",
            "Personalização",
            "Veículos",
            "Jogo em equipe",
            "Dispositivos móveis"
        ]
    },


    cs2: {
        title: "COUNTER-STRIKE 2",
        category: "FPS COMPETITIVO",

        description:
            "Counter-Strike 2 é um FPS competitivo baseado em confrontos entre equipes, estratégia, precisão e gerenciamento de recursos.",

        how:
            "Duas equipes se enfrentam em diferentes objetivos. Terroristas e Contra-Terroristas possuem funções diferentes e precisam trabalhar em equipe para vencer as rodadas.",

        difference:
            "Seu diferencial está na combinação entre mira, estratégia, economia, posicionamento e comunicação entre os jogadores.",

        objective:
            "Vencer as rodadas cumprindo o objetivo da equipe ou eliminando os adversários.",

        color: "#e8a23a",

        features: [
            "FPS competitivo",
            "Economia",
            "Rodadas",
            "Armas",
            "Estratégia",
            "Mapas competitivos",
            "Comunicação",
            "Precisão"
        ]
    },


    valorant: {
        title: "VALORANT",
        category: "FPS TÁTICO",

        description:
            "Valorant mistura o tradicional FPS tático com personagens que possuem habilidades únicas, criando diferentes possibilidades estratégicas.",

        how:
            "Duas equipes se enfrentam. Uma equipe tenta plantar o dispositivo enquanto a outra tenta impedir ou desarmá-lo.",

        difference:
            "A principal diferença está na combinação entre tiro preciso e habilidades dos agentes, criando estratégias que vão além da mira.",

        objective:
            "Vencer as rodadas eliminando a equipe adversária ou cumprindo o objetivo da partida.",

        color: "#ff4655",

        features: [
            "FPS tático",
            "Agentes",
            "Habilidades",
            "Rodadas",
            "Estratégia",
            "Mapas competitivos",
            "Economia",
            "Jogo em equipe"
        ]
    }

};


/* =========================================
   LOGIN FIXO
========================================= */

const usuarioCorreto = "admin";
const senhaCorreta = "123456";


/* =========================================
   PEGAR ELEMENTOS DO HTML
========================================= */

const loginScreen = document.getElementById("loginScreen");

const mainSite = document.getElementById("mainSite");

const loginForm = document.getElementById("loginForm");

const homePage = document.getElementById("homePage");

const gamePage = document.getElementById("gamePage");

const streamersPage = document.getElementById("streamersPage");

const gameTitle = document.getElementById("gameTitle");

const gameCategory = document.getElementById("gameCategory");

const gameDescription = document.getElementById("gameDescription");

const gameHow = document.getElementById("gameHow");

const gameDifference = document.getElementById("gameDifference");

const gameObjective = document.getElementById("gameObjective");

const gameFeatures = document.getElementById("gameFeatures");


/* =========================================
   VERIFICAR SE O LOGIN EXISTE
========================================= */

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const usernameInput =
            document.getElementById("username");

        const passwordInput =
            document.getElementById("password");

        const username =
            usernameInput.value.trim();

        const password =
            passwordInput.value.trim();


        /* VERIFICA USUARIO E SENHA */

        if (
            username === usuarioCorreto &&
            password === senhaCorreta
        ) {

            /* Esconde o login */

            loginScreen.classList.add("hidden");

            /* Mostra o site */

            mainSite.classList.remove("hidden");

            /* Garante que a Home apareça */

            homePage.classList.remove("hidden");

            gamePage.classList.add("hidden");

            /* Volta para o topo */

            window.scrollTo({
                top: 0,
                behavior: "auto"
            });

        } else {

            alert("Usuário ou senha incorretos!");

            passwordInput.value = "";

            passwordInput.focus();

        }

    });

}


/* =========================================
   ABRIR PÁGINA DO JOGO
========================================= */

function openGame(gameName) {

    const game = games[gameName];


    /* Verifica se o jogo existe */

    if (!game) {

        console.error(
            "Jogo não encontrado:",
            gameName
        );

        return;
    }


    /* =====================================
       COLOCAR INFORMAÇÕES NA PÁGINA
    ===================================== */

    gameTitle.textContent = game.title;

    gameCategory.textContent = game.category;

    gameDescription.textContent =
        game.description;

    gameHow.textContent =
        game.how;

    gameDifference.textContent =
        game.difference;

    gameObjective.textContent =
        game.objective;


    /* =====================================
       MUDAR A COR DO SITE
    ===================================== */

    document.documentElement.style.setProperty(
        "--game-color",
        game.color
    );


    /* =====================================
       CRIAR CARACTERÍSTICAS
    ===================================== */

    gameFeatures.innerHTML = "";


    game.features.forEach(function(feature) {

        const featureElement =
            document.createElement("div");

        featureElement.classList.add("feature");

        featureElement.textContent = feature;

        gameFeatures.appendChild(
            featureElement
        );

    });


    /* =====================================
       TROCAR HOME PELA PÁGINA DO JOGO
    ===================================== */

    homePage.classList.add("hidden");

    gamePage.classList.remove("hidden");


    /* =====================================
       REINICIAR ANIMAÇÃO
    ===================================== */

    gamePage.classList.remove(
        "page-transition"
    );

    void gamePage.offsetWidth;

    gamePage.classList.add(
        "page-transition"
    );


    /* =====================================
       VOLTAR PARA O TOPO
    ===================================== */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   FECHAR PÁGINA DO JOGO
========================================= */

function closeGame() {

    gamePage.classList.add("hidden");

    homePage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   BOTÃO INÍCIO
========================================= */

function showHome() {

    gamePage.classList.add("hidden");

    homePage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   IR PARA OS JOGOS
========================================= */

function scrollToGames() {

    gamePage.classList.add("hidden");

    homePage.classList.remove("hidden");


    setTimeout(function() {

        const gamesSection =
            document.getElementById(
                "gamesSection"
            );

        if (gamesSection) {

            gamesSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 100);

}


/* =========================================
   IR PARA SOBRE
========================================= */

function showAbout() {

    gamePage.classList.add("hidden");

    homePage.classList.remove("hidden");


    setTimeout(function() {

        const aboutSection =
            document.getElementById(
                "aboutSection"
            );

        if (aboutSection) {

            aboutSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 100);

}


/* =========================================
   SAIR DA CONTA
========================================= */

function logout() {

    /* Esconde o site */

    mainSite.classList.add("hidden");

    /* Mostra o login */

    loginScreen.classList.remove("hidden");

    /* Volta para a Home */

    gamePage.classList.add("hidden");

    homePage.classList.remove("hidden");


    /* Limpa os campos */

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");


    if (usernameInput) {
        usernameInput.value = "";
    }

    if (passwordInput) {
        passwordInput.value = "";
    }


    /* Volta para o topo */

    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


/* =========================================
   EFEITO 3D NOS CARDS DOS JOGOS
========================================= */

const gameCards =
    document.querySelectorAll(".game-card");


gameCards.forEach(function(card) {


    /* Quando o mouse entra */

    card.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;


            card.style.transform =
                "perspective(800px) " +
                "rotateX(" + rotateX + "deg) " +
                "rotateY(" + rotateY + "deg) " +
                "translateY(-8px)";

        }
    );


    /* Quando o mouse sai */

    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform = "";

        }
    );

});


/* =========================================
   MENSAGEM NO CONSOLE
========================================= */

console.log(
    "GAMEZONE carregado com sucesso!"
);

console.log(
    "Usuário: admin"
);

console.log(
    "Senha: 123456"
);