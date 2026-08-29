/* =========================================================
   GAMEZONE - SCRIPT.JS
   ========================================================= */


/* =========================================================
   LOGIN FIXO
   ========================================================= */

const usuarioCorreto = "admin";
const senhaCorreta = "123456";


/* =========================================================
   PEGAR ELEMENTOS DO HTML
   ========================================================= */

const loginScreen = document.getElementById("loginScreen");
const mainSite = document.getElementById("mainSite");

const loginForm = document.getElementById("loginForm");

const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");

const gameTitle = document.getElementById("gameTitle");
const gameCategory = document.getElementById("gameCategory");

const gameDescription = document.getElementById("gameDescription");
const gameHow = document.getElementById("gameHow");
const gameDifference = document.getElementById("gameDifference");
const gameObjective = document.getElementById("gameObjective");
const gameFeatures = document.getElementById("gameFeatures");


/* =========================================================
   DADOS DOS JOGOS
   ========================================================= */

const jogos = {

    fortnite: {
        nome: "Fortnite",
        categoria: "Battle Royale",

        descricao:
            "Fortnite é um jogo de batalha online que mistura combate, construção e muita criatividade.",

        comoFunciona:
            "Os jogadores entram em um mapa, coletam armas e recursos e enfrentam outros jogadores até restar apenas um vencedor.",

        diferencial:
            "Seu grande diferencial é o sistema de construção, além dos eventos, colaborações e mudanças constantes no mapa.",

        objetivo:
            "Ser o último jogador ou equipe sobrevivente.",

        recursos: [
            "Construção",
            "Battle Royale",
            "Eventos especiais",
            "Personalização de personagens",
            "Armas variadas"
        ],

        tema: "fortnite",

        streamer:
            "https://www.youtube.com/@TypicalGamer",

        launcher:
            "https://store.epicgames.com/pt-BR/p/fortnite",

        skins:
            "https://www.fortnite.com/item-shop",

        capa:
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    },


    freefire: {
        nome: "Free Fire",
        categoria: "Battle Royale Mobile",

        descricao:
            "Free Fire é um Battle Royale desenvolvido para dispositivos móveis, com partidas rápidas e acessíveis.",

        comoFunciona:
            "Os jogadores caem em uma ilha, procuram armas e equipamentos e lutam para sobreviver enquanto a área segura diminui.",

        diferencial:
            "Seu principal diferencial são as partidas rápidas, personagens com habilidades e otimização para celulares.",

        objetivo:
            "Sobreviver até ser o último jogador ou equipe.",

        recursos: [
            "Partidas rápidas",
            "Personagens",
            "Habilidades especiais",
            "Skins",
            "Battle Royale"
        ],

        tema: "freefire",

        streamer:
            "https://www.youtube.com/@Nobru",

        launcher:
            "https://ff.garena.com/",

        skins:
            "https://ff.garena.com/en/",

        capa:
            "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80"
    },


    cs2: {
        nome: "Counter-Strike 2",
        categoria: "FPS Competitivo",

        descricao:
            "Counter-Strike 2 é um FPS competitivo baseado em equipes, estratégia, precisão e comunicação.",

        comoFunciona:
            "Duas equipes se enfrentam em diferentes objetivos. Terroristas e contra-terroristas precisam cumprir seus objetivos para vencer as rodadas.",

        diferencial:
            "O jogo se destaca pelo alto nível competitivo, precisão das armas, economia e estratégia em equipe.",

        objetivo:
            "Vencer rodadas cumprindo os objetivos ou eliminando a equipe adversária.",

        recursos: [
            "FPS competitivo",
            "Sistema econômico",
            "Mapas estratégicos",
            "Armas",
            "Modo competitivo"
        ],

        tema: "cs2",

        streamer:
            "https://www.youtube.com/@Gaules",

        launcher:
            "https://store.steampowered.com/app/730/CounterStrike_2/",

        skins:
            "https://steamcommunity.com/market/",

        capa:
            "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80"
    },


    valorant: {
        nome: "Valorant",
        categoria: "FPS Tático",

        descricao:
            "Valorant é um FPS tático da Riot Games que mistura armas tradicionais com habilidades de agentes.",

        comoFunciona:
            "Duas equipes de cinco jogadores se enfrentam em rodadas. Cada agente possui habilidades próprias que podem mudar o resultado do confronto.",

        diferencial:
            "O grande diferencial é a combinação entre tiro preciso e habilidades únicas dos agentes.",

        objetivo:
            "Vencer as rodadas eliminando a equipe adversária ou cumprindo o objetivo do mapa.",

        recursos: [
            "Agentes",
            "Habilidades",
            "FPS tático",
            "Mapas competitivos",
            "Sistema de rodadas"
        ],

        tema: "valorant",

        streamer:
            "https://www.youtube.com/@Sacy",

        launcher:
            "https://playvalorant.com/pt-br/",

        skins:
            "https://playvalorant.com/pt-br/",

        capa:
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80"
    }

};


