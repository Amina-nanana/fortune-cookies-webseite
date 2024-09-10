const quotes = [
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The purpose of our lives is to be happy. – Dalai Lama",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "In the end, it's not the years in your life that count, it's the life in your years. – Abraham Lincoln",
    "Life is short, and it's up to you to make it sweet. – Sarah Louise Delany",
    "The longer I live, the more I realize the impact of attitude on life. – Charles R. Swindoll"
];

// Функция для генерации случайной цитаты
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Функция для вывода цитаты в HTML
function displayRandomQuote() {
    document.getElementById('quote').innerText = getRandomQuote();
}

// Вызов функции при загрузке страницы
window.onload = displayRandomQuote;