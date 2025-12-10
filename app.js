/* app.js */
(() => {
  const I18N = window.I18N;
  const translations = I18N?.translations || {};

  const MAX_COUNT = 50;
  const MIN_COUNT = 2;
  const MAX_NAME_LENGTH = I18N?.NAME_MAX ?? 30;

  const STORAGE_KEY = "gift-draw-state-v1";

  const state = {
    currentLang: "pl",
    theme: "light",
    count: 5,
    names: [],
    title: "",
    message: "",
    budgetRaw: "",
    lastGivers: null,
    lastRecipients: null,
    mode: "setup",
    lastEgg: null
  };

  const els = {
    cardRoot: document.getElementById("cardRoot"),
    langBtns: Array.from(document.querySelectorAll(".lang-btn")),
    countInput: document.getElementById("countInput"),
    countDisplay: document.getElementById("countDisplay"),
    minusBtn: document.getElementById("minusBtn"),
    plusBtn: document.getElementById("plusBtn"),
    createFieldsBtn: document.getElementById("createFieldsBtn"),
    namesWrapper: document.getElementById("namesWrapper"),
    drawBtn: document.getElementById("drawBtn"),
    clearNamesBtn: document.getElementById("clearNamesBtn"),
    errorBox: document.getElementById("error"),
    resultsBox: document.getElementById("results"),
    step1: document.getElementById("step1"),
    step2: document.getElementById("step2"),
    step3: document.getElementById("step3"),
    toast: document.getElementById("toast"),
    themeToggle: document.getElementById("themeToggle"),
    themeIcon: document.getElementById("themeIcon"),
    budgetInput: document.getElementById("budgetInput"),
    budgetCurrency: document.getElementById("budgetCurrency"),
    optionalTitleInput: document.getElementById("optionalTitleInput"),
    optionalMessageInput: document.getElementById("optionalMessageInput")
  };

  
/* i18n helpers */

  function t(key, params = {}) {
    const langDict = translations[state.currentLang] || translations.pl || {};
    const plDict = translations.pl || {};
    const enDict = translations.en || {};
    let text = langDict[key] ?? plDict[key] ?? enDict[key] ?? key;
    for (const p of Object.keys(params)) {
      text = text.replace(`{${p}}`, params[p]);
    }
    return text;
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    updateNamePlaceholders();
    updateCurrencyBadge();
  }

  function animateLangSwap() {
    if (!els.cardRoot) return;
    els.cardRoot.classList.add("i18n-fade");
    window.setTimeout(() => els.cardRoot.classList.remove("i18n-fade"), 160);
  }

  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(() => {
      els.toast.classList.remove("show");
    }, 1200);
  }

  
/* state persistence */

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return;

      state.currentLang = data.currentLang || state.currentLang;
      state.theme = data.theme || state.theme;
      state.count = clampCount(data.count ?? state.count);
      state.names = Array.isArray(data.names) ? data.names : [];
      state.title = data.title || "";
      state.message = data.message || "";
      state.budgetRaw = data.budgetRaw || "";
      state.lastGivers = Array.isArray(data.lastGivers) ? data.lastGivers : null;
      state.lastRecipients = Array.isArray(data.lastRecipients) ? data.lastRecipients : null;
      state.mode = data.mode === "results" ? "results" : "setup";
      state.lastEgg = data.lastEgg || null;
    } catch (_) {}
  }

  
/* auto language detect */

  function detectPreferredLang() {
    const supported = Object.keys(translations || {});
    if (!supported.length) return "en";

    const navLangs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || "en"];

    const normalize = (l) => String(l || "").toLowerCase().split("-")[0];

    for (const l of navLangs) {
      const base = normalize(l);
      if (supported.includes(base)) return base;
    }

    for (const l of navLangs) {
      const full = String(l || "").toLowerCase();
      if (supported.includes(full)) return full;
    }

    return supported.includes("en") ? "en" : supported[0];
  }

  function seedAutoLangIfFirstVisit() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      state.currentLang = detectPreferredLang();
      return;
    }
    try {
      const data = JSON.parse(raw);
      if (!data?.currentLang) {
        state.currentLang = detectPreferredLang();
      }
    } catch (_) {}
  }

  
