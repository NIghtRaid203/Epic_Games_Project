const cartItemsDiv = document.getElementById("cart-items");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Корзина пуста</p>";
} else {
    let total = 0;
    cart.forEach((game, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <div>
                <img src="${game.img}" width="100" />
                <h3>${game.name}</h3>
                <p>Цена: ${game.price}$</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `;
        cartItemsDiv.append(item);
        total += parseFloat(game.price);
    });

    totalDiv.textContent = "Итого: " + total + "$";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
