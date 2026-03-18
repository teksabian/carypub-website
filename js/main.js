// ============================================================
// THE CARY PUB — SITE LOGIC
// ============================================================

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const TODAY_INDEX = new Date().getDay();

let currentDayIndex = TODAY_INDEX;
let easterEggCount = 0;
let currentMenuTab = "appetizers";

// ---- NAV SCROLL ----
window.addEventListener("scroll", () => {
  document.querySelector(".site-nav").classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

// ---- SMOOTH SCROLL NAV ----
document.querySelectorAll("[data-nav]").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.nav);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ---- SPECIALS BOARD ----
function renderSpecials() {
  const day = DAYS[currentDayIndex];
  const special = DAILY_SPECIALS[day];
  const board = document.getElementById("chalkboard");

  document.getElementById("chalk-label").textContent =
    currentDayIndex === TODAY_INDEX ? "★ Today's Specials ★" : `${day}'s Specials`;
  document.getElementById("chalk-day").textContent = `${day} ${special.emoji}`;
  document.getElementById("chalk-food").innerHTML = `🍽️ ${special.food}`;
  document.getElementById("chalk-drinks").innerHTML =
    special.drinks.map(d => `<div class="chalk-drink">🍺 ${d}</div>`).join("");

  // dots
  const dotsEl = document.getElementById("chalk-dots");
  dotsEl.innerHTML = DAYS.map((_, i) => {
    let cls = "chalk-dot other";
    if (i === currentDayIndex) cls = "chalk-dot active";
    else if (i === TODAY_INDEX) cls = "chalk-dot today";
    return `<button class="${cls}" data-day="${i}"></button>`;
  }).join("");
  dotsEl.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => flipTo(parseInt(b.dataset.day)));
  });
}

function flipBoard(dir) {
  const board = document.getElementById("chalkboard");
  board.classList.add("flipping");
  setTimeout(() => {
    currentDayIndex = (currentDayIndex + dir + 7) % 7;
    renderSpecials();
    board.classList.remove("flipping");
  }, 300);
}

function flipTo(index) {
  const board = document.getElementById("chalkboard");
  board.classList.add("flipping");
  setTimeout(() => {
    currentDayIndex = index;
    renderSpecials();
    board.classList.remove("flipping");
  }, 300);
}

document.getElementById("chalk-prev").addEventListener("click", () => flipBoard(-1));
document.getElementById("chalk-next").addEventListener("click", () => flipBoard(1));

renderSpecials();

// ---- WINGS ----
function renderWings() {
  const sizesEl = document.getElementById("wing-sizes");
  sizesEl.innerHTML = MENU_DATA.wings.sizes.map(s => `
    <div class="wing-size-card">
      <div class="count">${s.count}</div>
      <div class="label">wings</div>
      <div class="price">$${s.price.toFixed(2)}</div>
    </div>
  `).join("");

  const flavorsEl = document.getElementById("wing-flavors");
  flavorsEl.innerHTML = MENU_DATA.wings.flavors.map(f => {
    const flames = f.heat === 0
      ? '<span style="font-size:15px;opacity:0.5">❄️</span>'
      : Array(Math.min(f.heat, 5)).fill('<span style="font-size:13px">🔥</span>').join("");
    return `
      <div class="flavor-card">
        <div class="name">${f.name}</div>
        <div class="heat">${flames} <span class="heat-label">${f.label}</span></div>
      </div>
    `;
  }).join("");
}
renderWings();

// ---- TABBED MENU ----
function renderMenu(tab) {
  currentMenuTab = tab;
  const items = MENU_DATA[tab] || [];
  const container = document.getElementById("menu-items");

  // update tab buttons
  document.querySelectorAll(".menu-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.tab === tab);
  });

  let html = items.map((item, i) => `
    <div class="menu-item" style="animation-delay: ${i * 0.04}s">
      <div class="info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
      </div>
      <div class="item-price">$${item.price.toFixed(2)}</div>
    </div>
  `).join("");

  // salad add-ons
  if (tab === "soupsAndSalads") {
    html += `<div class="menu-footnote"><strong style="color:var(--cream-light);font-style:normal">${MENU_DATA.saladAddOns}</strong></div>`;
  }

  // sides note
  if (tab === "sandwiches" || tab === "burgers") {
    html += `
      <div class="sides-box">
        <div class="sides-title">Served With Your Choice Of:</div>
        <div class="sides-list">${MENU_DATA.sidesIncluded}</div>
        <div class="sides-premium"><strong>Upgrade (+$${MENU_DATA.sidesUpcharge.toFixed(2)}):</strong> ${MENU_DATA.sidesPremium}</div>
      </div>
    `;
  }

  container.innerHTML = html;
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => renderMenu(tab.dataset.tab));
});
renderMenu("appetizers");

// ---- INFO SECTION ----
function renderInfo() {
  document.getElementById("about-p1").innerHTML = PUB_INFO.aboutP1;
  document.getElementById("about-p2").innerHTML = PUB_INFO.aboutP2;

  const cardsEl = document.getElementById("info-cards");
  const hoursHtml = PUB_INFO.hours.map(h => `<div>${h.days}: ${h.time}</div>`).join("");

  cardsEl.innerHTML = `
    <div class="info-card">
      <div class="icon">📍</div>
      <div>
        <div class="card-title">Location</div>
        <div class="card-body">${PUB_INFO.address}<br>${PUB_INFO.city}</div>
      </div>
    </div>
    <div class="info-card">
      <div class="icon">📞</div>
      <div>
        <div class="card-title">Phone</div>
        <div class="card-body"><a href="${PUB_INFO.phoneHref}" style="color:var(--cream-light)">${PUB_INFO.phone}</a></div>
      </div>
    </div>
    <div class="info-card">
      <div class="icon">🕐</div>
      <div>
        <div class="card-title">Hours</div>
        <div class="card-body">${hoursHtml}</div>
      </div>
    </div>
    <div class="info-card">
      <div class="icon">📱</div>
      <div>
        <div class="card-title">Follow Us</div>
        <div class="card-body">Facebook — <a href="${PUB_INFO.facebookUrl}" target="_blank" rel="noopener">${PUB_INFO.facebook}</a></div>
      </div>
    </div>
  `;
}
renderInfo();

// ---- EASTER EGG ----
document.querySelectorAll("[data-egg]").forEach(el => {
  el.addEventListener("click", () => {
    easterEggCount++;
    if (easterEggCount >= 7) {
      document.getElementById("easter-egg").classList.add("show");
      easterEggCount = 0;
      setTimeout(() => document.getElementById("easter-egg").classList.remove("show"), 4000);
    }
  });
});

// ---- FOOTER YEAR ----
document.getElementById("footer-year").textContent = new Date().getFullYear();