/* theme */

  function setTheme(theme) {
    state.theme = theme;
    document.body.setAttribute("data-theme", theme);
    if (els.themeIcon) {
      els.themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    saveState();
  }

  function toggleTheme() {
    setTheme(state.theme === "dark" ? "light" : "dark");
  }

  
/* count */

  function clampCount(value) {
    const v = parseInt(value, 10);
    if (Number.isNaN(v)) return MIN_COUNT;
    return Math.min(MAX_COUNT, Math.max(MIN_COUNT, v));
  }

  function updateCount(val) {
    state.count = clampCount(val);
    if (els.countInput) els.countInput.value = String(state.count);
    if (els.countDisplay) els.countDisplay.textContent = String(state.count);
    saveState();
  }

  
/* errors */

  function clearError() {
    if (els.errorBox) els.errorBox.textContent = "";
  }

  function setError(key, params) {
    if (els.errorBox) els.errorBox.textContent = t(key, params || {});
  }

  
/* budget */

  function updateCurrencyBadge() {
    if (!els.budgetCurrency) return;
    const cur = I18N?.getCurrency(state.currentLang)?.code || "EUR";
    els.budgetCurrency.textContent = cur;
  }

  function sanitizeBudgetInput(raw) {
    if (!raw) return "";
    let v = raw.replace(/[^\d.,]/g, "");
    v = v.replace(",", ".");
    const parts = v.split(".");
    if (parts.length > 2) {
      v = parts[0] + "." + parts.slice(1).join("");
    }
    return v;
  }

  function getBudgetLine() {
    const val = sanitizeBudgetInput(state.budgetRaw);
    if (!val) return "";
    const cur = I18N?.getCurrency(state.currentLang)?.code || "EUR";
    return `${t("budgetLabel")}: ${val} ${cur}`;
  }

  
/* share text */

function buildShareText(givers, recipients) {
  const lines = [];

  const title = (state.title || "").trim();
  const message = (state.message || "").trim();
  const budgetLine = getBudgetLine();

  // EASTER EGG: Grinch — w tekście, nie w DOM
  if (state.lastEgg === "grinch") {
    lines.push(t("eg_grinch_banner"));
    lines.push("");
  }

  if (title) lines.push(title);
  if (message) lines.push(message);
  if (budgetLine) lines.push(budgetLine);

  if (title || message || budgetLine) lines.push("");

  givers.forEach((giver, i) => {
    lines.push(`${giver} → ${recipients[i]}`);
  });

  lines.push("");
  lines.push(t("createdBy"));

  return lines.join("\n");
}

  function exportToEmail(givers, recipients) {
    if (!givers || !recipients) return;
    const subject = encodeURIComponent(t("emailSubject"));
    const body = encodeURIComponent(buildShareText(givers, recipients));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  
/* PNG export (FIX 1 + 2) */

  let isSharingPng = false;

  async function exportToPng(givers, recipients) {
    if (!givers || !recipients) return;
    if (isSharingPng) return;

    isSharingPng = true;

    const cardEl = buildShareCardElement(givers, recipients);
    const host = document.createElement("div");
    host.style.position = "fixed";
    host.style.left = "-10000px";
    host.style.top = "0";
    host.appendChild(cardEl);
    document.body.appendChild(host);

    const isDark = state.theme === "dark";

    try {
      const canvas = await html2canvas(cardEl, {
        backgroundColor: isDark ? "#121521" : "#ffffff",
        scale: 2,
        useCORS: true
      });

      const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
      if (!blob) return;

      const fileName = `gift-draw-${state.currentLang}.png`;
      const file = new File([blob], fileName, { type: "image/png" });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file] });
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } finally {
      host.remove();
      window.setTimeout(() => { isSharingPng = false; }, 350);
    }
  }

  function buildShareCardElement(givers, recipients) {
    const isDark = state.theme === "dark";

    const COLORS = isDark
      ? {
          bg: "#121521",
          border: "rgba(255,255,255,0.08)",
          text: "#eef2ff",
          muted: "#b6bfd6",
          chip: "rgba(255,255,255,0.06)",
          rowBg: "rgba(255,255,255,0.05)",
          rowBorder: "rgba(255,255,255,0.06)"
        }
      : {
          bg: "#ffffff",
          border: "#e5e7eb",
          text: "#111827",
          muted: "#4b5563",
          chip: "#f3f4f6",
          rowBg: "#f9fafb",
          rowBorder: "#eef2f7"
        };

    const wrap = document.createElement("div");
    wrap.style.display = "inline-block";
    wrap.style.padding = "16px 16px 14px";
    wrap.style.borderRadius = "14px";
    wrap.style.background = COLORS.bg;
    wrap.style.border = `1px solid ${COLORS.border}`;
    wrap.style.fontFamily =
      'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif';
    wrap.style.color = COLORS.text;
    wrap.style.maxWidth = "520px";

    const title = (state.title || "").trim();
    const message = (state.message || "").trim();
    const budgetLine = getBudgetLine();

    if (title) {
      const h = document.createElement("div");
      h.textContent = title;
      h.style.fontSize = "18px";
      h.style.fontWeight = "700";
      h.style.marginBottom = "4px";
      wrap.appendChild(h);
    }

    if (message) {
      const p = document.createElement("div");
      p.textContent = message;
      p.style.fontSize = "12.5px";
      p.style.color = COLORS.muted;
      p.style.marginBottom = "8px";
      wrap.appendChild(p);
    }

    if (budgetLine) {
      const b = document.createElement("div");
      b.textContent = budgetLine;
      b.style.display = "inline-block";
      b.style.fontSize = "11px";
      b.style.fontWeight = "600";
      b.style.padding = "4px 8px";
      b.style.borderRadius = "999px";
      b.style.background = COLORS.chip;
      b.style.marginBottom = "10px";
      wrap.appendChild(b);
    }

    const list = document.createElement("div");
    list.style.display = "grid";
    list.style.gap = "6px";

    givers.forEach((giver, i) => {
      const row = document.createElement("div");
      row.style.display = "grid";
      row.style.gridTemplateColumns = "1fr auto 1fr";
      row.style.alignItems = "center";
      row.style.columnGap = "10px";
      row.style.padding = "6px 8px";
      row.style.borderRadius = "10px";
      row.style.background = COLORS.rowBg;
      row.style.border = `1px solid ${COLORS.rowBorder}`;

      const left = document.createElement("span");
      left.textContent = giver;
      left.style.fontSize = "12.5px";
      left.style.fontWeight = "600";
      left.style.textAlign = "left";
      left.style.whiteSpace = "nowrap";
      left.style.overflow = "hidden";
      left.style.textOverflow = "ellipsis";

      const arrow = document.createElement("span");
      arrow.textContent = "→";
      arrow.style.opacity = "0.55";
      arrow.style.fontSize = "12px";
      arrow.style.textAlign = "center";

      const right = document.createElement("span");
      right.textContent = recipients[i];
      right.style.fontSize = "12.5px";
      right.style.fontWeight = "700";
      right.style.textAlign = "right";
      right.style.whiteSpace = "nowrap";
      right.style.overflow = "hidden";
      right.style.textOverflow = "ellipsis";

      row.appendChild(left);
      row.appendChild(arrow);
      row.appendChild(right);
      list.appendChild(row);
    });

    wrap.appendChild(list);

    const footer = document.createElement("div");
    footer.textContent = t("createdBy");
    footer.style.fontSize = "10px";
    footer.style.color = COLORS.muted;
    footer.style.marginTop = "10px";
    footer.style.textAlign = "center";
    wrap.appendChild(footer);

    return wrap;
  }

  