/* =========================================================
   LOGIN
   ========================================================= */

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuarioInput =
            document.getElementById("username");

        const senhaInput =
            document.getElementById("password");

        const usuario =
            usuarioInput ? usuarioInput.value.trim() : "";

        const senha =
            senhaInput ? senhaInput.value.trim() : "";


        if (
            usuario === usuarioCorreto &&
            senha === senhaCorreta
        ) {

            if (loginScreen) {
                loginScreen.classList.add("hidden");
            }

            if (mainSite) {
                mainSite.classList.remove("hidden");
            }

        } else {

            alert("Usuário ou senha incorretos!");

        }

    });

}


/* =========================================================
   ABRIR PÁGINA DO JOGO
   ========================================================= */

function openGame(jogo) {

    const dados = jogos[jogo];

    if (!dados) {
        console.error("Jogo não encontrado:", jogo);
        return;
    }


    /* TÍTULOS */

    if (gameTitle) {
        gameTitle.textContent = dados.nome;
    }

    if (gameCategory) {
        gameCategory.textContent = dados.categoria;
    }


    /* TEXTOS */

    if (gameDescription) {
        gameDescription.textContent = dados.descricao;
    }

    if (gameHow) {
        gameHow.textContent = dados.comoFunciona;
    }

    if (gameDifference) {
        gameDifference.textContent = dados.diferencial;
    }

    if (gameObjective) {
        gameObjective.textContent = dados.objetivo;
    }


    /* RECURSOS */

    if (gameFeatures) {

        gameFeatures.innerHTML = "";

        dados.recursos.forEach(function(recurso) {

            const item = document.createElement("li");

            item.textContent = recurso;

            gameFeatures.appendChild(item);

        });

    }


    /* =====================================================
       TEMA DO JOGO
       ===================================================== */

    document.body.classList.remove(
        "theme-fortnite",
        "theme-freefire",
        "theme-cs2",
        "theme-valorant"
    );

    document.body.classList.add(
        "theme-" + dados.tema
    );


    /* =====================================================
       IMAGEM DE FUNDO
       ===================================================== */

    const background =
        document.querySelector(".game-page-background");

    if (background) {

        background.style.backgroundImage =
            "url('" + dados.capa + "')";

    }


    /* =====================================================
       LINKS DO MENU LATERAL
       ===================================================== */

    const streamerButton =
        document.getElementById("streamerButton");

    const launcherButton =
        document.getElementById("launcherButton");

    const skinsButton =
        document.getElementById("skinsButton");


    if (streamerButton) {

        streamerButton.onclick = function() {

            window.open(
                dados.streamer,
                "_blank"
            );

        };

    }


    if (launcherButton) {

        launcherButton.onclick = function() {

            window.open(
                dados.launcher,
                "_blank"
            );

        };

    }


    if (skinsButton) {

        skinsButton.onclick = function() {

            window.open(
                dados.skins,
                "_blank"
            );

        };

    }


    /* =====================================================
       ABRIR PÁGINA
       ===================================================== */

    if (homePage) {
        homePage.classList.add("hidden");
    }

    if (gamePage) {

        gamePage.classList.remove("hidden");

        gamePage.classList.remove("game-animation");

        void gamePage.offsetWidth;

        gamePage.classList.add("game-animation");

    }


    /* Fecha o menu lateral ao entrar */

    const sideMenu =
        document.getElementById("gameSideMenu");

    if (sideMenu) {
        sideMenu.classList.remove("open");
    }

}


