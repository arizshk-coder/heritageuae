let currentLang = localStorage.getItem("hu_lang") || "en";
const FAV_KEY = "hu_favourites";

function t(key) {
  return translations[currentLang][key] || key;
}

function toggleLang() {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("hu_lang", currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  applyTranslations();
  renderAll();
}

function applyTranslations() {
  document.getElementById("logoText").textContent = t("logoText");
  document.getElementById("nav-home").textContent = t("navHome");
  document.getElementById("nav-emirates").textContent = t("navEmirates");
  document.getElementById("nav-directory").textContent = t("navDirectory");
  document.getElementById("nav-timeline").textContent = t("navTimeline");
  document.getElementById("nav-culture").textContent = t("navCulture");
  document.getElementById("nav-favourites").textContent = t("navFavourites");
  document.getElementById("langBtn").textContent = t("langBtn");
  
  document.getElementById("heroTitle").textContent = t("heroTitle");
  document.getElementById("heroTagline").textContent = t("heroTagline");
  document.getElementById("exploreBtn").textContent = t("exploreBtn");
  
  document.getElementById("homeEmiratesTitle").textContent = t("homeEmiratesTitle");
  document.getElementById("homeEmiratesSub").textContent = t("homeEmiratesSub");
  document.getElementById("homeFeaturedTitle").textContent = t("homeFeaturedTitle");
  document.getElementById("homeFeaturedSub").textContent = t("homeFeaturedSub");
  
  document.getElementById("emiratesTitle").textContent = t("emiratesTitle");
  document.getElementById("emiratesSub").textContent = t("emiratesSub");
  document.getElementById("directoryTitle").textContent = t("directoryTitle");
  document.getElementById("directorySub").textContent = t("directorySub");
  
  document.getElementById("searchInput").placeholder = t("searchPlaceholder");
  document.getElementById("backBtn").textContent = t("backBtn");
  
  document.getElementById("timelineTitle").textContent = t("timelineTitle");
  document.getElementById("timelineSub").textContent = t("timelineSub");
  document.getElementById("cultureTitle").textContent = t("cultureTitle");
  document.getElementById("cultureSub").textContent = t("cultureSub");
  document.getElementById("favouritesTitle").textContent = t("favouritesTitle");
  document.getElementById("favouritesSub").textContent = t("favouritesSub");
  document.getElementById("favouritesEmpty").textContent = t("favouritesEmpty");
  
  document.getElementById("footerTagline").textContent = t("footerTagline");
  document.getElementById("footerCredit").textContent = t("footerCredit");

  updateDropdowns();
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(`view-${viewId}`).classList.add("active");
  
  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  const navBtn = document.getElementById(`nav-${viewId}`);
  if (navBtn) navBtn.classList.add("active");
  
  window.scrollTo(0, 0);
}

function getFavourites() { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
function isFavourite(id) { return getFavourites().includes(id); }

function toggleFavourite(id) {
  let favs = getFavourites();
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  renderAll();
}

function renderAll() {
  renderEmirates();
  renderDirectory();
  renderTimeline();
  renderCulture();
  renderFavourites();
}

function cardHTML(place) {
  const fav = isFavourite(place.id);
  const emirateObj = EMIRATES.find(e => e.id === place.emirate);
  const categoryObj = CATEGORIES.find(c => c.id === place.category);
  
  // This safely looks for your image in the images folder
  const imgHTML = place.image 
    ? `<img src="${place.image}" class="place-img" alt="${place.name[currentLang]}" onerror="this.outerHTML='<div class=\\'place-img-fallback\\'>${place.name[currentLang]}</div>'">`
    : `<div class="place-img-fallback">${place.name[currentLang]}</div>`;

  return `
    <article class="place-card">
      ${imgHTML}
      <div class="place-body">
        <h3>${place.name[currentLang]}</h3>
        <div>
          <span class="tag">${emirateObj.name[currentLang]}</span>
          <span class="tag">${categoryObj.name[currentLang]}</span>
        </div>
        <div class="place-actions">
          <button class="fav-btn ${fav ? "active" : ""}" onclick="toggleFavourite('${place.id}')">
            ${fav ? "★" : "☆"}
          </button>
          <button class="btn" onclick="openPlace('${place.id}')">${t("viewPlace")}</button>
        </div>
      </div>
    </article>`;
}

function renderEmirates() {
  const html = EMIRATES.map(e => `
    <div class="emirate-card" onclick="filterByEmirate('${e.id}')">
      <span class="emoji">${e.emoji}</span>
      <h3>${e.name[currentLang]}</h3>
      <small>${PLACES.filter(p => p.emirate === e.id).length} ${t("placesCount")}</small>
    </div>
  `).join("");
  
  document.getElementById("homeEmiratesGrid").innerHTML = html;
  document.getElementById("emiratesGrid").innerHTML = html;
}

function filterByEmirate(emirateId) {
  document.getElementById("emirateFilter").value = emirateId;
  document.getElementById("searchInput").value = "";
  document.getElementById("categoryFilter").value = "all";
  renderDirectory();
  showView("directory");
}

function renderDirectory() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const emirate = document.getElementById("emirateFilter").value;
  const category = document.getElementById("categoryFilter").value;

  const filtered = PLACES.filter(p => {
    const matchSearch = p.name[currentLang].toLowerCase().includes(search);
    const matchEmirate = emirate === "all" || p.emirate === emirate;
    const matchCategory = category === "all" || p.category === category;
    return matchSearch && matchEmirate && matchCategory;
  });

  document.getElementById("directoryGrid").innerHTML = filtered.map(cardHTML).join("");
  document.getElementById("directoryEmpty").classList.toggle("hidden", filtered.length > 0);

  document.getElementById("homeFeaturedGrid").innerHTML = PLACES.slice(0, 4).map(cardHTML).join("");
}

function openPlace(id) {
  const place = PLACES.find(p => p.id === id);
  if (!place) return;
  
  const emirateObj = EMIRATES.find(e => e.id === place.emirate);
  const categoryObj = CATEGORIES.find(c => c.id === place.category);
  
  const imgHTML = place.image 
    ? `<img src="${place.image}" alt="${place.name[currentLang]}" onerror="this.outerHTML='<div class=\\'place-img-fallback\\'>${place.name[currentLang]}</div>'">`
    : `<div class="place-img-fallback">${place.name[currentLang]}</div>`;

  document.getElementById("placeDetail").innerHTML = `
    <div class="detail-hero">${imgHTML}</div>
    <div class="detail-body">
      <h1>${place.name[currentLang]}</h1>
      <div class="meta">
        <span class="tag">${emirateObj.name[currentLang]}</span>
        <span class="tag">${categoryObj.name[currentLang]}</span>
      </div>
      <p>${place.description[currentLang]}</p>
      <div class="notes-box">
        <h4>${t("visitorNotes")}</h4>
        <p style="margin-bottom:0">${place.notes[currentLang]}</p>
      </div>
    </div>
  `;
  
  showView("place");
}

function renderTimeline() {
  document.getElementById("timelineContainer").innerHTML = TIMELINE.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-content">
        <h3>${item.title[currentLang]}</h3>
        <p>${item.text[currentLang]}</p>
      </div>
    </div>
  `).join("");
}

function renderCulture() {
  document.getElementById("cultureGrid").innerHTML = CULTURE.map(c => `
    <div class="culture-card">
      <span class="icon">${c.icon}</span>
      <h3>${c.title[currentLang]}</h3>
      <p>${c.text[currentLang]}</p>
    </div>
  `).join("");
}

function renderFavourites() {
  const favs = getFavourites();
  const favPlaces = PLACES.filter(p => favs.includes(p.id));
  
  document.getElementById("favouritesGrid").innerHTML = favPlaces.map(cardHTML).join("");
  document.getElementById("favouritesEmpty").classList.toggle("hidden", favPlaces.length > 0);
}

function updateDropdowns() {
  document.getElementById("emirateFilter").innerHTML = `
    <option value="all">${t("allEmirates")}</option>
    ${EMIRATES.map(e => `<option value="${e.id}">${e.name[currentLang]}</option>`).join("")}
  `;
  document.getElementById("categoryFilter").innerHTML = `
    <option value="all">${t("allCategories")}</option>
    ${CATEGORIES.map(c => `<option value="${c.id}">${c.name[currentLang]}</option>`).join("")}
  `;
}

// Initialize everything SAFELY
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  
  // Attach filter listeners
  document.getElementById("searchInput").addEventListener("input", renderDirectory);
  document.getElementById("emirateFilter").addEventListener("change", renderDirectory);
  document.getElementById("categoryFilter").addEventListener("change", renderDirectory);

  // Attach Navigation Button Listeners (The Fix!)
  document.querySelectorAll("nav button[data-view]").forEach(button => {
    button.addEventListener("click", () => {
      const viewName = button.getAttribute("data-view");
      showView(viewName);
    });
  });

  // Attach Logo and other buttons
  document.getElementById("logoBtn").addEventListener("click", () => showView("home"));
  document.getElementById("exploreBtn").addEventListener("click", () => showView("directory"));
  document.getElementById("backBtn").addEventListener("click", () => showView("directory"));
  document.getElementById("langBtn").addEventListener("click", toggleLang);

  applyTranslations();
  renderAll();
});