/* draw logic */

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function generateDerangement(names) {
    const recipients = names.slice();
    let tries = 0;

    do {
      shuffle(recipients);
      tries++;
      if (tries > 1000) break;
    } while (recipients.some((name, idx) => name === names[idx]));

    for (let i = 0; i < names.length; i++) {
      if (recipients[i] === names[i]) {
        const j = (i + 1) % names.length;
        [recipients[i], recipients[j]] = [recipients[j], recipients[i]];
      }
    }

    return recipients;
  }

  function setMode(mode) {
    state.mode = mode;

    const isResults = mode === "results";
    if (els.step1) els.step1.classList.toggle("hidden", isResults);
    if (els.step2) els.step2.classList.toggle("hidden", isResults);

    saveState();
  }

  
/* [names UI] */

  function updateNamePlaceholders() {
    const inputs = Array.from(document.querySelectorAll(".nameInput"));
    inputs.forEach((input, idx) => {
      input.placeholder = t("namePlaceholder", { index: idx + 1 });
    });
  }

  function markDuplicateInputs(names, inputs) {
    const map = new Map();
    names.forEach((n, i) => {
      const key = (n || "").toLowerCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(i);
    });

    inputs.forEach(inp => {
      inp.style.borderColor = "";
      inp.style.boxShadow = "";
    });

    const duplicates = [];
    map.forEach((indexes, key) => {
      if (key && indexes.length > 1) {
        duplicates.push(names[indexes[0]]);
        indexes.forEach(i => {
          const inp = inputs[i];
          if (!inp) return;
          inp.style.borderColor = "#ef4444";
          inp.style.boxShadow = "0 0 0 2px rgba(239,68,68,0.12)";
        });
      }
    });

    return duplicates;
  }

  function validateNamesLive() {
    const inputs = Array.from(document.querySelectorAll(".nameInput"));

    const duplicates = markDuplicateInputs(
      inputs.map(i => i.value.trim()),
      inputs
    );

    if (duplicates.length) {
      setError("error_duplicateNamesList", { list: duplicates.join(", ") });
    } else {
      clearError();
    }

    if (els.clearNamesBtn) els.clearNamesBtn.disabled = inputs.length === 0;
    state.names = inputs.map(i => i.value);
    saveState();
  }

  function createNameFields(count) {
    if (els.namesWrapper) els.namesWrapper.innerHTML = "";
    if (els.resultsBox) els.resultsBox.innerHTML = "";
    clearError();

    state.lastGivers = null;
    state.lastRecipients = null;

    for (let i = 0; i < count; i++) {
      const row = document.createElement("div");
      row.className = "row";

      const labelSpan = document.createElement("span");
      labelSpan.className = "index";
      labelSpan.textContent = (i + 1) + ".";

      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = MAX_NAME_LENGTH;
      input.placeholder = t("namePlaceholder", { index: i + 1 });
      input.className = "nameInput";
      input.value = state.names[i] || "";

      input.addEventListener("input", validateNamesLive);

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const inputs = Array.from(document.querySelectorAll(".nameInput"));
          const lastIndex = inputs.length - 1;
          const currentIndex = inputs.indexOf(input);
          if (currentIndex === lastIndex) {
            e.preventDefault();
            drawFlow();
          }
        }
      });

      row.appendChild(labelSpan);
      row.appendChild(input);
      if (els.namesWrapper) els.namesWrapper.appendChild(row);
    }

    const inputs = Array.from(document.querySelectorAll(".nameInput"));
    if (inputs[0]) inputs[0].focus();

    if (els.drawBtn) els.drawBtn.disabled = count < 2;
    if (els.clearNamesBtn) els.clearNamesBtn.disabled = count < 1;

    validateNamesLive();
  }

  function drawFlow() {
    clearError();

    const inputs = Array.from(document.querySelectorAll(".nameInput"));
    if (inputs.length < 2) {
      setError("error_notEnoughNameFields");
      return;
    }

    const names = [];
    for (const input of inputs) {
      const value = input.value.trim();
      if (!value) {
        setError("error_emptyName");
        return;
      }
      if (value.length > MAX_NAME_LENGTH) {
        setError("error_tooLongName", { value });
        return;
      }
      names.push(value);
    }

    const unique = new Set(names.map(n => n.toLowerCase()));
    if (unique.size !== names.length) {
      const duplicates = markDuplicateInputs(names, inputs);
      if (duplicates.length) {
        setError("error_duplicateNamesList", { list: duplicates.join(", ") });
      } else {
        setError("error_duplicateNames");
      }
      return;
    }

        const egg = window.EASTER_EGGS?.checkForbidden(names);

        if (egg?.blocked) {
          showToast(t(egg.toastKey));
          return;
        }
    
        let recipients;

        if (egg?.mode === "thanks") {
          recipients = window.EASTER_EGGS.buildThanksRecipients(names, state.currentLang);
          state.lastEgg = "thanks";
        }
        else if (window.EASTER_EGGS?.isGrinch(names)) {
          recipients = window.EASTER_EGGS.buildGrinchRecipients(names);
          state.lastEgg = "grinch";
        }
        else {
          recipients = generateDerangement(names);
          state.lastEgg = null;
        }

    state.lastGivers = names.slice();
    state.lastRecipients = recipients.slice();
    saveState();

    renderResults(names, recipients, { animate: true });
    setMode("results");
  }

  
