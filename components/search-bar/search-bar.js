import { fetchCharacter } from "../../index.js";
import { updatePagination } from "../nav-pagination/nav-pagination.js";

let maxPage = 42;
let page = 1;
export let searchQuery = "";

export function handleSearchSubmit() {
  const searchBar = document.querySelector('[data-js="search-bar"]');
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery = event.target.firstElementChild.value;
    page = 1;
    fetchCharacter(page, searchQuery);
    updatePagination(page, maxPage);
  });
}
