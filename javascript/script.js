// Sets the current category loaded on the page
let currentCategory = "Family";
let currentContainer = "family";

// This loads the "games" data once the website is loaded
let savedGames = localStorage.getItem("games");
if (savedGames) games = JSON.parse(savedGames);

// Keeps track of the current game selected
let selectedGame;

// --- Navigation Links ---
function index() {
    window.location.href = "index.html";
}

function catalog() {
    window.location.href = "catalog.html";
}

function account() {
    window.location.href = "account.html";
}

function about() {
    window.location.href = "about.html";
}

// --- Banners ---
function banner1() {
    window.open("https://boardgamegeek.com/");
}

function banner2() {
    window.open("https://games4you.rs/");
}

// Displaying the top 3 best rated games on index.html
function displayTopRatedGames() {
    const container = document.getElementById("top-rated-games");
    container.innerHTML = "";

    const topGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 3);
    topGames.forEach(game => {
        container.innerHTML += `
            <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                <div class="game-card">
                    <img src="${game.image}" class="game-image">
                    <h4>${game.name}</h4>
                    <p>${game.price}</p>
                    <p>${showRating(game.rating)}</p>
                    <button class="view-button" onclick="viewGame(${game.id})" data-translate="view">Pogledaj</button>
                </div>
            </div>
        `;
    });
}

// Showing specific sections for gallery.html and catalog.html
function showSection(sectionId) {
    const sections = document.querySelectorAll(".show-section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "flex";
        
        // For catalog.html
        currentContainer = sectionId;
        if (sectionId == "family") currentCategory = "Family";
        if (sectionId == "strategy") currentCategory = "Strategy";
        if (sectionId == "party") currentCategory = "Party";
    }

    // Remove active class from all links
    document.querySelectorAll(".selector a").forEach(link => {
        link.classList.remove("active");
    });

    // Add active class to the current one
    document.getElementById(sectionId + "-select").classList.add("active");
}

// Displaying games based on category in catalog.html
function displayGames(category, containerId) {
    currentCategory = category;
    currentContainer = containerId;

    const container = document.getElementById(containerId);
    container.innerHTML = "";
    
    const filteredGames = games.filter(game => game.category === category);
    filteredGames.forEach(game => {
        container.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="game-card">
                    <img src="${game.image}" class="game-image" alt="${game.name}">
                    <h4>${game.name}</h4>
                    <p>${game.price}</p>
                    <p>${showRating(game.rating)}</p>
                    <button class="view-button" onclick="viewGame(${game.id})" data-translate="view">Pogledaj</button>
                </div>
            </div>
        `;
    });
}

// The user can download a PDF of all the games shown currently on catalog.html
function downloadPDF() {
    window.print();
}

// Sorts the games based on the method of sorting selected by the user on catalog.html
function sortGames() {
    const option = document.getElementById("sort").value;
    const container = document.getElementById(currentContainer);
    let sortedGames = games.filter(game => game.category == currentCategory);
    
    if (option == "default") sortedGames.sort((a, b) => a.id - b.id);
    if (option == "name-asc") sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    if (option == "name-desc") sortedGames.sort((a, b) => b.name.localeCompare(a.name));
    if (option == "price-asc") sortedGames.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    if (option == "price-desc") sortedGames.sort((a, b) => getPrice(b.price) - getPrice(a.price));

    container.innerHTML = "";
    sortedGames.forEach(game => {
        container.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="game-card">
                    <img src="${game.image}" class="game-image" alt="${game.name}">
                    <h4>${game.name}</h4>
                    <p>${game.price}</p>
                    <p>${showRating(game.rating)}</p>
                    <button class="view-button" onclick="viewGame(${game.id})" data-translate="view">Pogledaj</button>
                </div>
            </div>
        `;
    });
}