/* RESULTS (FIX 3) */

function legacyCopyText(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (_) {}
  ta.remove();
}

  function renderResults(givers, recipients, options = {}) {
    const { animate = true } = options;

    if (!els.resultsBox) return;
    els.resultsBox.innerHTML = "";

    const topbar = document.createElement("div");
    topbar.className = "results-topbar";

    const backBtn = document.createElement("button");
    backBtn.className = "secondary back-btn";
    backBtn.type = "button";
    backBtn.textContent = t("back");
    backBtn.addEventListener("click", () => {
      setMode("setup");
      els.resultsBox.innerHTML = "";
    });

    topbar.appendChild(backBtn);
    els.resultsBox.appendChild(topbar);

    const title = document.createElement("h2");
    title.textContent = t("resultTitle");
    els.resultsBox.appendChild(title);

if (state.lastEgg === "grinch" || state.lastEgg === "thanks") {
  const banner = document.createElement("div");
  banner.className = `egg-banner ${state.lastEgg === "grinch" ? "egg-grinch" : "egg-thanks"}`;

  const msg = document.createElement("div");
  msg.className = "egg-banner__message";
  msg.textContent = state.lastEgg === "grinch"
    ? t("eg_grinch_banner")
    : t("eg_block_arturpolachowski");

  banner.appendChild(msg);

  if (state.lastEgg === "thanks") {
    const link = document.createElement("a");
    link.className = "egg-banner__button";
    link.href = "https://buymeacoffee.com/polartcoffee";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = t("eg_bmac_button"); 
    banner.appendChild(link);
  }

  els.resultsBox.appendChild(banner);
}

const pairsWrapper = document.createElement("div");
pairsWrapper.className = "pairs-wrapper";
els.resultsBox.appendChild(pairsWrapper);

const allNames = givers.slice();

givers.forEach((giver, index) => {
  const pairDiv = document.createElement("div");
  pairDiv.className = "pair";

  if (animate) {
    pairDiv.style.animationDelay = (index * 0.08) + "s";
  } else {
    pairDiv.style.animation = "none";
    pairDiv.style.opacity = "1";
    pairDiv.style.transform = "none";
  }

  const giverSpan = document.createElement("span");
  giverSpan.className = "giver";
  giverSpan.textContent = giver + " →";

  const slot = document.createElement("span");
  slot.className = "slot";

  pairDiv.appendChild(giverSpan);
  pairDiv.appendChild(slot);
  pairsWrapper.appendChild(pairDiv);

  if (!animate) {
    slot.textContent = recipients[index];
    slot.classList.add("final");
    return;
  }

  /* animowany "roller" */

  slot.textContent = "…";
  let i = 0;
  const interval = setInterval(() => {
    slot.textContent = allNames[i % allNames.length];
    i++;
  }, 80);

  const stopTime = 1100 + index * 220;
  setTimeout(() => {
    clearInterval(interval);
    slot.textContent = recipients[index];
    slot.classList.add("final");
  }, stopTime);
});

const exportRow = document.createElement("div");
exportRow.className = "export-row";

const copyBtn = document.createElement("button");
copyBtn.className = "secondary";
copyBtn.type = "button";
copyBtn.textContent = t("copyText");

const emailBtn = document.createElement("button");
emailBtn.className = "ghost";
emailBtn.type = "button";
emailBtn.textContent = t("sendEmail");

const pngBtn = document.createElement("button");
pngBtn.className = "ghost";
pngBtn.type = "button";
pngBtn.textContent = t("sharePng");

copyBtn.addEventListener("click", async () => {
  let text = "";
  try {
    text = buildShareText(givers, recipients);
  } catch (_) {
    showToast(t("copiedToast"));
    return;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      legacyCopyText(text);
    }
    showToast(t("copiedToast"));
  } catch (_) {
    legacyCopyText(text);
    showToast(t("copiedToast"));
  }
});

