let games = [
    
    // Family

    {
        id: 1,
        name: "Catan",
        category: "Family",
        categoryTranslation: "family",
        numberOfPlayers: "3-4",
        age: "10+",
        averageTime: "75 min",
        price: "4.800 RSD",
        description: "Catan je jedna od najpoznatijih društvenih igara na svetu. Igrači se trude da izgrade uspešniju civilizaciju od svojih suseda i to uz pomoć sreće, veštine i snalažljivosti.",
        descriptionTranslation: "catan",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/catan.webp"
    },

    {
        id: 2,
        name: "Guess Who",
        category: "Family",
        categoryTranslation: "family",
        numberOfPlayers: "2",
        age: "5+",
        averageTime: "10 min",
        price: "1.600 RSD",
        description: "Svaki igrač tajno izabere jedan lik sa svoje kartice. Igrači naizmenično postavljaju pitanja sa odgovorom 'da' ili 'ne' kako bi suzili izbor i otkrili lik protivnika. Prvi igrač koji pogodi lik protivnika pobeđuje.",
        descriptionTranslation: "guessWho",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/guess_who.webp"
    },

    {
        id: 3,
        name: "Monopoly",
        category: "Family",
        categoryTranslation: "family",
        numberOfPlayers: "2-6",
        age: "8+",
        averageTime: "90 min",
        price: "5.400 RSD",
        description: "Istraži Čudesnu Srbiju uz pomoć ovog specijalnog izdanja društvene igre Monopoly. Putuj Srbijom i razgledaj njene lepote. Kupuj najbolje posede i institucije i nateraj protivnike da ti plaćaju rentu. Dok se krećeš po tabli, naići ćeš na odličnu zabavu posećujući tvrđave, čuda prirode, arheološka nalazišta, manastire.",
        descriptionTranslation: "monopoly",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/monopoly.jpg"
    },

    // Strategy

    {
        id: 4,
        name: "Chess",
        category: "Strategy",
        categoryTranslation: "strategy",
        numberOfPlayers: "2",
        age: "5+",
        averageTime: "45 min",
        price: "3.000 RSD",
        description: "Šah je strateška igra za dva igrača koja se igra na tabli od 64 polja. Cilj je matirati protivničkog kralja – dovesti ga u poziciju iz koje ne može da pobegne. Igrači naizmenično pomeraju svoje figure, a beli uvek ima prvi potez.",
        descriptionTranslation: "chess",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/chess.jpg"
    },

    {
        id: 5,
        name: "Splendor",
        category: "Strategy",
        categoryTranslation: "strategy",
        numberOfPlayers: "2-4",
        age: "10+",
        averageTime: "30 min",
        price: "4.000 RSD",
        description: "Splendor je igra u kojoj skupljate žetone i kupujete kartice za razvoj. Igrači ulaze u ulogu trgovaca iz doba Renesanse koji se takmiče ko će kupiti više rudnika dragog kamenja, bolje transportovati to kamenje i otvoriti bolje prodavnice kako bi dragulje distribuirali. Cilj je da postanete najprestižniji trgovac dragulja. Ako ste dovoljno bogati možda će vašu prodavnicu dragulja posetiti i neko iz plemićkih porodica, što će naravno još više podići vaš prestiž i pokazati da ste iznad ostalih.",
        descriptionTranslation: "splendor",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/splendor.webp"
    },

    {
        id: 6,
        name: "Azul",
        category: "Strategy",
        categoryTranslation: "strategy",
        numberOfPlayers: "2-4",
        age: "8+",
        averageTime: "35 min",
        price: "5.800 RSD",
        description: "Društvena igra Azul stavlja vas u ulogu umetnika, kome je kralj Manuel dao zadatak da ukrasi zidove palate Evora. Na kraju igre bićete ocenjeni za lepotu i dizajn i kralj će odabrati jednog od vas za pobednika!",
        descriptionTranslation: "azul",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/azul.webp"
    },

    // Party

    {
        id: 7,
        name: "Wavelength",
        category: "Party",
        categoryTranslation: "party",
        numberOfPlayers: "2-12",
        age: "14+",
        averageTime: "30 min",
        price: "5.000 RSD",
        description: "Društvena igra Wavelength je socijalna igra pogađanja u kojoj se 2 tima takmiče u čitanju umova jedni drugih.",
        descriptionTranslation: "wavelength",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/wavelength.webp"
    },

    {
        id: 8,
        name: "Just One",
        category: "Party",
        categoryTranslation: "party",
        numberOfPlayers: "3-7",
        age: "8+",
        averageTime: "40 min",
        price: "2.900 RSD",
        description: "Imate izbor, napravite razliku! Pomozite drugom igraču da pogodi misterioznu reč. Brza i originalna društvena igra u kojoj su smeh i zabava zagarantovani!",
        descriptionTranslation: "justOne",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/just-one.webp"
    },

    {
        id: 9,
        name: "Codenames",
        category: "Party",
        categoryTranslation: "party",
        numberOfPlayers: "2-8",
        age: "10+",
        averageTime: "15 min",
        price: "2.600 RSD",
        description: "Dve rivalske tajne agencije znaju tajne identitete 25 agenata na terenu. Ali ih znaju samo po njihovim tajnim imenima. Timovi se takmiče ko će prvi da uspostavi kontakt sa svim svojim agentima.",
        descriptionTranslation: "codenames",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/codenames.webp"
    },

    {
        id: 10,
        name: "Telestrations",
        category: "Party",
        categoryTranslation: "party",
        numberOfPlayers: "4-12",
        age: "12+",
        averageTime: "20 min",
        price: "5.400 RSD",
        description: "Telestrations je zabavna i dinamična društvena igra koja kombinuje principe crtanja sa pravilima klasične igre 'pokvareni telefoni'.",
        descriptionTranslation: "telestrations",
        rating: 0,
        ratingCounter: 0,
        ratingTotal: 0,
        comments: [],
        image: "images/telestrations.jpg"
    }

];
