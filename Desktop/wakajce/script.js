
 // Data wakacji: 26 czerwca 2027
const d = new Date(2027, 5, 26);

// Funkcja dodaje zero przed liczbami mniejszymi niż 10
function dopiszzero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}

// Funkcja wyświetla aktualną godzinę
function pokazZegar() {
    const teraz = new Date();

    // Pobieramy godziny, minuty i sekundy
    const g = dopiszzero(teraz.getHours());
    const m = dopiszzero(teraz.getMinutes());
    const s = dopiszzero(teraz.getSeconds());

    // Wyświetlamy godzinę na stronie
    document.getElementById("zegar").textContent = g + ":" + m + ":" + s;
}

// Funkcja wyświetla aktualną datę
function pokazdate() {
    const teraz = new Date();

    // Zmieniamy datę na polski format
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}

//Funkcja oblicza liczbę dni między dwiema datami


function policz(a, b) {
    const r = b - a;

    // Zamieni milisekundy na dni i zaokragli w gore
    return Math.ceil(r / 86400000);
}

// Funkcja wyświetla liczbę dni do wakacji
function pokazdni() {
    document.getElementById("dni").textContent = policz(new Date(), d);
}

// Funkcja wyświetla aktualny dzień tygodnia
function pokazDzien() {
    const teraz = new Date();

    // Pobieramy nazwę dnia tygodnia po polsku
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL", {
        weekday: "long"
    });
}

// Uruchamiamy funkcje po załadowaniu skryptu
pokazdate();
pokazZegar();
pokazdni();
pokazDzien();

// Aktualizujemy zegar co sekundę
setInterval(pokazZegar, 1000);