emailBtn.addEventListener("click", () => exportToEmail(givers, recipients));
pngBtn.addEventListener("click", () => exportToPng(givers, recipients));

exportRow.appendChild(copyBtn);
exportRow.appendChild(emailBtn);
exportRow.appendChild(pngBtn);

els.resultsBox.appendChild(exportRow);
}

  
/* wiring */

  function wireLanguages() {
    els.langBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;

        state.currentLang = lang;

        els.langBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        animateLangSwap();
        applyTranslations();
        saveState();

        if (state.mode === "results" && state.lastGivers && state.lastRecipients) {
          renderResults(state.lastGivers, state.lastRecipients, { animate: false });
        }
      });
    });
  }

  function restoreLangActive() {
    els.langBtns.forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-lang") === state.currentLang);
    });
  }

  function wireCount() {
    if (els.minusBtn) els.minusBtn.addEventListener("click", () => updateCount(state.count - 1));
    if (els.plusBtn) els.plusBtn.addEventListener("click", () => updateCount(state.count + 1));
  }

  function wireCreateFields() {
    if (!els.createFieldsBtn) return;
    els.createFieldsBtn.addEventListener("click", () => {
      clearError();

      const count = clampCount(els.countInput?.value);
      if (count < MIN_COUNT) {
        setError("error_needCount");
        return;
      }
      if (count > MAX_COUNT) {
        setError("error_tooMany");
        return;
      }

      updateCount(count);
      createNameFields(count);

      if (els.drawBtn) els.drawBtn.disabled = false;
      if (els.clearNamesBtn) els.clearNamesBtn.disabled = false;

      setMode("setup");
    });
  }

  function wireDraw() {
    if (els.drawBtn) els.drawBtn.addEventListener("click", drawFlow);
  }

  function wireClearNames() {
    if (!els.clearNamesBtn) return;
    els.clearNamesBtn.addEventListener("click", () => {
      const inputs = Array.from(document.querySelectorAll(".nameInput"));
      inputs.forEach(i => i.value = "");
      state.names = [];
      saveState();
      clearError();
      validateNamesLive();
      if (inputs[0]) inputs[0].focus();
    });
  }

  function wireBudget() {
    if (!els.budgetInput) return;
    els.budgetInput.addEventListener("input", () => {
      const cleaned = sanitizeBudgetInput(els.budgetInput.value);
      els.budgetInput.value = cleaned;
      state.budgetRaw = cleaned;
      saveState();
    });
  }

  function wireOptionalFields() {
    if (els.optionalTitleInput) {
      els.optionalTitleInput.addEventListener("input", () => {
        state.title = els.optionalTitleInput.value || "";
        saveState();
      });
    }

    if (els.optionalMessageInput) {
      els.optionalMessageInput.addEventListener("input", () => {
        state.message = els.optionalMessageInput.value || "";
        saveState();
      });
    }
  }

  
