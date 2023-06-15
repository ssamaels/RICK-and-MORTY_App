export function updatePagination(page, maxPage, pagination) {
  pagination.innerHTML = `${page} / ${maxPage}`;
}
