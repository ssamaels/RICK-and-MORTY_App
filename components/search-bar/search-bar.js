import { fetchCharacter } from "../../index.js";

export function handleSearchSubmit() {
  const searchBar = document.querySelector('[data-js="search-bar"]');
  let searchQuery = "";
  let page = 1;
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery = event.target.firstElementChild.value;
    page = 1;
    fetchCharacter(page, searchQuery);
  });
}