/* hydration */

  function hydrateInputsFromState() {
    updateCount(state.count);

    if (els.budgetInput) els.budgetInput.value = state.budgetRaw || "";
    if (els.optionalTitleInput) els.optionalTitleInput.value = state.title || "";
    if (els.optionalMessageInput) els.optionalMessageInput.value = state.message || "";

    updateCurrencyBadge();
  }

  function hydrateNamesUIIfPossible() {
    if (state.count >= 2 && (state.names?.length || 0) > 0) {
      createNameFields(state.count);
      if (els.drawBtn) els.drawBtn.disabled = false;
      if (els.clearNamesBtn) els.clearNamesBtn.disabled = false;
    }
  }

  
/* init */

  function init() {
    seedAutoLangIfFirstVisit();
    loadState();

    setTheme(state.theme);
    restoreLangActive();
    applyTranslations();
    hydrateInputsFromState();

    wireLanguages();
    wireCount();
    wireCreateFields();
    wireDraw();
    wireClearNames();
    wireBudget();
    wireOptionalFields();

    if (els.themeToggle) {
      els.themeToggle.addEventListener("click", toggleTheme);
    }

    hydrateNamesUIIfPossible();

    if (state.lastGivers && state.lastRecipients && state.mode === "results") {
      renderResults(state.lastGivers, state.lastRecipients, { animate: false });
      setMode("results");
    } else {
      setMode("setup");
    }
  }

  init();
})();

