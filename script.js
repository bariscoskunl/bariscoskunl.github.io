// ===== PROJECTS DATA (JSON-DRIVEN) =====
const projectsTR = [
  {
    id: "recipe",
    title: "RecipeShare",
    tag: ".NET 8",
    description: "Web API tabanlı modern lezzet paylaşım platformu.",
    modalTitle: "RecipeShare Detayları",
    tech: ".NET 8 Web API, Entity Framework Core, SQL Server, JWT, AJAX",
    features:
      "Sayfa yenilenmeden çalışan dinamik yorum sistemi, JWT tabanlı güvenli yetkilendirme ve N-Tier mimari yapısı.",
    github: "https://github.com/bariscoskunl/RecipeShare",
    btnText: "GitHub'da İncele",
    detailBtnText: "Detayları Gör",
  },
  {
    id: "frej",
    title: "FrejSnack",
    tag: "ASP.NET Core",
    description: "Restoran yönetim sistemi ve akıllı raporlama modülü.",
    modalTitle: "FrejSnack Detayları",
    tech: "ASP.NET Core 8.0, Repository Pattern, iTextSharp, EPPlus",
    features:
      "PDF ve Excel destekli raporlama modülü, session tabanlı akıllı sepet sistemi ve tam kontrollü yönetici paneli.",
    github: "https://github.com/bariscoskunl/RestaurantApp",
    btnText: "GitHub'da İncele",
    detailBtnText: "Detayları Gör",
  },
];

const projectsEN = [
  {
    id: "recipe",
    title: "RecipeShare",
    tag: ".NET 8",
    description: "Modern flavor-sharing platform based on Web API.",
    modalTitle: "RecipeShare Details",
    tech: ".NET 8 Web API, Entity Framework Core, SQL Server, JWT, AJAX",
    features:
      "Dynamic comment system working without page refresh, secure authorization based on JWT, and N-Tier architecture.",
    github: "https://github.com/bariscoskunl/RecipeShare",
    btnText: "View on GitHub",
    detailBtnText: "View Details",
  },
  {
    id: "frej",
    title: "FrejSnack",
    tag: "ASP.NET Core",
    description: "Restaurant management system and smart reporting module.",
    modalTitle: "FrejSnack Details",
    tech: "ASP.NET Core 8.0, Repository Pattern, iTextSharp, EPPlus",
    features:
      "Reporting module with PDF and Excel support, session-based smart cart system, and fully controlled admin panel.",
    github: "https://github.com/bariscoskunl/RestaurantApp",
    btnText: "View on GitHub",
    detailBtnText: "View Details",
  },
];

// ===== TYPING EFFECT =====
const phraseTR = "Merhaba, Ben Barış, Yazılım Geliştiricisiyim.";
const phraseEN = "Hi, I am Barış, I am a Software Developer.";

const textElementTR = document.getElementById("typing-text");
const textElementEN = document.getElementById("typing-text-en");

function type(element, phrase, index = 0) {
  if (!element) return;

  if (index < phrase.length) {
    element.innerHTML += phrase.charAt(index);
    setTimeout(() => {
      type(element, phrase, index + 1);
    }, 70);
  }
}

// ===== VIDEO FADE-IN =====
function initVideoFadeIn() {
  const video = document.getElementById("bg-video");
  if (!video) return;

  const onVideoReady = () => {
    video.classList.add("video-loaded");
    // Hide skeleton shimmer after video fades in
    setTimeout(() => {
      document.body.classList.add("video-ready");
    }, 1200);
  };

  // If video is already loaded (cached), fire immediately
  if (video.readyState >= 3) {
    onVideoReady();
  } else {
    video.addEventListener("canplaythrough", onVideoReady, { once: true });
    // Fallback: if canplaythrough never fires (e.g. mobile), use loadeddata
    video.addEventListener("loadeddata", () => {
      setTimeout(onVideoReady, 300);
    }, { once: true });
  }
}

