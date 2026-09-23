# Board Game Store

A responsive web application for browsing and managing a collection of board games. The website was developed as a university project with a focus on HTML, CSS, JavaScript, Bootstrap, and client-side data management.

## Features

* Browse available board games
* View detailed information about individual games
* Browse games through a gallery
* Filter games by category
* Sort games by number of players
* Display highly-rated and poorly-rated games
* Shopping cart functionality
* Purchase/history tracking
* Account page
* Serbian and English language support
* Store game and user data using `localStorage`
* Print pages using the browser's print functionality
* Responsive layout
* Navigation between multiple pages

## Technologies

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap**
* **jQuery**
* **LocalStorage**
* **VS Code**

## Pages

### Home

The main page of the store, providing an introduction to the website and access to the main sections.

### Gallery

Displays the available board games in a visual gallery format.

### Catalog

Contains the complete collection of games with filtering and sorting functionality.

Games can be sorted according to the number of players and organized by category.

### Game Details

Displays detailed information about a selected board game, including its description, category, number of players, price, and rating.

### Account

Provides account-related functionality and displays information such as the shopping cart and purchase history.

### About

Contains information about the store and the website.

## Game Categories

The store contains several categories of board games, including:

* Family
* Strategy
* Party

Each game contains information such as:

* Name
* Category
* Number of players
* Price
* Rating
* Description

## JavaScript Functionality

JavaScript is used throughout the website to provide dynamic functionality.

Some of the main features include:

* Dynamic game data
* Game filtering
* Game sorting
* Shopping cart management
* Purchase history
* Language switching
* Game detail pages
* LocalStorage management
* Dynamic navigation
* Page printing

Game information is stored in JavaScript and used to dynamically generate content throughout the website.

## LocalStorage

The website uses browser `localStorage` to preserve data between page visits.

Examples of stored data include:

```text
games
cart
history
language
```

This allows information such as the shopping cart, purchase history, and selected language to remain available after navigating between pages or refreshing the website.

## Multilingual Support

The website supports both:

* Serbian
* English

The selected language is stored in `localStorage` so the user's choice can be preserved between pages.

## Project Structure

```text
board-game-store/
│
├── index.html
├── gallery.html
├── catalog.html
├── game.html
├── account.html
├── about.html
│
├── style.css
├── script.js
├── games.js
│
├── images/
│
└── .gitignore
```

## Running the Project

No server or database is required to run the website.

### Option 1 — VS Code

1. Clone the repository:

```bash
git clone https://github.com/milemacesic/board-game-store.git
```

2. Open the project folder in VS Code.
3. Open `index.html` in a browser.

### Option 2 — Live Server

If the **Live Server** extension is installed in VS Code:

1. Open `index.html`.
2. Right-click the file.
3. Select **Open with Live Server**.
4. The website will open in your browser.

## Project Purpose

This project was developed as part of a university Web Design course.

The main goal was to practice:

* Creating multi-page websites
* HTML structure and semantic elements
* CSS styling and layouts
* JavaScript programming
* DOM manipulation
* Event handling
* LocalStorage
* Dynamic content generation
* Bootstrap and jQuery
* Responsive web design

## Author

**Mile Maćešić**

GitHub: https://github.com/milemacesic 
