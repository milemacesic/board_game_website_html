const translations = {

    srb: {
        // --- HTML Files ---
        // Navigation, Breadcrumbs, Footer
        website: "DRUŠTVENE IGRE",
        home: "Početna",
        gallery: "Galerija",
        store: "Prodavnica",
        games: "Igre",
        tournaments: "Turnire",
        catalog: "Katalog Igara",
        family: "Porodične",
        strategy: "Strateške",
        party: "Zabavne",
        account: "Moj Nalog",
        about: "O Nama",
        footer: "Copyright 2026, Mile Maćešić, Odsek za Softversko Inženjerstvo Elektrotehničkog fakulteta Univerziteta u Beogradu",

        // index.html
        welcome: "♔ Dobrodošli na stranici Društvene Igre! ♕",
        welcomeText: "Zabava za sve generacije! Otkrijte veliki izbor igara za porodicu, strategiju i žurku, sve na jednom mestu.",
        welcomeButton: "Pretraga Igara",
        sales: "Akcije",
        salesText: "Sve strateške igre imaju popust od 20%",
        catanTournament: "Katan Turnir - 25.07.2026.",
        chessTournament: "Šah Turnir - 31.07.2026. - 02.08.2026.",
        new: "Novo u Prodaji",
        topGames: "Najbolje Ocenjene Igre",
        visit: "Preporučuje se poseta:",

        // gallery.html
        video1: "Azul Turnir",
        video2: "Catan Uputstvo",

        // catalog.html
        download: "Preuzmi Katalog",
        default: "Podrazumevano Sortiranje",
        AtoZ: "Naziv A-Z",
        ZtoA: "Naziv Z-A",
        priceUp: "Cena Rastuće",
        priceDown: "Cena Opadajuće",
        search: "Pretraži po nazivu: ",

        // account.html
        cart: "Korpa",
        orderHistory: "Istorija Porudžbina",

        // about.html
        storeHistory: "Istorijat Prodavnice",
        storeHistoryText: "Osnovana 2004. godine. Nudimo ogroman izbor društvenih igara gde naši kupci mogu da biraju za porodice, za strategiju ili za žurku. Takođe redovno organizujemo turnire i druženje za sve ljubitelje društvenih igara.",
        mission: "Naša Misija",
        missionText: "Verujemo da dobra igra spaja ljude, i zato kod nas nudimo samo najbolje igre. Naš cilj je da svima pomognemo da nađu najbolji izbor za dobar provod.",
        awards: "Nagrade i Priznanja",
        award1: "Radnja Godine Društvenih Igara - 2020, 2025",
        award2: "Nagrada za Najbolju Onlajn Prodavnicu - 2020, 2024, 2025",
        award3: "Nagrada za Najbolji Turnir Društvenih Igara - 2004, 2016, 2017, 2020, 2022, 2023",
        workingHours: "Radno Vreme",
        days: "Ponedeljak - Subota: 09:00-20:00",
        sunday: "Nedelja: 12:00-20:00",
        contact: "Kontakt",
        follow: "Pratite Nas",
        location: "Lokacija Prodavnice",

        // --- script.js ---
        // index.html, catalog.html
        view: "Pogledaj",

        // account.html
        emptyCart: "Vaša korpa je trenutno prazna.",
        price: "Cena:",
        quantity: "Količina:",
        remove: "Ukloni",
        total: "Ukupno: ",
        confirm: "Potvrdi Kupovinu",
        noHistory: "Nemate prethodnih porudžbina.",

        // game.html
        category: "Kategorija:",
        numOfPlayers: "Broj Igrača:",
        age: "Uzrast:",
        duration: "Trajanje:",
        rating: "Ocena:",
        addToCart: "Dodaj u Korpu",
        comments: "Komentari:",
        leaveAComment: "Ostavite komentar o igri:",
        addComment: "Dodaj Komentar",

        // alerts
        finished: "Kupovina je uspešno završena!",
        added: "Dodatu u korpu:",

        // games.js
        catan: "Catan je jedna od najpoznatijih društvenih igara na svetu. Igrači se trude da izgrade uspešniju civilizaciju od svojih suseda i to uz pomoć sreće, veštine i snalažljivosti.",
        guessWho: "Svaki igrač tajno izabere jedan lik sa svoje kartice. Igrači naizmenično postavljaju pitanja sa odgovorom 'da' ili 'ne' kako bi suzili izbor i otkrili lik protivnika. Prvi igrač koji pogodi lik protivnika pobeđuje.",
        monopoly: "Istraži Čudesnu Srbiju uz pomoć ovog specijalnog izdanja društvene igre Monopoly. Putuj Srbijom i razgledaj njene lepote. Kupuj najbolje posede i institucije i nateraj protivnike da ti plaćaju rentu. Dok se krećeš po tabli, naići ćeš na odličnu zabavu posećujući tvrđave, čuda prirode, arheološka nalazišta, manastire.",
        chess: "Šah je strateška igra za dva igrača koja se igra na tabli od 64 polja. Cilj je matirati protivničkog kralja – dovesti ga u poziciju iz koje ne može da pobegne. Igrači naizmenično pomeraju svoje figure, a beli uvek ima prvi potez.",
        splendor: "Splendor je igra u kojoj skupljate žetone i kupujete kartice za razvoj. Igrači ulaze u ulogu trgovaca iz doba Renesanse koji se takmiče ko će kupiti više rudnika dragog kamenja, bolje transportovati to kamenje i otvoriti bolje prodavnice kako bi dragulje distribuirali. Cilj je da postanete najprestižniji trgovac dragulja. Ako ste dovoljno bogati možda će vašu prodavnicu dragulja posetiti i neko iz plemićkih porodica, što će naravno još više podići vaš prestiž i pokazati da ste iznad ostalih.",
        azul: "Društvena igra Azul stavlja vas u ulogu umetnika, kome je kralj Manuel dao zadatak da ukrasi zidove palate Evora. Na kraju igre bićete ocenjeni za lepotu i dizajn i kralj će odabrati jednog od vas za pobednika!",
        wavelength: "Društvena igra Wavelength je socijalna igra pogađanja u kojoj se 2 tima takmiče u čitanju umova jedni drugih.",
        justOne: "Imate izbor, napravite razliku! Pomozite drugom igraču da pogodi misterioznu reč. Brza i originalna društvena igra u kojoj su smeh i zabava zagarantovani!",
        codenames: "Dve rivalske tajne agencije znaju tajne identitete 25 agenata na terenu. Ali ih znaju samo po njihovim tajnim imenima. Timovi se takmiče ko će prvi da uspostavi kontakt sa svim svojim agentima.",
        telestrations: "Telestrations je zabavna i dinamična društvena igra koja kombinuje principe crtanja sa pravilima klasične igre 'pokvareni telefoni'."
    },

    eng: {
        // --- HTML Files ---
        // Navigation, Breadcrumbs, Footer
        website: "BOARD GAMES",
        home: "Home",
        gallery: "Gallery",
        store: "Store",
        games: "Games",
        tournaments: "Tournaments",
        catalog: "Game Catalog",
        family: "Family",
        strategy: "Strategy",
        party: "Party",
        account: "My Account",
        about: "About Us",
        footer: "Copyright 2026, Mile Maćešić, Department of Software Engineering, Faculty of Electrical Engineering, University of Belgrade",
    
        // index.html
        welcome: "♔ Welcome to the Board Game page! ♕",
        welcomeText: "Fun for all generations! Discover a huge selection of family, strategy and party games all in one place.",
        welcomeButton: "Search for Games",
        sales: "Sales",
        salesText: "All strategy games are 20% off",
        catanTournament: "Catan Tournament - 25.07.2026",
        chessTournament: "Chess Tournament - 31.07.2026. - 02.08.2026.",
        new: "New in Stock",
        topGames: "Top Rated Games",
        visit: "Recommended Visit:",

        // gallery.html
        video1: "Azul Tournament",
        video2: "Catan Tutorial",

        // catalog.html
        download: "Download Catalog",
        default: "Default Sorting",
        AtoZ: "Name A-Z",
        ZtoA: "Name Z-A",
        priceUp: "Price Ascending",
        priceDown: "Price Descending",
        search: "Search by name: ",

        // account.html
        cart: "Cart",
        orderHistory: "Order History",

        // about.html
        storeHistory: "Store History",
        storeHistoryText: "Founded in 2004. We offer a huge selection of board games where our customers can choose for families, for strategy or for a party. We also regularly organize tournaments and gatherings for all fans of board games.",
        mission: "Our Mission",
        missionText: "We believe that a good game brings people together, and that's why we offer only the best games. Our goal is to help everyone find the best choice for a good time.",
        awards: "Awards and Recognitions",
        award1: "Board Game Store of the Year - 2020, 2025",
        award2: "Award for the Best Online Store - 2020, 2024, 2025",
        award3: "Best Board Game Tournament Award - 2004, 2016, 2017, 2020, 2022, 2023",
        workingHours: "Working Hours",
        days: "Monday - Saturday: 09:00-20:00",
        sunday: "Sunday: 12:00-20:00",
        contact: "Contact",
        follow: "Follow Us",
        location: "Store Location",

        // --- script.js ---
        // index.html
        view: "View",

        emptyCart: "Your cart is currently empty.",
        price: "Price:",
        quantity: "Quantity:",
        remove: "Remove",
        total: "Total: ",
        confirm: "Confirm Purchase",
        noHistory: "You have no previous orders.",

        // game.html
        category: "Category:",
        numOfPlayers: "Number of Players:",
        age: "Age:",
        duration: "Duration",
        rating: "Rating:",
        addToCart: "Add to Cart",
        comments: "Comments:",
        leaveAComment: "Leave a comment about the game:",
        addComment: "Add Comment",

        // alerts
        finished: "Your purchase has been successfully completed!",
        added: "Added to cart:",

        // games.js
        catan: "Catan is one of the most famous board games in the world. Players try to build a more successful civilization than their opponents with the help of luck, skill and resourcefulness.",
        guessWho: "Each player secretly chooses one character from their card. Players take turns asking 'yes' or 'no' questions to narrow down the choices and reveal the opponent's character. The first player to guess the opponent's character wins.",
        monopoly: "Explore the wonderful Serbia with the help of this special edition of the Monopoly board game. Travel through Serbia and see its beauty. Buy the best properties and institutions and make your opponents pay you rent. As you move around the board, you will encounter great fun visiting fortresses, natural wonders, archaeological sites, monasteries.",
        chess: "Chess is a strategy game for two players played on a board of 64 squares. The goal is to checkmate the opponent's king - to get him into a position from which he cannot escape. The players take turns moving their pieces, and white always has the first move.",
        splendor: "Splendor is a game where you collect tokens and buy development cards. Players take on the role of Renaissance-era merchants who compete to buy more gemstone mines, better transport those gems, and open better stores to distribute the gems. The goal is to become the most prestigious jewel merchant. If you are rich enough, maybe someone from a noble family will visit your jewelry store, which of course will raise your prestige even more and show that you are above the rest.",
        azul: "The board game Azul puts you in the role of an artist, tasked by King Manuel to decorate the walls of Evora Palace. At the end of the game you will be judged on beauty and design and the king will choose one of you as the winner!",
        wavelength: "Wavelength Board Game is a social guessing game where 2 teams compete to read each other's minds.",
        justOne: "You have a choice, make a difference! Help the other player guess the mystery word. A fast and original board game where laughter and fun are guaranteed!",
        codenames: "Two rival secret agencies know the secret identities of 25 agents in the field. But they know them only by their secret names. Teams compete to be the first to make contact with all their agents.",
        telestrations: "Telestrations is a fun and dynamic board game that combines drawing principles with the rules of the classic 'broken phones' game."
    }

};

// Changes the language from either to serbian or english based on the button that was clicked
function changeLanguage(language) {
    localStorage.setItem("language", language);
    applyLanguage(language);
    if (window.location.pathname.includes("game.html")) updateBreadcrumbLanguage(language);
}

// Updates the board game category for the breadcrumb in game.html
function updateBreadcrumbLanguage(language) {
    const categoryElement = document.getElementById("breadcrumb-category");
    if (!categoryElement || !selectedGame) return;
    if (selectedGame.category === "Family") categoryElement.textContent = translations[language].family;
    if (selectedGame.category === "Strategy") categoryElement.textContent = translations[language].strategy;
    if (selectedGame.category === "Party") categoryElement.textContent = translations[language].party;
}

// Finalizes the translation from one language to the other
function applyLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        const attribute = element.getAttribute("data-translate-attribute");
        if (attribute) element.setAttribute(attribute, translations[language][key]);
        else element.textContent = translations[language][key] || element.textContent;
    });
}
