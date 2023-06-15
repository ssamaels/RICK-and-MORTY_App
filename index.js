import { createCharacterCard } from "./components/card/card.js";
import { updatePagination } from "./components/nav-pagination/nav-pagination.js";
import { handleSearchSubmit } from "./components/search-bar/search-bar.js";
import {
  handleNextButton,
  handlePrevButton,
} from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const pagination = document.querySelector('[data-js="pagination"]');

let maxPage = 42;
let page = 1;
let searchQuery = "";

export async function fetchCharacter(page, searchQuery) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    cardContainer.innerHTML = "";

    if (response.ok) {
      const data = await response.json();
      maxPage = data.info.pages;
      updatePagination(page, maxPage, pagination);
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

fetchCharacter(page, searchQuery);
handleSearchSubmit();
handleNextButton();
handlePrevButton();
