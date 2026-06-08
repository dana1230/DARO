const onboardingScreens = {
  intro: {
    label: "온보딩 시작",
    render: () => `
      <section class="screen screen-intro" aria-label="다이루리 시작 화면">
        <div class="intro-mark">
          <div class="intro-star">✦</div>
          <div class="intro-logo">다이루리</div>
          <div class="intro-subtitle">다로리 하늘에 소원을 빌어보세요.</div>
        </div>
        <button class="primary-button" type="button" data-next="story1">시작하기</button>
      </section>
    `
  },
  story1: {
    label: "온보딩 설명 1",
    background: "assets/onboarding/story1.png",
    lines: [
      "안녕, 나는 다로리 밤하늘의 작은 안내자, 루리야.",
      "이곳은 소원을 품은 사람들이 찾아오는 마을, 다로리야.",
      "사람들의 간절한 마음은 다로리의 밤하늘에",
      "작은 별로 남게 돼. 이번엔, 너의 별을 찾으러 와준 거지?"
    ],
    next: "story2"
  },
  story2: {
    label: "온보딩 설명 2",
    background: "assets/onboarding/story2.png",
    lines: [
      "다로리의 밤하늘에는 수많은 사람들의 소원이",
      "별이 되어 떠 있어. 어떤 별은 조용히 빛나고,",
      "어떤 별은 이루어져 환하게 반짝이지.",
      "이제 너도 다로리에 꼭 이루고 싶은 소원을 남겨볼래?"
    ],
    next: "wish"
  },
  wish: {
    label: "소원 입력",
    render: () => `
      <section class="screen screen-wish" aria-label="소원 입력 화면">
        <h1 class="wish-title">당신의 소원은 무엇인가요?</h1>
        <div class="wish-input" contenteditable="true" data-placeholder="30자 이내로 작성해주세요." aria-label="소원 입력"></div>
        <button class="primary-button" type="button" data-next="intro">소원 작성 완료</button>
      </section>
    `
  }
};

const phone = document.querySelector("#phone");
const phoneStage = document.querySelector(".phone-stage");
const screenList = document.querySelector("#screenList");
let currentScreen = "intro";

function resizePhone() {
  const sidePanelRoom = window.innerWidth > 900 ? 420 : 0;
  const availableWidth = Math.max(280, window.innerWidth - sidePanelRoom - 56);
  const availableHeight = Math.max(520, window.innerHeight - 56);
  const scale = Math.min(availableWidth / 390, availableHeight / 844, 1);
  phoneStage.style.width = `${390 * scale}px`;
  phoneStage.style.height = `${844 * scale}px`;
  phone.style.transform = `scale(${scale})`;
}

function storyTemplate(id, screen) {
  return `
    <section class="screen screen-story screen-${id}" aria-label="${screen.label}">
      <img class="screen-bg" src="${screen.background}" alt="" />
      <div class="story-layer">
        <div class="speaker-label">루리</div>
        <button class="next-link" type="button" data-next="${screen.next}">다음 ›</button>
        <div class="story-card">
          ${screen.lines.map((line) => `<p>${line}</p>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderScreen(id) {
  const screen = onboardingScreens[id] || onboardingScreens.intro;
  currentScreen = onboardingScreens[id] ? id : "intro";
  if (window.location.hash.slice(1) !== currentScreen) {
    history.replaceState(null, "", `#${currentScreen}`);
  }
  phone.innerHTML = screen.render ? screen.render() : storyTemplate(currentScreen, screen);

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === currentScreen);
  });

  phone.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => renderScreen(button.dataset.next));
  });
}

Object.entries(onboardingScreens).forEach(([id, screen]) => {
  const button = document.createElement("button");
  button.className = "screen-button";
  button.type = "button";
  button.dataset.screen = id;
  button.textContent = screen.label;
  button.addEventListener("click", () => renderScreen(id));
  screenList.appendChild(button);
});

renderScreen(window.location.hash.slice(1) || "intro");
resizePhone();
window.addEventListener("resize", resizePhone);
