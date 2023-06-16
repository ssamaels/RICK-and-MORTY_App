export function updatePagination(page, maxPage) {
  const pagination = document.querySelector('[data-js="pagination"]');
  pagination.innerHTML = `${page} / ${maxPage}`;
}
