import { fetchCharacter } from "../../index.js";
import { updatePagination } from "../nav-pagination/nav-pagination.js";
import { searchQuery } from "../search-bar/search-bar.js";

let maxPage = 42;
let page = 1;

export function handleNextButton() {
  const nextButton = document.querySelector('[data-js="button-next"]');
  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page = page + 1;
      fetchCharacter(page, searchQuery);
      updatePagination(page, maxPage);
    }
  });
}

export function handlePrevButton() {
  const prevButton = document.querySelector('[data-js="button-prev"]');
  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page = page - 1;
      fetchCharacter(page, searchQuery);
      updatePagination(page, maxPage);
    }
  });
}
