(() => {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (nav && navToggle) {
    const navToggleLabel = navToggle.querySelector(".sr-only");
    const setNavState = (opening) => {
      nav.classList.toggle("is-open", opening);
      navToggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
      navToggle.setAttribute("aria-expanded", String(opening));
      if (navToggleLabel) {
        navToggleLabel.textContent = opening ? "Close navigation" : "Open navigation";
      }
      body.classList.toggle("nav-open", opening);
    };

    const closeNav = () => {
      setNavState(false);
    };

    navToggle.addEventListener("click", () => {
      const opening = navToggle.getAttribute("aria-expanded") !== "true";
      setNavState(opening);
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeNav();
    });
  }

  const researchVideos = Array.from(document.querySelectorAll("[data-research-video]"));
  if (researchVideos.length) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const videoObserver = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting && !reducedMotion.matches && !document.hidden) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        }, { rootMargin: "120px 0px", threshold: 0.12 })
      : null;

    researchVideos.forEach((video) => {
      if (reducedMotion.matches) {
        video.pause();
        video.currentTime = 0;
      } else if (videoObserver) {
        videoObserver.observe(video);
      }
    });

    document.addEventListener("visibilitychange", () => {
      researchVideos.forEach((video) => {
        if (document.hidden || reducedMotion.matches) video.pause();
      });
    });
  }

  const publicationList = document.querySelector("[data-publication-list]");
  if (!publicationList) return;

  const publications = Array.from(document.querySelectorAll("[data-publication]"));
  const yearGroups = Array.from(document.querySelectorAll("[data-year-group]"));
  const search = document.querySelector("[data-pub-search]");
  const year = document.querySelector("[data-pub-year]");
  const kind = document.querySelector("[data-pub-kind]");
  const topic = document.querySelector("[data-pub-topic]");
  const count = document.querySelector("[data-pub-count]");
  const reset = document.querySelector("[data-pub-reset]");
  const empty = document.querySelector("[data-pub-empty]");

  const normalize = (value) => value.trim().toLowerCase();

  const applyFilters = () => {
    const query = normalize(search?.value || "");
    const selectedYear = year?.value || "";
    const selectedKind = kind?.value || "";
    const selectedTopic = topic?.value || "";
    let visible = 0;

    publications.forEach((item) => {
      const matchesSearch = !query || item.dataset.search.includes(query);
      const matchesYear = !selectedYear || item.dataset.year === selectedYear;
      const matchesKind = !selectedKind || item.dataset.kind === selectedKind;
      const matchesTopic = !selectedTopic || item.dataset.topic === selectedTopic;
      const show = matchesSearch && matchesYear && matchesKind && matchesTopic;
      item.hidden = !show;
      if (show) visible += 1;
    });

    yearGroups.forEach((group) => {
      group.hidden = !group.querySelector("[data-publication]:not([hidden])");
    });

    if (count) count.textContent = String(visible);
    if (empty) empty.hidden = visible !== 0;
  };

  [search, year, kind, topic].forEach((control) => {
    control?.addEventListener(control === search ? "input" : "change", applyFilters);
  });

  reset?.addEventListener("click", () => {
    if (search) search.value = "";
    if (year) year.value = "";
    if (kind) kind.value = "";
    if (topic) topic.value = "";
    history.replaceState({}, "", window.location.pathname);
    applyFilters();
  });

  const initialTopic = new URLSearchParams(window.location.search).get("topic");
  if (initialTopic && topic) {
    const option = Array.from(topic.options).find((item) => item.value === initialTopic);
    if (option) topic.value = option.value;
  }

  applyFilters();
})();
