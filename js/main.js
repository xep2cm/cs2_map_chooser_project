// Массив всех возможных карт
const maps = ["Mirage", "Inferno", "Dust 2", "Nuke", "Ancient"];

// Функция для случайного выбора карты
function chooseRandomMap() {
    // Генерируем случайное число между 0 и длиной массива карт
    let randomIndex = Math.floor(Math.random() * maps.length);
    
    // Показываем выбранную карту в соответствующем div
    document.getElementById("result-message").innerHTML = `
        <b>Ваша карта:</b> ${maps[randomIndex]}
    `;
}