(() => {
  "use strict";

  const GRINCH_TOKEN = "grinch";

  const CREATOR_TOKEN = "arturpolachowski";
  const CREATOR_TOAST_KEY = "eg_block_arturpolachowski";

  const FORBIDDEN = [
    { word: "adolf hitler", toastKey: "eg_block_hitler" },
    { word: "vladimir putin", toastKey: "eg_block_putin" },
  ];

  const THANKS_RESULT_BY_LANG = {
    pl: "Dziękuję bardzo :)",
    en: "Thank you so much :)",
    de: "Vielen Dank :)",
    fr: "Merci beaucoup :)",
    es: "Muchas gracias :)",
    it: "Grazie mille :)",
    pt: "Muito obrigado :)",
    nl: "Heel erg bedankt :)",
    sv: "Tack så mycket :)",
    cs: "Moc děkuji :)",
    tr: "Çok teşekkür ederim :)",
    no: "Tusen takk :)",
    da: "Tusind tak :)",
    fi: "Paljon kiitoksia :)",
    hu: "Nagyon köszönöm :)",
    ro: "Mulțumesc foarte mult :)",
    uk: "Дуже дякую :)",
    el: "Ευχαριστώ πολύ :)",
  };

  function normalizeName(name) {
    return String(name || "")
      .trim()
      .toLowerCase();
  }

  function normalizeToken(name) {
    return normalizeName(name).replace(/\s+/g, "");
  }

  function isGrinch(names) {
    if (!Array.isArray(names)) return false;
    return names.some(n => normalizeName(n) === GRINCH_TOKEN);
  }

  function isCreator(names) {
    if (!Array.isArray(names)) return false;
    return names.some(n => normalizeToken(n) === CREATOR_TOKEN);
  }

  function buildGrinchRecipients(names) {
    const original = Array.isArray(names)
      ? names.find(n => normalizeName(n) === GRINCH_TOKEN)
      : "Grinch";

    const grinchName = original || "Grinch";
    return (names || []).map(() => grinchName);
  }

  function buildThanksRecipients(names, lang) {
    const safeLang = String(lang || "").toLowerCase();
    const msg =
      THANKS_RESULT_BY_LANG[safeLang] ||
      THANKS_RESULT_BY_LANG.en ||
      "Thank you so much :)";

    return (names || []).map(() => msg);
  }

  function checkForbidden(names) {
    if (!Array.isArray(names)) return null;

    for (const n of names) {
      const nn = normalizeName(n);
      for (const rule of FORBIDDEN) {
        if (nn === rule.word) {
          return { blocked: true, toastKey: rule.toastKey, word: rule.word };
        }
      }
    }

    if (isCreator(names)) {
      return {
        blocked: false,
        mode: "thanks",
        toastKey: CREATOR_TOAST_KEY,
        word: "artur polachowski",
      };
    }

    return null;
  }

  // Export API
  window.EASTER_EGGS = {
    normalizeName,
    normalizeToken,
    isGrinch,
    isCreator,
    buildGrinchRecipients,
    buildThanksRecipients,
    checkForbidden
  };
})();