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
const textOverlay = document.querySelector("#textOverlay");
const screenList = document.querySelector("#screenList");
const cardGrid = document.querySelector("#cardGrid");
const hotspots = document.querySelectorAll(".hotspot");
const sideButtons = document.querySelectorAll(".side-button");
let current = "intro";
let selectedSide = "front";

const editableCopy = {
  intro: [
    { kind: "cover", className: "cover-light", style: "left:27%;top:31%;width:46%;height:10%;" },
    { text: "다로리", className: "overlay-logo", style: "left:27%;top:33%;width:46%;" },
    { kind: "cover", className: "cover-light", style: "left:29%;top:42%;width:42%;height:3%;" },
    { text: "다로리 하늘에 소원을 빌어보세요.", className: "overlay-subtitle", style: "left:24%;top:42.2%;width:52%;" },
    { kind: "cover", className: "cover-light", style: "left:20%;bottom:11.2%;width:60%;height:5.2%;border-radius:16px;" },
    { text: "시작하기", className: "overlay-button", style: "left:20%;bottom:12.9%;width:60%;" }
  ],
  story1: [
    { kind: "cover", className: "cover-sheet", style: "left:22%;top:69%;width:57%;height:14%;border-radius:14px;" },
    { text: "안녕, 나는 다로리 밤하늘의 작은 안내자, 루리야.\n이곳은 소원을 품은 사람들이 찾아오는 마을, 다로리야.\n사람들의 간절한 마음은 다로리의 밤하늘에 작은 별로 남게 돼. 이번엔, 너의 별을 찾으러 와준 거지?", className: "overlay-story", style: "left:25%;top:71.2%;width:50%;" }
  ],
  story2: [
    { kind: "cover", className: "cover-sheet", style: "left:22%;top:69%;width:57%;height:14%;border-radius:14px;" },
    { text: "다로리의 밤하늘에는 수많은 사람들의 소원이 별이 되어 떠 있어. 어떤 별은 조용히 빛나고,\n어떤 별은 이루어져 환하게 반짝이지.\n이제 너도 다로리에 꼭 이루고 싶은 소원을 남겨볼래?", className: "overlay-story", style: "left:25%;top:71.2%;width:50%;" }
  ],
  wish: [
    { kind: "cover", className: "cover-light", style: "left:18%;top:14%;width:66%;height:5%;" },
    { text: "당신의 소원은 무엇인가요?", className: "overlay-wish-title", style: "left:18%;top:15%;width:66%;" },
    { kind: "cover", className: "cover-input", style: "left:18%;top:21%;width:64%;height:4.5%;border-radius:18px;" },
    { text: "30자 이내로 작성해주세요.", className: "overlay-placeholder", style: "left:21%;top:22.2%;width:58%;" },
    { kind: "cover", className: "cover-light", style: "left:20%;bottom:11.2%;width:60%;height:5.3%;border-radius:16px;" },
    { text: "소원 작성 완료", className: "overlay-button", style: "left:20%;bottom:12.9%;width:60%;" }
  ],
  qr: [
    { kind: "cover", className: "cover-night", style: "left:30%;top:57%;width:40%;height:5%;" },
    { text: "빈집의 QR을 비춰주세요", className: "overlay-qr-title", style: "left:25%;top:57.7%;width:50%;" },
    { text: "스캔하면 이야기가 열립니다", className: "overlay-qr-subtitle", style: "left:25%;top:60.2%;width:50%;" },
    { text: "스캔 완료", className: "overlay-button", style: "left:20%;bottom:13.5%;width:60%;" }
  ],
  collection: [
    { kind: "cover", className: "cover-light", style: "left:19%;top:10%;width:42%;height:5%;" },
    { text: "나의 수집함", className: "overlay-logo", style: "left:18%;top:10.8%;width:44%;text-align:left;font-size:24px;" },
    { text: "별자리 만들러가기", className: "overlay-button", style: "left:20%;bottom:20.7%;width:60%;" }
  ],
  night1: [
    { kind: "cover", className: "cover-night", style: "left:16%;top:10%;width:35%;height:5%;" },
    { text: "다로리 밤하늘", className: "overlay-night-title", style: "left:16%;top:10.6%;width:36%;" },
    { kind: "cover", className: "cover-sheet", style: "left:20%;top:62%;width:60%;height:15%;border-radius:18px;" },
    { text: "포이<span>의 소원</span>", className: "overlay-sheet-title html", style: "left:22%;top:64.2%;width:50%;" },
    { text: "2026년도 무사히 흘러가게 해주세요.", className: "overlay-sheet-text", style: "left:22%;top:69%;width:56%;" }
  ],
  night2: [
    { kind: "cover", className: "cover-night", style: "left:16%;top:10%;width:35%;height:5%;" },
    { text: "다로리 밤하늘", className: "overlay-night-title", style: "left:16%;top:10.6%;width:36%;" },
    { kind: "cover", className: "cover-sheet", style: "left:20%;top:62%;width:60%;height:15%;border-radius:18px;" },
    { text: "하하하<span>의 소원</span>", className: "overlay-sheet-title html", style: "left:22%;top:64.2%;width:50%;" },
    { text: "전쟁이 끝나게 해주세요. 하하하", className: "overlay-sheet-text", style: "left:22%;top:69%;width:56%;" }
  ]
};

