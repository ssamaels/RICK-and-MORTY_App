import { variables } from "../../index.js";

export function updatePagination(page, maxPage) {
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.innerHTML = `${variables.page} / ${variables.maxPage}`;
}
