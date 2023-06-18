import { fetchCharacter, variables } from "../../index.js";
import { updatePagination } from "../nav-pagination/nav-pagination.js";

export function handleSearchSubmit() {
  const searchBar = document.querySelector('[data-js="search-bar"]');
  searchBar.addEventListener("submit", async (event) => {
    event.preventDefault();
    variables.searchQuery = event.target.firstElementChild.value;
    variables.page = 1;
    updatePagination(variables.page, variables.maxPage);
    try {
      const characterData = await fetchCharacter(
        variables.page,
        variables.searchQuery
      );
      const messageContainer = document.querySelector(
        '[data-js="messageContainer"]'
      );
      const searchedCharacter = characterData.find(
        (character) => character.name === variables.searchQuery
      );
      if (searchedCharacter) {
        messageContainer.textContent = "";
      } else {
        messageContainer.textContent = "This character doesn't exist.";
        // variables.page = 0;
        // variables.maxPage = 1;
      }
      updatePagination(variables.page, variables.maxPage);
    } catch (error) {
      console.error(error);
    }
  });
}