/* =========================================================
   VOLTAR PARA HOME
   ========================================================= */

function closeGame() {

    if (gamePage) {
        gamePage.classList.add("hidden");
    }

    if (homePage) {
        homePage.classList.remove("hidden");
    }


    document.body.classList.remove(
        "theme-fortnite",
        "theme-freefire",
        "theme-cs2",
        "theme-valorant"
    );


    /* Fecha menu */

    const sideMenu =
        document.getElementById("gameSideMenu");

    if (sideMenu) {
        sideMenu.classList.remove("open");
    }

}


/* =========================================================
   MENU LATERAL
   ========================================================= */

function toggleGameMenu() {

    const sideMenu =
        document.getElementById("gameSideMenu");

    if (!sideMenu) {
        console.warn("Menu lateral não encontrado.");
        return;
    }

    sideMenu.classList.toggle("open");

}


/* =========================================================
   FECHAR MENU
   ========================================================= */

function closeGameMenu() {

    const sideMenu =
        document.getElementById("gameSideMenu");

    if (sideMenu) {
        sideMenu.classList.remove("open");
    }

}


/* =========================================================
   ESC FECHA MENU
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeGameMenu();

        }

    }
);


/* =========================================================
   FECHAR MENU CLICANDO FORA
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const sideMenu =
            document.getElementById("gameSideMenu");

        const menuButton =
            document.getElementById("gameMenuButton");

        if (!sideMenu) return;

        if (
            sideMenu.classList.contains("open") &&
            !sideMenu.contains(event.target) &&
            event.target !== menuButton
        ) {

            sideMenu.classList.remove("open");

        }

    }
);


/* =========================================================
   FUNÇÕES DOS BOTÕES DO MENU
   ========================================================= */

function openStreamer() {

    const title =
        gameTitle ? gameTitle.textContent : "";

    let link = "";

    if (title === "Fortnite") {
        link = jogos.fortnite.streamer;
    }

    if (title === "Free Fire") {
        link = jogos.freefire.streamer;
    }

    if (title === "Counter-Strike 2") {
        link = jogos.cs2.streamer;
    }

    if (title === "Valorant") {
        link = jogos.valorant.streamer;
    }

    if (link) {
        window.open(link, "_blank");
    }

}


function openLauncher() {

    const title =
        gameTitle ? gameTitle.textContent : "";

    let link = "";

    if (title === "Fortnite") {
        link = jogos.fortnite.launcher;
    }

    if (title === "Free Fire") {
        link = jogos.freefire.launcher;
    }

    if (title === "Counter-Strike 2") {
        link = jogos.cs2.launcher;
    }

    if (title === "Valorant") {
        link = jogos.valorant.launcher;
    }

    if (link) {
        window.open(link, "_blank");
    }

}


function openSkins() {

    const title =
        gameTitle ? gameTitle.textContent : "";

    let link = "";

    if (title === "Fortnite") {
        link = jogos.fortnite.skins;
    }

    if (title === "Free Fire") {
        link = jogos.freefire.skins;
    }

    if (title === "Counter-Strike 2") {
        link = jogos.cs2.skins;
    }

    if (title === "Valorant") {
        link = jogos.valorant.skins;
    }

    if (link) {
        window.open(link, "_blank");
    }

}


/* =========================================================
   GARANTIR QUE AS FUNÇÕES FIQUEM DISPONÍVEIS NO HTML
   ========================================================= */

window.openGame = openGame;
window.closeGame = closeGame;
window.toggleGameMenu = toggleGameMenu;
window.closeGameMenu = closeGameMenu;

window.openStreamer = openStreamer;
window.openLauncher = openLauncher;
window.openSkins = openSkins;


/* =========================================================
   FINAL
   ========================================================= */

console.log("GameZone carregado com sucesso!");