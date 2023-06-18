import { fetchCharacter, variables } from "../../index.js";
import { updatePagination } from "../nav-pagination/nav-pagination.js";

export function handleNextButton() {
  const nextButton = document.querySelector('[data-js="button-next"]');
  nextButton.addEventListener("click", () => {
    if (variables.page < variables.maxPage) {
      variables.page = variables.page + 1;
      fetchCharacter(variables.page, variables.searchQuery);
      updatePagination(variables.page, variables.maxPage);
    }
  });
}

export function handlePrevButton() {
  const prevButton = document.querySelector('[data-js="button-prev"]');
  prevButton.addEventListener("click", () => {
    if (variables.page > 1) {
      variables.page = variables.page - 1;
      fetchCharacter(variables.page, variables.searchQuery);
      updatePagination(variables.page, variables.maxPage);
    }
  });
}
