(function () {
  const plants = window.PLANTS || [];
  const plantDetails = window.PLANT_DETAILS || {};
  const STORAGE_KEY = "tree-flashcards-stats-v1";

  const els = {
    filter: document.getElementById("filter"),
    shuffle: document.getElementById("shuffle"),
    modeStudy: document.getElementById("mode-study"),
    modeQuiz: document.getElementById("mode-quiz"),
    studySection: document.getElementById("study-section"),
    quizSection: document.getElementById("quiz-section"),
    progress: document.getElementById("progress"),
    card: document.getElementById("flashcard"),
    cardImg: document.getElementById("card-img"),
    cardLoading: document.getElementById("card-loading"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
    btnKnown: document.getElementById("btn-known"),
    btnHard: document.getElementById("btn-hard"),
    btnLearnMore: document.getElementById("btn-learn-more"),
    quizImg: document.getElementById("quiz-img"),
    quizOptions: document.getElementById("quiz-options"),
    quizFeedback: document.getElementById("quiz-feedback"),
    quizNext: document.getElementById("quiz-next"),
    quizLearnMore: document.getElementById("quiz-learn-more"),
    scoreQuiz: document.getElementById("score-quiz"),
    learnMorePanel: document.getElementById("learn-more-panel"),
    learnMoreTitle: document.getElementById("learn-more-title"),
    learnMoreSci: document.getElementById("learn-more-sci"),
    learnMoreKind: document.getElementById("learn-more-kind"),
    learnMoreProgress: document.getElementById("learn-more-progress"),
    learnMoreLeaf: document.getElementById("learn-more-leaf"),
    learnMoreBark: document.getElementById("learn-more-bark"),
    learnMoreFruit: document.getElementById("learn-more-fruit"),
    learnMoreSeason: document.getElementById("learn-more-season"),
    learnMoreHabitat: document.getElementById("learn-more-habitat"),
    learnMoreHint: document.getElementById("learn-more-hint"),
    learnMoreSimilar: document.getElementById("learn-more-similar"),
    learnMoreClose: document.getElementById("learn-more-close")
  };

  let deck = [...plants];
  let index = 0;
  let quiz = {
    current: null,
    choices: [],
    answered: false,
    correct: 0,
    total: 0
  };

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { known: {}, hard: {}, quizCorrect: 0, quizTotal: 0 };
    } catch {
      return { known: {}, hard: {}, quizCorrect: 0, quizTotal: 0 };
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch (_) {}
  }

  const stats = loadStats();

  function filteredDeck() {
    const f = els.filter.value;
    if (f === "tree") return plants.filter((p) => p.kind === "tree");
    if (f === "shrub") return plants.filter((p) => p.kind === "shrub");
    return [...plants];
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function applyFilter() {
    deck = els.shuffle.value === "shuffled" ? shuffleArray(filteredDeck()) : filteredDeck();
    index = 0;
    els.card.classList.remove("flipped");
    if (getMode() === "study") renderStudy();
    else startQuizRound();
  }

  function getMode() {
    return els.modeStudy.getAttribute("aria-selected") === "true" ? "study" : "quiz";
  }

  function setMode(mode) {
    const study = mode === "study";
    els.modeStudy.setAttribute("aria-selected", study);
    els.modeQuiz.setAttribute("aria-selected", !study);
    els.studySection.classList.toggle("hidden", !study);
    els.quizSection.classList.toggle("hidden", study);
    if (study) {
      renderStudy();
    } else {
      startQuizRound();
    }
  }

  function currentPlant() {
    return deck[index];
  }

  function getPlantDetails(plant) {
    const row = plantDetails[plant.id] || {};
    const fallback = "Details not added for this species yet — see data/plant-details.js.";
    return {
      leaf: row.leaf || fallback,
      bark: row.bark || fallback,
      fruit: row.fruit || fallback,
      season: row.season || fallback,
      habitat: row.habitat || fallback
    };
  }

  function openLearnMore(plant) {
    if (!plant) return;
    const similar = plants
      .filter((x) => x.id !== plant.id && x.kind === plant.kind)
      .slice(0, 3)
      .map((x) => x.common);
    const knownCount = stats.known[plant.id] || 0;
    const hardCount = stats.hard[plant.id] || 0;

    els.learnMoreTitle.textContent = plant.common;
    els.learnMoreSci.textContent = plant.scientific;
    els.learnMoreKind.textContent = plant.kind === "tree" ? "Tree" : "Shrub";
    els.learnMoreProgress.textContent = `Your progress: known ${knownCount}, review ${hardCount}`;
    const d = getPlantDetails(plant);
    els.learnMoreLeaf.textContent = d.leaf;
    els.learnMoreBark.textContent = d.bark;
    els.learnMoreFruit.textContent = d.fruit;
    els.learnMoreSeason.textContent = d.season;
    els.learnMoreHabitat.textContent = d.habitat;
    els.learnMoreHint.textContent = plant.hint;
    els.learnMoreSimilar.textContent =
      similar.length > 0 ? `Similar ${plant.kind}s in this deck: ${similar.join(", ")}.` : "No similar species available.";
    els.learnMorePanel.classList.remove("hidden");
    els.learnMorePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderStudy() {
    const p = currentPlant();
    if (!p) {
      els.progress.textContent = "No plants match this filter.";
      return;
    }
    els.progress.textContent = `Card ${index + 1} of ${deck.length}`;
    els.card.classList.remove("flipped");
    els.cardLoading.textContent = "Loading photo…";
    els.cardLoading.classList.remove("hidden");
    els.cardImg.onload = () => els.cardLoading.classList.add("hidden");
    els.cardImg.onerror = () => {
      els.cardLoading.classList.remove("hidden");
      els.cardLoading.textContent = "Photo unavailable — check connection or update data/plants.js.";
    };
    els.cardImg.alt = "Plant photo — flip to identify";
    els.cardImg.src = p.image;

    const back = els.card.querySelector(".card-back");
    back.querySelector(".common-name").textContent = p.common;
    back.querySelector(".sci-name").textContent = p.scientific;
    back.querySelector(".kind-badge").textContent = p.kind === "tree" ? "Tree" : "Shrub";
    back.querySelector(".hint").textContent = p.hint;

    els.btnPrev.disabled = index === 0;
    els.btnNext.disabled = index >= deck.length - 1;
  }

  function randomChoices(correct, count) {
    const others = plants.filter((x) => x.id !== correct.id);
    const shuffled = shuffleArray(others);
    const picks = shuffled.slice(0, count - 1);
    const all = shuffleArray([correct, ...picks]);
    return all;
  }

  function startQuizRound() {
    const pool = filteredDeck();
    if (!pool.length) {
      els.scoreQuiz.textContent = "No cards for this filter.";
      return;
    }
    quiz.current = pool[Math.floor(Math.random() * pool.length)];
    quiz.choices = randomChoices(quiz.current, 4);
    quiz.answered = false;
    els.quizFeedback.classList.remove("visible", "ok", "bad");
    els.quizFeedback.textContent = "";
    els.quizNext.classList.add("hidden");
    els.quizImg.src = quiz.current.image;
    els.quizImg.alt = "Identify this plant";
    els.quizOptions.innerHTML = "";
    quiz.choices.forEach((p) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = p.common;
      btn.dataset.id = p.id;
      btn.addEventListener("click", () => onQuizPick(p.id, btn));
      els.quizOptions.appendChild(btn);
    });
    const total = stats.quizTotal || 0;
    const right = stats.quizCorrect || 0;
    els.scoreQuiz.textContent =
      total > 0 ? `Lifetime quiz: ${right} / ${total} (${Math.round((100 * right) / total)}%)` : "Pick the common name.";
  }

  function onQuizPick(id, btn) {
    if (quiz.answered) return;
    quiz.answered = true;
    const correct = id === quiz.current.id;
    stats.quizTotal = (stats.quizTotal || 0) + 1;
    if (correct) stats.quizCorrect = (stats.quizCorrect || 0) + 1;
    saveStats(stats);

    els.quizOptions.querySelectorAll("button").forEach((b) => {
      b.disabled = true;
      if (b.dataset.id === quiz.current.id) b.classList.add("correct");
      else if (b === btn && !correct) b.classList.add("wrong");
    });

    els.quizFeedback.classList.add("visible", correct ? "ok" : "bad");
    els.quizFeedback.innerHTML = correct
      ? `<strong>Correct.</strong> <em>${quiz.current.scientific}</em>`
      : `<strong>Not quite.</strong> This is <strong>${quiz.current.common}</strong> (<em>${quiz.current.scientific}</em>). ${quiz.current.hint}`;
    els.quizNext.classList.remove("hidden");
  }

  function bumpIndex(delta) {
    index = Math.max(0, Math.min(deck.length - 1, index + delta));
    els.card.classList.remove("flipped");
    renderStudy();
  }

  function markKnown(kind) {
    const p = currentPlant();
    if (!p) return;
    if (kind === "known") {
      stats.known[p.id] = (stats.known[p.id] || 0) + 1;
      delete stats.hard[p.id];
    } else {
      stats.hard[p.id] = (stats.hard[p.id] || 0) + 1;
    }
    saveStats(stats);
    bumpIndex(1);
  }

  els.card.addEventListener("click", () => {
    if (getMode() !== "study") return;
    els.card.classList.toggle("flipped");
  });

  els.card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      els.card.classList.toggle("flipped");
    }
  });

  els.filter.addEventListener("change", applyFilter);
  els.shuffle.addEventListener("change", applyFilter);
  els.modeStudy.addEventListener("click", () => setMode("study"));
  els.modeQuiz.addEventListener("click", () => setMode("quiz"));
  els.btnPrev.addEventListener("click", () => bumpIndex(-1));
  els.btnNext.addEventListener("click", () => bumpIndex(1));
  els.btnKnown.addEventListener("click", () => markKnown("known"));
  els.btnHard.addEventListener("click", () => markKnown("hard"));
  els.btnLearnMore.addEventListener("click", (e) => {
    e.stopPropagation();
    openLearnMore(currentPlant());
  });
  els.quizLearnMore.addEventListener("click", () => openLearnMore(quiz.current));
  els.learnMoreClose.addEventListener("click", () => els.learnMorePanel.classList.add("hidden"));
  els.quizNext.addEventListener("click", () => startQuizRound());

  document.addEventListener("keydown", (e) => {
    if (getMode() !== "study" || document.activeElement?.tagName === "SELECT") return;
    if (e.key === "ArrowLeft") bumpIndex(-1);
    if (e.key === "ArrowRight") bumpIndex(1);
    if (e.key === "f" || e.key === "F") els.card.classList.toggle("flipped");
  });

  els.card.setAttribute("tabindex", "0");
  els.card.setAttribute("role", "button");
  els.card.setAttribute("aria-label", "Flashcard — click or press F to flip");

  applyFilter();
})();
