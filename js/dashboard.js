document.addEventListener("DOMContentLoaded", () => {
    // Проверка пользователя
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    welcomeMessage.textContent = `Добро пожаловать, ${currentUser.firstName} ${currentUser.lastName}!`;

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    });

    // Массив с играми
    const games = [
        { name: "Cyberpunk 2077", price: 59.99, discount: 50, img: "../img/epic_games_img/Cyberpunk 2077.jpg" },
        { name: "RDR 2", price: 39.99, discount: 60, img: "../img/epic_games_img/RDR 2.jpg" },
        { name: "The Witcher 3", price: 19.99, discount: 80, img: "../img/epic_games_img/The Witcher 3.jpg" },
        { name: "Far Cry 6", price: 49.99, discount: 55, img: "../img/epic_games_img/Far Cry 6.jpg" },
        { name: "Assassin's Creed Valhalla", price: 59.99, discount: 45, img: "../img/epic_games_img/Assassin's Creed Valhalla.jpg" },
        { name: "Hitman 3", price: 39.99, discount: 60, img: "../img/epic_games_img/Hitman 3.jpg" },
        { name: "Dying Light 2", price: 49.99, discount: 50, img: "../img/epic_games_img/Dying Light 2.jpg" },
        { name: "Elden Ring", price: 59.99, discount: 30, img: "../img/epic_games_img/Без%20названия%20(1).jpg" },
        { name: "Minecraft", price: 26.95, discount: 20, img: "../img/epic_games_img/Minecraft.jpg" },
        { name: "GTA V", price: 40.95, discount: 25, img: "../img/epic_games_img/GTA V.jpg" },
        { name: "Fortnite", price: 29.99, discount: 20, img: "../img/epic_games_img/Fortnite.jpg" },
        { name: "Call of Duty", price: 59.99, discount: 40, img: "../img/epic_games_img/Call of Duty.jpg" },
        { name: "Valorant", price: 19.99, discount: 10, img: "../img/epic_games_img/Valorant.jpg" },
        { name: "Overwatch 2", price: 39.99, discount: 50, img: "../img/epic_games_img/Overwatch 2.jpg" },
        { name: "League of Legends", price: 24.99, discount: 15, img: "../img/epic_games_img/League_of_Legends.jpg" },
        { name: "Horizon Forbidden West", price: 69.99, discount: 35, img: "../img/epic_games_img/Horizon_Forbidden_West.jpg" },
        { name: "Resident Evil Village", price: 59.99, discount: 45, img: "../img/epic_games_img/Resident_Evil_Village.jpg" },
        { name: "God of War", price: 49.99, discount: 50, img: "../img/epic_games_img/God_of_War.jpg" },
        { name: "FIFA 24", price: 59.99, discount: 20, img: "../img/epic_games_img/FIFA_24.jpg" },
        { name: "Rocket League", price: 19.99, discount: 60, img: "../img/epic_games_img/Rocket_League.jpg" },
        { name: "Mafia Definitive Edition", price: 39.99, discount: 45, img: "../img/epic_games_img/Mafia_Definitive_Edition.jpg" },
        { name: "Battlefield V", price: 49.99, discount: 55, img: "../img/epic_games_img/Battlefield_V.jpg" },
        { name: "Need for Speed Heat", price: 59.99, discount: 50, img: "../img/epic_games_img/NFS_Heat.jpg" },
        { name: "CyberConnect Naruto Storm 4", price: 29.99, discount: 60, img: "../img/epic_games_img/Naruto_Storm_4.jpg" },
        { name: "Sekiro: Shadows Die Twice", price: 59.99, discount: 35, img: "../img/epic_games_img/Sekiro.jpg" },
        { name: "Mortal Kombat 11", price: 39.99, discount: 50, img: "../img/epic_games_img/MK11.jpg" },
        { name: "Watch Dogs Legion", price: 49.99, discount: 40, img: "../img/epic_games_img/Watch_Dogs_Legion.jpg" },
        { name: "Forza Horizon 5", price: 69.99, discount: 30, img: "../img/epic_games_img/Forza_Horizon_5.jpg" },
        { name: "PUBG Battlegrounds", price: 29.99, discount: 60, img: "../img/epic_games_img/PUBG.jpg" },
        { name: "CyberConnect Demon Slayer", price: 39.99, discount: 45, img: "../img/epic_games_img/Demon_Slayer.jpg" },
        { name: "Monster Hunter World", price: 49.99, discount: 50, img: "../img/epic_games_img/Monster_Hunter_World.jpg" },
        { name: "Shadow of the Tomb Raider", price: 39.99, discount: 55, img: "../img/epic_games_img/Shadow_of_Tomb_Raider.jpg" },
        { name: "Metro Exodus", price: 29.99, discount: 65, img: "../img/epic_games_img/Metro_Exodus.jpg" },
        { name: "Days Gone", price: 59.99, discount: 40, img: "../img/epic_games_img/Days_Gone.jpg" },
        { name: "Detroit: Become Human", price: 49.99, discount: 50, img: "../img/epic_games_img/Detroit_Become_Human.jpg" },
        { name: "Final Fantasy XV", price: 39.99, discount: 45, img: "../img/epic_games_img/Final_Fantasy_XV.jpg" },
        { name: "The Last of Us Part I", price: 69.99, discount: 25, img: "../img/epic_games_img/The_Last_of_Us.jpg" },
        { name: "Spider-Man Remastered", price: 59.99, discount: 30, img: "../img/epic_games_img/Spider_Man_Remastered.jpg" },
        { name: "Death Stranding", price: 49.99, discount: 55, img: "../img/epic_games_img/Death_Stranding.jpg" },
        { name: "Alan Wake Remastered", price: 39.99, discount: 60, img: "../img/epic_games_img/Alan_Wake_Remastered.jpg" },


        { name: "Crysis Remastered", price: 39.99, discount: 50, img: "../img/epic_games_img/Crysis_Remastered.jpg" },
        { name: "Halo Infinite", price: 59.99, discount: 35, img: "../img/epic_games_img/Halo_Infinite.jpg" },
        { name: "The Division 2", price: 49.99, discount: 60, img: "../img/epic_games_img/The_Division_2.jpg" },
        { name: "Ghost Recon Breakpoint", price: 39.99, discount: 55, img: "../img/epic_games_img/Ghost_Recon_Breakpoint.jpg" },
        { name: "Battlefield 1", price: 29.99, discount: 70, img: "../img/epic_games_img/Battlefield_1.jpg" },
        { name: "Chernobylite", price: 34.99, discount: 45, img: "../img/epic_games_img/Chernobylite.jpg" },
        { name: "Escape from Tarkov", price: 44.99, discount: 20, img: "../img/epic_games_img/Escape_from_Tarkov.jpg" },
        { name: "Payday 2", price: 19.99, discount: 80, img: "../img/epic_games_img/Payday_2.jpg" },
        { name: "Sniper Elite 5", price: 49.99, discount: 40, img: "../img/epic_games_img/Sniper_Elite_5.jpg" },
        { name: "Hitman 2", price: 39.99, discount: 55, img: "../img/epic_games_img/Hitman_2.jpg" },
        { name: "Watch Dogs 2", price: 29.99, discount: 65, img: "../img/epic_games_img/Watch_Dogs_2.jpg" },
        { name: "Just Cause 4", price: 24.99, discount: 70, img: "../img/epic_games_img/Just_Cause_4.jpg" },
        { name: "Mad Max", price: 19.99, discount: 75, img: "../img/epic_games_img/Mad_Max.jpg" },
        { name: "Sleeping Dogs", price: 14.99, discount: 80, img: "../img/epic_games_img/Sleeping_Dogs.jpg" },
        { name: "Mafia III", price: 29.99, discount: 65, img: "../img/epic_games_img/Mafia_III.jpg" },
        { name: "L.A. Noire", price: 19.99, discount: 60, img: "../img/epic_games_img/LA_Noire.jpg" },
        { name: "Crysis 3", price: 29.99, discount: 55, img: "../img/epic_games_img/Crysis_3.jpg" },
        { name: "Far Cry 5", price: 39.99, discount: 50, img: "../img/epic_games_img/Far_Cry_5.jpg" },
        { name: "Assassin's Creed Odyssey", price: 49.99, discount: 45, img: "../img/epic_games_img/AC_Odyssey.jpg" },
        { name: "Assassin's Creed Origins", price: 39.99, discount: 50, img: "../img/epic_games_img/AC_Origins.jpg" }

    ];

    // Функция рендера игр
    const gamesList = document.getElementById("games-list");
    function renderGames(filteredGames) {
        gamesList.innerHTML = "";
        filteredGames.forEach(game => {
            const newPrice = (game.price * (1 - game.discount / 100)).toFixed(2);

            const card = document.createElement("div");
            card.className = "game-card";
            card.innerHTML = `
        <img src="${game.img}" alt="${game.name}" class="game-img">
        <h3 class="game-name">${game.name}</h3>
        <p class="old-price">$${game.price}</p>
        <p class="discount">-${game.discount}%</p>
        <p class="new-price">$${newPrice}</p>
        <button class="buy-btn">Buy Now</button>
      `;
            gamesList.appendChild(card);
        });
    }

    // Первый рендер
    renderGames(games);

    // Поиск
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = games.filter(g => g.name.toLowerCase().includes(value));
        renderGames(filtered);
    });

    // Навигация
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const text = link.textContent;

            if (text === "Discover") {
                renderGames(games);
            } else if (text === "Browse") {
                renderGames(games.filter(g => g.discount >= 50));
            } else if (text === "News") {
                alert("Новости пока в разработке!");
            }
        });
    });
});
const signinBtn = document.querySelector(".signin");

// Проверяем, есть ли уже пользователь в localStorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    // Если пользователь уже авторизован, можно изменить кнопку на "Выйти" или показать его имя
    signinBtn.textContent = `Привет, ${currentUser.firstName}`;
} else {
    signinBtn.addEventListener("click", () => {
        // Перенаправляем на страницу логина
        window.location.href = "login.html"; // путь к твоей странице логина
    });
}