const cardCopy = [
  { title: "다로리", short: "다 이루리", story: "수백 년 동안 다로리는 길손들의 쉼터가 되어 주었다. 누군가는 이곳에서 용기를 얻었고, 누군가는 다시 시작할 힘을 얻었다. 그래서 사람들은 이 마을의 이름을 빌려 소원을 말한다. 다 이루어지길.", fortune: "당신이 품고 있는 바람은 생각보다 가까운 곳에 있다. 자신을 믿고 한 걸음 더 나아가 보자." },
  { title: "황소", short: "1톤의 충격을 버텨내는 힘", story: "청도의 황소들은 쉽게 물러서지 않는다. 상대를 쓰러뜨리기 위해서가 아니라 자신의 자리를 지키기 위해 묵묵히 버틴다. 강함은 큰 힘이 아니라 끝까지 포기하지 않는 마음에서 나온다.", fortune: "당장 결과가 보이지 않아도 괜찮다. 오늘의 끈기가 내일의 기회를 만든다." },
  { title: "복사꽃", short: "분홍을 거머쥔 우리", story: "봄이 오면 청도의 복사꽃이 들판을 분홍빛으로 물들인다. 아직 찬 기운이 남아 있어도 꽃은 피어난다. 완벽한 조건을 기다리지 않는다. 따뜻한 봄이 올 것을 믿고 먼저 피어난다.", fortune: "준비가 부족하다고 느껴져도 시작해 보자. 생각보다 좋은 결과를 얻을 수 있다." },
  { title: "일곱 가구", short: "새로운 시작", story: "사람들이 하나둘 떠나며 비어 있던 다로리에 새로운 이웃들이 찾아왔다. 불 꺼진 창문에는 다시 빛이 켜지고, 조용했던 골목에는 웃음소리가 들리기 시작했다.", fortune: "가망이 없다고 생각했던 일들이 점점 풀리기 시작한다. 새로운 인연이나 기회가 찾아올 수 있다." },
  { title: "나그네", short: "나의 선택을 정답으로\n만들어가는 길", story: "예부터 다로리를 지나던 나그네들은 저마다 다른 사연을 품고 있었다. 어떤 이는 시험을 보러 가는 길이었고, 어떤 이는 새로운 삶을 시작하러 가는 길이었다.", fortune: "망설이던 선택이 있다면 믿고 나아가 보자. 길은 걷는 사람 앞에서 조금씩 드러난다." },
  { title: "감꽃", short: "아무도 모르게\n피어난 감꽃", story: "초여름이 되면 감나무에는 작은 꽃이 핀다. 화려하지도 않고 눈에 잘 띄지도 않지만, 그 꽃이 있었기에 가을의 탐스러운 감이 열린다.", fortune: "지금의 노력은 보이지 않아도 사라지지 않는다. 곧 누군가 당신의 결실을 보게 될 것이다." },
  { title: "할머니", short: "당신의 상상은\n현실이 된다", story: "다로리의 할머니들은 뒤늦게 시를 배우기 시작했다. 처음에는 단지 새로운 취미라고 생각했지만, 결국 자신의 이름으로 시집을 펴낸 시인이 되었다.", fortune: "당신이 불가능하다고 생각한 일에 새로운 가능성이 열린다. 스스로 한계를 정하지 말자." },
  { title: "파출소", short: "나는 무섭지 않아", story: "한때 사람들에게 두려움의 상징이었던 파출소 건물이 지금도 남아 있다. 하지만 이제 그 건물을 보며 겁을 내는 사람은 없다. 시간이 지나자 두려움은 사라지고 이야기만 남았다.", fortune: "마음을 무겁게 하던 고민이 예상보다 빨리 해결된다. 너무 큰 그림자로 만들지 말자." },
  { title: "다바이", short: "우리 한숨 돌리고 갈까?", story: "옛 다로동에는 다바이라 불리던 작은 주막이 있었다. 먼 길을 걷던 사람들은 정자나무 아래에 앉아 밥을 먹고 목을 축인 뒤 다시 길을 떠났다.", fortune: "오늘은 자신에게 작은 휴식을 선물해 보자. 쉼이 필요한 순간은 포기가 아니라 충전의 시간이다." },
  { title: "막걸리", short: "톡톡톡 막걸리가\n익어가는 소리", story: "다로리의 오래된 양조장에서는 막걸리가 천천히 익어간다. 좋은 쌀과 깨끗한 물이 있어도 시간을 건너뛸 수는 없다. 깊은 맛은 기다림에서 온다.", fortune: "조급한 마음을 잠시 내려두자. 지금 당신의 노력도 보이지 않을 뿐, 여전히 익어가고 있다." },
  { title: "반시", short: "걱정을 덜어낸\n달콤함", story: "청도의 반시는 씨가 없는 감으로 유명하다. 사람들은 먹기 편해서 좋다고 말하지만, 어떤 이들은 반시가 불필요한 것을 비워냈기에 더 달콤해졌다고 이야기한다.", fortune: "붙잡고 있던 걱정 하나를 내려놓아 보자. 생각하지 못했던 좋은 소식이 그 자리를 채울 것이다." }
];

