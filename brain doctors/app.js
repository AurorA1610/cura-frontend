searchIcon = document.getElementById("search-icon");
navDiv = document.getElementById("nav-div");

searchIcon.addEventListener("click", () => {
  navDiv.style.all = "unset";
  navDiv.classList.remove("p-3");
  navDiv.innerHTML = `
  <form class="search-form mx-3 p-3" actions="">
    <input type="text" placeholder="Search for Brain doctors" class="search-field px-4">
    <button class="search-btn px-4 py-1" type="submit">
        <img src="/images/search-vec.png" alt="">
    </button>
  </form>
  `;
});
