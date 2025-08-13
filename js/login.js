const form = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value.trim().toLowerCase();
    const password = form.querySelector('input[type="password"]').value;

    if (!email || !password) {
        return showMessage("БЫСТРО ЗАПОЛНИЛ ВСЕ ПОЛЯ ДУРАЧОК!", "red");
    }

    if (!validateEmail(email)) {
        return showMessage("ВВедите корректный имейл", "red");
    }

    if (password.length < 6) {
        return showMessage("Пароль должен быть минимум 6 символов", "red");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    // идентичный пароль и email
    if (!user) {
        return showMessage("Неверный пароль или имейл", "red");
    }

    if (user.password != password) {
        return showMessage("Неверный пароль", "red");
    }

    localStorage.setItem(
        "currentUser",
        JSON.stringify({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }));
    showMessage("Вход выполнен успешно", "green");

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1500);
});

function showMessage(text, color) {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}