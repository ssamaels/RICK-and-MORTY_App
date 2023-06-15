import { fetchCharacter } from "../../index.js";
import { updatePagination } from "../nav-pagination/nav-pagination.js";

let maxPage = 42;
let page = 1;
let searchQuery = "";

export function handleNextButton() {
  const pagination = document.querySelector('[data-js="pagination"]');
  const nextButton = document.querySelector('[data-js="button-next"]');
  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page = page + 1;
      fetchCharacter(page, searchQuery);
      updatePagination(page, maxPage, pagination);
    }
  });
}

export function handlePrevButton() {
  const pagination = document.querySelector('[data-js="pagination"]');
  const prevButton = document.querySelector('[data-js="button-prev"]');
  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page = page - 1;
      fetchCharacter(page, searchQuery);
      updatePagination(page, maxPage, pagination);
    }
  });
}