// ===== RENDER PROJECTS FROM JSON =====
function renderProjects(projects, gridId) {
  const grid = document.getElementById(gridId);
  const modalsContainer = document.getElementById("modals-container");
  if (!grid || !modalsContainer) return;

  const isTR = !!textElementTR;
  const closeLabel = isTR ? "Kapat" : "Close";

  projects.forEach((project, index) => {
    // Create card
    const card = document.createElement("div");
    card.className = "p-card animate-on-scroll";
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="p-header">
        <h3>${project.title}</h3>
        <span class="p-tag">${project.tag}</span>
      </div>
      <p>${project.description}</p>
      <button class="detail-btn" data-modal="modal-${project.id}">
        ${project.detailBtnText}
      </button>
    `;
    grid.appendChild(card);

    // Create modal
    const modal = document.createElement("div");
    modal.id = `modal-${project.id}`;
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <button type="button" class="close" data-modal-close="modal-${project.id}" aria-label="${closeLabel}">&times;</button>
        <h2>${project.modalTitle}</h2>
        <p><strong>${isTR ? "Teknolojiler" : "Technologies"}:</strong> ${project.tech}</p>
        <p><strong>${isTR ? "Özellikler" : "Features"}:</strong> ${project.features}</p>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="cv-btn">
          <i class="fa-brands fa-github"></i> ${project.btnText}
        </a>
      </div>
    `;
    modalsContainer.appendChild(modal);
  });
}

// ===== MODAL OPEN / CLOSE =====
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("is-open");
    document.body.style.overflow = "auto";
  }
}

// Delegate click events for modals (handles dynamically created elements)
document.addEventListener("click", (e) => {
  // Detail button → open modal
  const detailBtn = e.target.closest(".detail-btn[data-modal]");
  if (detailBtn) {
    openModal(detailBtn.dataset.modal);
    return;
  }

  // Close button
  const closeBtn = e.target.closest("[data-modal-close]");
  if (closeBtn) {
    closeModal(closeBtn.dataset.modalClose);
    return;
  }

  // Click on modal backdrop
  if (e.target.classList.contains("modal") && e.target.classList.contains("is-open")) {
    e.target.classList.remove("is-open");
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModals = document.querySelectorAll(".modal.is-open");
    openModals.forEach((modal) => {
      modal.classList.remove("is-open");
    });
    document.body.style.overflow = "auto";
  }
});

// ===== INTERSECTION OBSERVER (Scroll Animations) =====
let scrollObserver = null;

function initScrollAnimations() {
  const targets = document.querySelectorAll(
    ".about-grid, .feature-item, .p-card, .goal-card, .tech-badge, .stat-item, .contact-form-wrapper, .section-title, .section-slogan, .stats-row, .goals-grid, .projects-grid, .projects-sub-title, .contact-socials, .typing-box, .status-badge, .scroll-indicator"
  );

  targets.forEach((el) => el.classList.add("animate-on-scroll"));
  const contentArea = document.querySelector(".content-area");

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      root: contentArea || null,
      threshold: 0.05,
      rootMargin: "0px 0px -10px 0px",
    }
  );

  targets.forEach((el) => scrollObserver.observe(el));
}

// ===== NAV TRANSITION REPLAY =====
function initNavTransitions() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const contentArea = document.querySelector(".content-area");
  if (!contentArea) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || !targetId.startsWith("#")) return;

      e.preventDefault();

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      // Collect all animatable elements inside the target section (and the section itself)
      const animatables = [targetSection, ...targetSection.querySelectorAll(".animate-on-scroll")];

      // Reset their animation state
      animatables.forEach((el) => {
        el.classList.remove("is-visible");
      });

      // Scroll within content-area (not window)
      const targetOffset = targetSection.offsetTop;
      contentArea.scrollTo({ top: targetOffset, behavior: "smooth" });

      // Re-observe after scroll starts so IntersectionObserver triggers the fade-in
      setTimeout(() => {
        if (scrollObserver) {
          animatables.forEach((el) => {
            scrollObserver.observe(el);
          });
        }
      }, 300);
    });
  });
}