// Allows the user to search for a game manually on catalog.html
function searchName() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const container = document.getElementById(currentContainer);
    const filteredGames = games.filter(game => game.category === currentCategory && game.name.toLowerCase().includes(searchText));

    container.innerHTML = "";
    filteredGames.forEach(game => {
        container.innerHTML += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="game-card">
                    <img src="${game.image}" class="game-image" alt="${game.name}">
                    <h4>${game.name}</h4>
                    <p>${game.price}</p>
                    <p>${showRating(game.rating)}</p>
                    <button class="view-button" onclick="viewGame(${game.id})" data-translate="view">Pogledaj</button>
                </div>
            </div>
        `;
    });
}

// Displaying the current state of the cart in account.html
function displayCart() {
    const container = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length == 0) {
        container.innerHTML = `<p data-translate="emptyCart">Vaša korpa je trenutno prazna.</p>`;
        return;
    }

    let total = 0;
    container.innerHTML = "";
    cart.forEach(item => {
        container.innerHTML += `
            <div class="game-card mb-3 p-3">
                <div class="row g-3 align-items-center">
                    <div class="col-md-3 col-sm-4 text-center">
                        <img src="${item.image}" class="cart-image rounded" alt="${item.name}">
                    </div>

                    <div class="col-md-9 col-sm-8">
                        <h4>${item.name}</h4>
                        <p><strong data-translate="price">Cena:</strong> ${item.price}</p>
                        <div class="d-flex align-items-center gap-2">
                            <strong data-translate="quantity">Količina:</strong>
                            <button class="quantity-button" onclick="changeQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-button" onclick="changeQuantity(${item.id}, 1)">+</button>
                        </div>
                        <br>
                        <button id="remove-button" onclick="remove(${item.id})" data-translate="remove">Ukloni</button>
                    </div>
                </div>
            </div>
        `;
        total += getPrice(item.price) * item.quantity;
    });

    container.innerHTML += `
        <br>
        <br>
        <hr>
        <h3><strong data-translate="total">Ukupno:&nbsp;</strong>${total.toLocaleString()} RSD</h3>
        <button id="checkout-button" onclick="checkout()" data-translate="confirm">Potvrdi Kupovinu</button>
    `;
}

// Change the quantity of the item in the cart when either the '-' or '+' button is clicked on account.html
function changeQuantity(id, amount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(item => item.id == id);
    item.quantity += amount;
    if (item.quantity < 1) item.quantity = 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Remove the item from the cart in account.html
function remove(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Confirm the purchase in account.html
function checkout() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let history = JSON.parse(localStorage.getItem("history")) || [];
    
    history.push(...cart);
    localStorage.setItem("history", JSON.stringify(history));
    localStorage.removeItem("cart");
    
    displayCart();
    displayHistory();
    const language = localStorage.getItem("language") || "srb";
    alert(translations[language].finished);
}

// Shows all of the previous orders in account.html
function displayHistory() {
    const container = document.getElementById("history-container");
    const history = JSON.parse(localStorage.getItem("history")) || [];

    if (history.length == 0) {
        container.innerHTML = `
            <p data-translate="noHistory">Nemate prethodnih porudžbina.</p>
        `;
        return;
    }

    container.innerHTML = "";
    history.forEach(order => {
        container.innerHTML += `
            <div class="game-card mb-3">
                <h5>${order.name}</h5>
                <p><strong data-translate="quantity">Količina:</strong> ${order.quantity}</p>
                <p><strong data-translate="price">Cena:</strong> ${order.price}</p>
            </div>
        `;
    });
}

// Shows the current rating of a game
function showRating(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) stars += "★";
        else stars += "☆";
    }
    return stars;
}

// Adds the game into the cart from game.html
function addToCart() {
    const quantity = Number(document.getElementById("quantity").value);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(item => item.id == selectedGame.id);
    if (existingItem) existingItem.quantity += quantity;
    else {
        cart.push({
            id: selectedGame.id,
            name: selectedGame.name,
            price: selectedGame.price,
            image: selectedGame.image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    const language = localStorage.getItem("language") || "srb";
    alert(translations[language].added + " " + selectedGame.name + " x " + quantity);
}

// Highlights the stars based on the rating selected on game.html
function highlightStars(number) {
    const stars = document.querySelectorAll(".stars");
    stars.forEach((star, index) => {
        if (index < number) star.textContent = "★";
        else star.textContent = "☆";
    });
}

// Resets the stars to all blank once the mouse is no longer hovering over any of the stars in game.html
function resetStars() {
    const stars = document.querySelectorAll(".stars");
    stars.forEach(star => {
        star.textContent = "☆";
    });
}

// Allows the user to rate the game out of 5 stars on game.html
function rateGame(stars) {
    selectedGame.ratingTotal += stars;
    selectedGame.ratingCounter++;
    selectedGame.rating = Math.round(selectedGame.ratingTotal / selectedGame.ratingCounter);
    document.getElementById("current-rating").innerHTML = showRating(selectedGame.rating);
    localStorage.setItem("games", JSON.stringify(games));
}

// Submits the comment entered by the user in game.html, then displays the new comment afterwards
function submitComment() {
    const text = document.getElementById("enter-comment").value;
    if (text.trim() == "") return;
    selectedGame.comments.push(text);
    localStorage.setItem("games", JSON.stringify(games));
    document.getElementById("enter-comment").value = "";
    displayComments();
}

// Displays all of the comments (if there are any) for that particular game on game.html
function displayComments() {
    const container = document.getElementById("comments");
    container.innerHTML = "";
    selectedGame.comments.forEach(comment => {
        container.innerHTML += `
            <div class="comment mb-4">
                <p>${comment}</p>
            </div>
        `;
    });
}

// Converts the price to an integer
function getPrice(price) {
    return Number(price.replace(".", "").replace(" RSD", ""));
}

// Takes the user to the page dedicated to the game they selected (game.html)
function viewGame(id) {
    window.location.href = "game.html?id=" + id;
}

$(document).ready(function() {
    let language = localStorage.getItem("language") || "srb";

    if (window.location.pathname.includes("index.html")) {
        document.getElementById("nav1").style.borderBottom = "3px solid #732100";
        displayTopRatedGames();
    }

    if (window.location.pathname.includes("gallery.html")) {
        document.getElementById("nav2").style.borderBottom = "3px solid #732100";
        const params = new URLSearchParams(window.location.search);
        const section = params.get("section");

        if (section) showSection(section);
        // Default section when opening gallery.html normally
        else showSection("store");
    }

    if (window.location.pathname.includes("catalog.html")) {
        document.getElementById("nav3").style.borderBottom = "3px solid #732100";

        displayGames("Family", "family");
        displayGames("Strategy", "strategy");
        displayGames("Party", "party");

        const params = new URLSearchParams(window.location.search);
        const section = params.get("section");

        if (section) showSection(section);
        // Default section when opening catalog.html normally
        else showSection("family");
    }

    if (window.location.pathname.includes("account.html")) {
        document.getElementById("nav4").style.borderBottom = "3px solid #732100";
        displayCart();
        displayHistory();
    }

    if (window.location.pathname.includes("about.html")) {
        document.getElementById("nav5").style.borderBottom = "3px solid #732100";
    }

    if (window.location.pathname.includes("game.html")) {
        document.getElementById("nav3").style.borderBottom = "3px solid #732100";

        const params = new URLSearchParams(window.location.search);
        const id = Number(params.get("id"));
        const game = games.find(game => game.id === id);
        
        if (!game) return;
        selectedGame = game;
        const breadcrumbCategory = document.getElementById("breadcrumb-category");
        const language = localStorage.getItem("language") || "srb";

        if (game.category === "Family") {
            breadcrumbCategory.textContent = translations[language].family;
            breadcrumbCategory.href = "catalog.html?section=family";
        }
        if (game.category === "Strategy") {
            breadcrumbCategory.textContent = translations[language].strategy;
            breadcrumbCategory.href = "catalog.html?section=strategy";
        }
        if (game.category === "Party") {
            breadcrumbCategory.textContent = translations[language].party;
            breadcrumbCategory.href = "catalog.html?section=party";
        }

        document.getElementById("breadcrumb-game").textContent = game.name;
        const container = document.getElementById("game-info");
        container.innerHTML = `
            <div class="row g-4">
                <div class="col-lg-4 col-md-5 col-sm-12 text-center">
                    <img src="${game.image}" class="img-fluid rounded game-details-image" alt="${game.name}">
                </div>

                <div class="col-lg-8 col-md-7 col-sm-12">
                    <h1>${game.name}</h1>
                    <div class="row">
                        <div class="col-md-6">
                            <p>
                                <strong data-translate="category">Kategorija:</strong> 
                                <span data-translate="${game.categoryTranslation}">${game.category}</span>
                            </p>
                            <p><strong data-translate="numOfPlayers">Broj Igrača:</strong> ${game.numberOfPlayers}</p>
                            <p><strong data-translate="age">Uzrast:</strong> ${game.age}</p>
                        </div>

                        <div class="col-md-6">
                            <p><strong data-translate="duration">Trajanje:</strong> ${game.averageTime}</p>
                            <p><strong data-translate="price">Cena:</strong> ${game.price}</p>
                            <p><strong data-translate="rating">Ocena:</strong><span id="current-rating">${showRating(game.rating)}</span></p>
                        </div>
                    </div>
                    <hr>
                    <p data-translate="${game.descriptionTranslation}">${game.description}</p>
                    <hr>

                    <h4 data-translate="cart">Korpa</h4>
                    <div class="row g-2 align-items-center">
                        <div class="col-auto">
                            <label for="quantity" class="form-label mb-0" data-translate="quantity">Količina:</label>
                        </div>

                        <div class="col-auto">
                            <input type="number" id="quantity" min="1" value="1" class="form-control">
                        </div>

                        <div class="col-auto">
                            <button id="add-cart" onclick="addToCart()" data-translate="addToCart">Dodaj u Korpu</button>
                        </div>
                    </div>
                    <br>

                    <div>
                        <strong>Oceni Igru:&nbsp;</strong>
                        <button class="stars" onmouseover="highlightStars(1)" onmouseout="resetStars()" onclick="rateGame(1)">☆</button>
                        <button class="stars" onmouseover="highlightStars(2)" onmouseout="resetStars()" onclick="rateGame(2)">☆</button>
                        <button class="stars" onmouseover="highlightStars(3)" onmouseout="resetStars()" onclick="rateGame(3)">☆</button>
                        <button class="stars" onmouseover="highlightStars(4)" onmouseout="resetStars()" onclick="rateGame(4)">☆</button>
                        <button class="stars" onmouseover="highlightStars(5)" onmouseout="resetStars()" onclick="rateGame(5)">☆</button>
                    </div>
                </div>
            </div>
            <br>
        `;

        const ratings = document.getElementById("ratings");
        ratings.innerHTML = `
            <div class="row">
                <hr>
                <p><strong data-translate="comments">Komentari:</strong></p>
                <textarea id="enter-comment" placeholder="Ostavite komentar o igri:" data-translate="leaveAComment" data-translate-attribute="placeholder"></textarea>
                <br>
                <button id="submit-comment" onclick="submitComment()" data-translate="addComment">Dodaj Komentar</button>
                <br>
                <hr>
                <div id="comments"></div>
            </div>
        `;
        displayComments();
    }

    applyLanguage(language);
});
