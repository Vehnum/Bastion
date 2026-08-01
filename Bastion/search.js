/* ============================================================
   THE BASTION ARCHIVE — search behavior
   Expects a global BASE_DEPTH ("" for root, "../" for one level
   deep) to be set on window before this script runs, and expects
   BASTION_SEARCH_INDEX to already be loaded.
   ============================================================ */
(function () {
  const input = document.getElementById("archive-search");
  const results = document.getElementById("archive-search-results");
  if (!input || !results) return;

  const base = window.BASE_DEPTH || "";

  function render(matches, query) {
    if (!query) {
      results.classList.remove("open");
      results.innerHTML = "";
      return;
    }
    if (matches.length === 0) {
      results.innerHTML = '<div class="search-empty">No pages match &ldquo;' + query + '&rdquo;.</div>';
      results.classList.add("open");
      return;
    }
    results.innerHTML = matches
      .slice(0, 8)
      .map(function (m) {
        return (
          '<a href="' + base + m.url + '">' +
          '<span class="r-type">' + m.type + '</span>' +
          '<span class="r-title">' + m.title + '</span>' +
          '</a>'
        );
      })
      .join("");
    results.classList.add("open");
  }

  input.addEventListener("input", function () {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      render([], "");
      return;
    }
    const matches = BASTION_SEARCH_INDEX.filter(function (entry) {
      return (
        entry.title.toLowerCase().includes(query) ||
        entry.keywords.toLowerCase().includes(query) ||
        entry.type.toLowerCase().includes(query)
      );
    });
    render(matches, query);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-wrap")) {
      results.classList.remove("open");
    }
  });
})();
