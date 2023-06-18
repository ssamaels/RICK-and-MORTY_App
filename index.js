import { createCharacterCard } from "./components/card/card.js";
import { updatePagination } from "./components/nav-pagination/nav-pagination.js";
import { handleSearchSubmit } from "./components/search-bar/search-bar.js";
import {
  handleNextButton,
  handlePrevButton,
} from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const pagination = document.querySelector('[data-js="pagination"]');

export const variables = {
  maxPage: 42,
  page: 1,
  searchQuery: "",
};

export async function fetchCharacter(page, searchQuery) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    cardContainer.innerHTML = "";
    pagination.innerHTML = `${variables.page} / ${variables.maxPage}`;
    if (response.ok) {
      const data = await response.json();
      variables.maxPage = data.info.pages;
      updatePagination(variables.page, variables.maxPage);
      data.results.forEach((character) => {
        let newCard = createCharacterCard(character);
        cardContainer.append(newCard);
      });
      return data.results;
    } else {
      console.error("Bad Response");
      return [];
    }
  } catch (error) {
    console.error("An Error occurred", error);
    return [];
  }
}

fetchCharacter(variables.page, variables.searchQuery);
handleSearchSubmit();
handleNextButton();
handlePrevButton();
