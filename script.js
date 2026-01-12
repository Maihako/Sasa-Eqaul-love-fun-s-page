/* ===== Intro邨ゆｺ��逅� ===== */
setTimeout(() => {
  const lastIntro = document.querySelector(".intro3");
  const uiBg = document.querySelector(".ui-bg");

  uiBg.style.backgroundImage = getComputedStyle(lastIntro).backgroundImage;

  document.querySelector(".ui").classList.add("is-visible");
  document.querySelectorAll(".intro").forEach((el) => el.remove());
}, 6000);

/* ===== Tabs ===== */
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.tab;
    tabs.forEach((t) => t.classList.remove("is-active"));
    panels.forEach((p) => p.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.querySelector(`[data-panel="${id}"]`).classList.add("is-active");
  });
});

/* 繝ｭ繧ｴ�抖AB1 */
document.querySelector(".logo").addEventListener("click", () => {
  document.querySelector('[data-tab="1"]').click();
});

/* ===== Hamburger ===== */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});
const tabCount = document.querySelectorAll(".tab").length;
document.documentElement.style.setProperty("--tab-count", tabCount);
