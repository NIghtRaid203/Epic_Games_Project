document.addEventListener("DOMContentLoaded", () => {
    
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));


    if (!currentUser) {
        window.location.href = "login.html";
    }
    welcomeMessage.textContent = `Добро пожаловать, ${currentUser.firstName} ${currentUser.lastName}!`

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");

        window.location.href = "index.html";
    })
})