function showScreen(id) {
  const next = screens[id] || screens.intro;
  current = id in screens ? id : "intro";
  image.src = next.src;
  image.alt = next.alt;
  renderOverlay(current);

  document.querySelectorAll("[data-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.screen === current);
  });
}

function regionNode(region) {
  const node = document.createElement("div");
  node.className = region.kind === "cover" ? `text-cover ${region.className}` : `editable-text ${region.className}`;
  node.style.cssText = region.style;
  if (region.text) {
    if (region.className?.includes("html")) {
      node.innerHTML = region.text;
    } else {
      node.textContent = region.text;
    }
  }
  return node;
}

function cardOverlay(id) {
  const match = id.match(/^card(\d+)(Back)?$/);
  if (!match) return [];
  const card = cardCopy[Number(match[1]) - 1] || cardCopy[0];
  const isBack = Boolean(match[2]);
  if (isBack) {
    return [
      { kind: "cover", className: "cover-light", style: "left:34%;top:19%;width:32%;height:5%;" },
      { text: "WISH · CARD", className: "overlay-eyebrow", style: "left:34%;top:19.4%;width:32%;" },
      { kind: "cover", className: "cover-light", style: "left:28%;top:22%;width:45%;height:5%;" },
      { text: `${card.title} 카드 획득!`, className: "overlay-card-title", style: "left:25%;top:22.6%;width:50%;" },
      { kind: "cover", className: "cover-card-back", style: "left:31%;top:35%;width:38%;height:23%;border-radius:14px;transform:rotate(4deg);" },
      { text: card.story, className: "overlay-card-back", style: "left:35%;top:38%;width:30%;transform:rotate(4deg);" },
      { text: "오늘의 운세", className: "overlay-fortune-title", style: "left:35%;top:50%;width:30%;transform:rotate(4deg);" },
      { text: card.fortune, className: "overlay-card-back", style: "left:35%;top:52%;width:30%;transform:rotate(4deg);" },
      { text: "컬렉션에 추가", className: "overlay-button", style: "left:20%;bottom:13.7%;width:60%;" },
      { text: "계속 탐험하기", className: "overlay-card-title", style: "left:20%;bottom:8.1%;width:60%;font-size:15px;" }
    ];
  }
  return [
    { kind: "cover", className: "cover-light", style: "left:34%;top:19%;width:32%;height:5%;" },
    { text: "WISH · CARD", className: "overlay-eyebrow", style: "left:34%;top:19.4%;width:32%;" },
    { kind: "cover", className: "cover-light", style: "left:28%;top:22%;width:45%;height:5%;" },
    { text: `${card.title} 카드 획득!`, className: "overlay-card-title", style: "left:25%;top:22.6%;width:50%;" },
    { kind: "cover", className: "cover-card-front", style: "left:32%;top:34%;width:38%;height:27%;border-radius:14px;transform:rotate(-4deg);" },
    { text: card.short, className: "overlay-card-front", style: "left:35%;top:55%;width:32%;transform:rotate(-4deg);" },
    { text: "컬렉션에 추가", className: "overlay-button", style: "left:20%;bottom:13.7%;width:60%;" },
    { text: "계속 탐험하기", className: "overlay-card-title", style: "left:20%;bottom:8.1%;width:60%;font-size:15px;" }
  ];
}

function renderOverlay(id) {
  const regions = [...(editableCopy[id] || []), ...cardOverlay(id)];
  textOverlay.replaceChildren(...regions.map(regionNode));
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