// ===== CLIPBOARD EMAIL + MAILTO HYBRID =====
function initClipboardEmail() {
  const mailButtons = document.querySelectorAll('a[href^="mailto:"]');
  const isEN = document.documentElement.lang === "en";
  const email = "bariscoskun441@gmail.com";

  mailButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Orijinal tıklama davranışını geçici olarak yönetiyoruz
      e.preventDefault();

      // 1. Panoya kopyala
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast(
            isEN
              ? "✓ Email copied & opening mail app!"
              : "✓ E-posta kopyalandı & mail uygulaması açılıyor!"
          );

          // 2. Kısa bir gecikmeyle mail istemcisini tetikle
          setTimeout(() => {
            window.location.href = `mailto:${email}`;
          }, 100);
        })
        .catch(() => {
          // Fallback: Kopyalama başarısız olursa direkt aç
          window.location.href = `mailto:${email}`;
        });
    });
  });
}

function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector(".toast-notification");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${message}`;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });
  });

  // Auto-hide after 2.5s
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ===== CONTACT FORM HANDLING (Formspree) =====
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const isEN = document.documentElement.lang === "en";
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.innerHTML : "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable button & show loading
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isEN ? "Sending..." : "Gönderiliyor..."}`;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showToast(
          isEN
            ? "✓ Message sent successfully!"
            : "✓ Mesajınız başarıyla gönderildi!"
        );
        form.reset();
      } else {
        showToast(
          isEN
            ? "✗ Failed to send. Please try again."
            : "✗ Gönderilemedi. Lütfen tekrar deneyin."
        );
      }
    } catch (error) {
      showToast(
        isEN
          ? "✗ Network error. Please try again."
          : "✗ Bağlantı hatası. Lütfen tekrar deneyin."
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

// ===== SCROLL SPY — Active Nav Link =====
const sections = document.querySelectorAll(".page-section");
const navLinksAll = document.querySelectorAll(".nav-links a");
const contentAreaEl = document.querySelector(".content-area");

if (contentAreaEl) {
  contentAreaEl.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Ekranda hangi bölümün ağırlıklı olduğunu hesaplar
      if (contentAreaEl.scrollTop >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinksAll.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

// ===== THEME TOGGLE (Dark/Light) =====
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector("i");

  // 1. Ziyaretçinin daha önceki tercihini localStorage'dan al
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  // 2. Butona tıklandığında çalışacak olay
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
}

// ===== MOBILE MENU — Scroll active nav into view =====
function initMobileNavScroll() {
  const navContainer = document.querySelector(".nav-links");
  if (!navContainer) return;

  // On nav click, scroll the clicked link into view within the horizontal nav
  navContainer.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
      setTimeout(() => {
        link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }, 100);
    }
  });
}

// ===== INIT ON LOAD =====
window.addEventListener("load", () => {
  // Typing effect
  if (textElementTR) type(textElementTR, phraseTR);
  if (textElementEN) type(textElementEN, phraseEN);

  // Video fade-in
  initVideoFadeIn();

  // Render projects from JSON
  const gridTR = document.getElementById("projects-grid-tr");
  const gridEN = document.getElementById("projects-grid-en");
  if (gridTR) renderProjects(projectsTR, "projects-grid-tr");
  if (gridEN) renderProjects(projectsEN, "projects-grid-en");

  // Scroll animations (marks elements & starts observer)
  initScrollAnimations();

  // Nav transition replay (re-triggers animations on nav click)
  initNavTransitions();

  // Clipboard email + mailto hybrid
  initClipboardEmail();

  // Contact form (Formspree)
  initContactForm();

  // Mobile nav auto-scroll
  initMobileNavScroll();
});