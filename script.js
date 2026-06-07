const screens = {
  intro: {
    label: "시작",
    src: "assets/screens/onboarding-title.png",
    alt: "다로리 시작 화면",
    primary: "story1",
    secondary: "story1"
  },
  story1: {
    label: "온보딩 1",
    src: "assets/screens/onboarding-story-1.png",
    alt: "루리 소개 첫 번째 화면",
    primary: "story2",
    secondary: "story2"
  },
  story2: {
    label: "온보딩 2",
    src: "assets/screens/onboarding-story-2.png",
    alt: "루리 소개 두 번째 화면",
    primary: "wish",
    secondary: "wish"
  },
  wish: {
    label: "소원 작성",
    src: "assets/screens/wish-input.png",
    alt: "소원 작성 화면",
    primary: "home",
    secondary: "home"
  },
  home: {
    label: "홈 지도",
    src: "assets/screens/home-map.png",
    alt: "별자리 지도 홈 화면",
    primary: "qr",
    secondary: "collection"
  },
  qr: {
    label: "QR 스캔",
    src: "assets/screens/qr-scan.png",
    alt: "QR 스캔 화면",
    primary: "card1Back",
    secondary: "home"
  },
  collection: {
    label: "수집함",
    src: "assets/screens/collection.png",
    alt: "수집함 화면",
    primary: "night1",
    secondary: "home"
  },
  night1: {
    label: "밤하늘 소원",
    src: "assets/screens/night-card-1.png",
    alt: "밤하늘 소원 카드 화면",
    primary: "night2",
    secondary: "home"
  },
  night2: {
    label: "밤하늘 카드",
    src: "assets/screens/night-card-2.png",
    alt: "다로리 밤하늘 카드 화면",
    primary: "nightOpen",
    secondary: "home"
  },
  nightOpen: {
    label: "별자리 열림",
    src: "assets/screens/night-open.png",
    alt: "별자리 열린 화면",
    primary: "nightDetail",
    secondary: "home"
  },
  nightDetail: {
    label: "별자리 상세",
    src: "assets/screens/night-detail.png",
    alt: "별자리 상세 화면",
    primary: "home",
    secondary: "home"
  }
};

for (let i = 1; i <= 11; i += 1) {
  screens[`card${i}`] = {
    label: `카드 ${i} 앞면`,
    src: `assets/cards/wish-card-${i}-front.png`,
    alt: `소원 카드 ${i} 앞면`,
    primary: `card${i}Back`,
    secondary: "collection"
  };
  screens[`card${i}Back`] = {
    label: `카드 ${i} 뒷면`,
    src: `assets/cards/wish-card-${i}-back.png`,
    alt: `소원 카드 ${i} 뒷면`,
    primary: "collection",
    secondary: "home"
  };
}

const image = document.querySelector("#screenImage");
const screenList = document.querySelector("#screenList");
const cardGrid = document.querySelector("#cardGrid");
const hotspots = document.querySelectorAll(".hotspot");
const sideButtons = document.querySelectorAll(".side-button");
let current = "intro";
let selectedSide = "front";

function showScreen(id) {
  const next = screens[id] || screens.intro;
  current = id in screens ? id : "intro";
  image.src = next.src;
  image.alt = next.alt;

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === current);
  });
}

Object.entries(screens)
  .filter(([id]) => !id.startsWith("card"))
  .forEach(([id, screen]) => {
    const button = document.createElement("button");
    button.className = "screen-button";
    button.type = "button";
    button.dataset.screen = id;
    button.textContent = screen.label;
    button.addEventListener("click", () => showScreen(id));
    screenList.appendChild(button);
  });

for (let i = 1; i <= 11; i += 1) {
  const button = document.createElement("button");
  button.className = "card-button";
  button.type = "button";
  button.dataset.screen = `card${i}`;
  button.textContent = i;
  button.addEventListener("click", () => showScreen(selectedSide === "back" ? `card${i}Back` : `card${i}`));
  cardGrid.appendChild(button);
}

sideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSide = button.dataset.side;
    sideButtons.forEach((item) => item.classList.toggle("active", item === button));
    if (/^card\d+(Back)?$/.test(current)) {
      const number = current.match(/\d+/)?.[0] || "1";
      showScreen(selectedSide === "back" ? `card${number}Back` : `card${number}`);
    }
  });
});

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const screen = screens[current];
    const target = hotspot.dataset.next;
    if (target === "home" || target === "collection" || target === "qr" || target === "night1") {
      showScreen(target);
      return;
    }
    showScreen(screen?.primary || target);
  });
});

showScreen("intro");
