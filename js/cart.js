const cartItemsDiv = document.getElementById("cart-items");
const totalDiv = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartItemsDiv.innerHTML = "";
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Корзина пуста</p>";
        totalDiv.textContent = "Итого: 0$";
        return;
    }

    let total = 0;

    cart.forEach((game, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            <div>
                <img src="${game.img}" width="150" height="200" />
                <h3>${game.name}</h3>
                <p>Цена: ${game.price}$</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `;
        cartItemsDiv.append(item);

        // Убираем лишние символы и складываем
        const priceNumber = parseFloat(String(game.price).replace(/[^0-9.]/g, '')) || 0;
        total += priceNumber;
    });

    // Отображаем сумму с двумя знаками после запятой
    totalDiv.textContent = "Итого: " + total.toFixed(2) + "$";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Первый рендер корзины
renderCart();
