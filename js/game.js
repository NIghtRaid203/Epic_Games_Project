const gameDetailDiv = document.getElementById("cards");

const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));

const detail = document.createElement('div')
detail.innerHTML = `
    <div>
        <h1>Добро пожаловать в Epic games!</h1>
        <img src="${selectedGame.img}" alt="" />
        <h1>${selectedGame.name}</h1>
        <h3>Скидка: ${selectedGame.discount}%</h3>
        <h2>Цена: ${selectedGame.price}$</h2>
        <p>
          Put your mastery of the blaster, lightsaber, and the Force to the test online and offline 
          in STAR WARS™ Battlefront™ II: Celebration Edition
        </p>
        <button class="buy-btn">В корзину</button>
    </div>
`

gameDetailDiv.append(detail)

document.querySelector(".buy-btn").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedGame);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
});
