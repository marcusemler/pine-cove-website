function makeHeader(currentPage) {
  const links = [
    ["index.html", "Home"],
    ["gallery.html", "Gallery"],
    ["location.html", "Location"],
    ["attractions.html", "Attractions"],
    ["collection.html", "Collection"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"]
  ];

  const nav = links.map(([href, label]) => {
    const current = currentPage === href ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="site-header">
      <div class="nav-wrap">
        <a class="brand brand-inline" href="index.html" aria-label="Pine Cove home">
          <span class="brand-mark">Pine Cove</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <nav id="primary-nav" class="nav-links" aria-label="Primary">
          ${nav}
          <a class="button" href="https://book.amishcountrylodging.com/all-listings?category=20977" target="_blank" rel="noreferrer">Book Now</a>
        </nav>
      </div>
    </header>
  `;
}

function makeFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <div class="brand-mark" style="color:var(--ink)">Pine Cove</div>
          <p style="color:var(--muted);margin:0.5rem 0 0">Romantic stays in Berlin, Ohio &mdash; farmhouse suites, cabins &amp; treehouses.</p>
        </div>
        <ul class="footer-links">
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="attractions.html">Attractions</a></li>
          <li><a href="collection.html">Collection</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="tel:13308931001">(330) 893-1001</a></li>
        </ul>
        <div class="kicker">Pine Cove &middot; 5492 County Road 201, Millersburg, OH 44654</div>
      </div>
    </footer>
  `;
}

function renderUnits(containerId, limit) {
  const container = document.querySelector(containerId);
  if (!container) return;

  const list = containerId === "#featured-units"
    ? featuredUnitNames.map(name => units.find(u => u.name === name)).filter(Boolean)
    : (typeof limit === "number" ? units.slice(0, limit) : units);

  container.innerHTML = list.map(unit => `
    <article class="unit-card reveal">
      <div class="unit-card__img-wrap">
        <img src="${unit.image}" alt="${unit.name} at Pine Cove" loading="lazy">
      </div>
      <div class="unit-card__body">
        <div class="unit-card__type">${unit.type}</div>
        <h3>${unit.name}</h3>
        <div class="unit-card__meta">
          <span>${unit.guests}</span>
          <span>&middot;</span>
          <span>${unit.beds}</span>
        </div>
        <div class="amenity-pills">
          ${unit.amenities.slice(0, 3).map(a => `<span class="amenity-pill">${a}</span>`).join("")}
        </div>
        <a class="button" href="${unit.bookingUrl}" target="_blank" rel="noreferrer">Book Now</a>
      </div>
    </article>
  `).join("");
}

function renderFaqs(containerId) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = faqs.map(item => `
    <article class="faq-item reveal">
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
    </article>
  `).join("");
}

function renderGallery(containerId) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = galleryItems.map(item => `
    <div class="gallery-item reveal">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-item__overlay">
        <h3>${item.title}</h3>
      </div>
    </div>
  `).join("");
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const check = () => {
    if (window.scrollY > 60) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", check, { passive: true });
  check();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "index.html";
  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");

  if (headerMount) {
    headerMount.innerHTML = makeHeader(page);

    const toggle = headerMount.querySelector(".nav-toggle");
    const navList = headerMount.querySelector("#primary-nav");
    if (toggle && navList) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
        navList.classList.toggle("is-open", !open);
      });
    }
  }

  if (footerMount) {
    footerMount.innerHTML = makeFooter();
  }

  renderUnits("#featured-units");
  renderUnits("#all-units");
  renderFaqs("#faq-list");
  renderGallery("#gallery-list");

  initHeaderScroll();

  requestAnimationFrame(() => {
    initScrollReveal();
  });
});
