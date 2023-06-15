import { createCharacterCard } from "./components/card/card.js";
import { updatePagination } from "./components/nav-pagination/nav-pagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const maxPage = 42;
let page = 1;
const searchQuery = "";

async function fetchCharacter(page) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    cardContainer.innerHTML = "";

    if (response.ok) {
      const data = await response.json();
      data.results.forEach((character) => {
        let newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred", error);
  }
}

fetchCharacter(page);

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page = page + 1;
    fetchCharacter(page);
    updatePagination(page, maxPage, pagination);
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page = page - 1;
    fetchCharacter(page);
    updatePagination(page, maxPage, pagination);
  }
});
