const cards = [
  {
    name: "다 이루리",
    short: "다 이루리",
    story: "수백 년 동안 다로리는 길손들의 쉼터가 되어 주었다. 누군가는 이곳에서 용기를 얻었고, 누군가는 다시 시작할 힘을 얻었다. 그래서 사람들은 이 마을의 이름을 빌려 소원을 말한다. 다 이루어지길.",
    fortune: "당신이 품고 있는 바람은 생각보다 가까운 곳에 있다. 자신을 믿고 한 걸음 더 나아가 보자."
  },
  {
    name: "황소",
    short: "1톤의 충격을 버텨내는 힘",
    story: "청도의 황소들은 쉽게 물러서지 않는다. 상대를 쓰러뜨리기 위해서가 아니라 자신의 자리를 지키기 위해 묵묵히 버틴다. 강함은 큰 힘이 아니라 끝까지 포기하지 않는 마음에서 나온다.",
    fortune: "당장 결과가 보이지 않아도 괜찮다. 오늘의 끈기가 내일의 기회를 만든다."
  },
  {
    name: "복사꽃",
    short: "분홍을 거머쥔 우리",
    story: "봄이 오면 청도의 복사꽃이 들판을 분홍빛으로 물들인다. 아직 찬 기운이 남아 있어도 꽃은 피어난다. 완벽한 조건을 기다리지 않는다. 따뜻한 봄이 올 것을 믿고 먼저 피어난다.",
    fortune: "준비가 부족하다고 느껴져도 시작해 보자. 생각보다 좋은 결과를 얻을 수 있다."
  },
  {
    name: "일곱 가구",
    short: "새로운 시작",
    story: "사람들이 하나둘 떠나며 비어 있던 다로리에 새로운 이웃들이 찾아왔다. 불 꺼진 창문에는 다시 빛이 켜지고, 조용했던 골목에는 웃음소리가 들리기 시작했다.",
    fortune: "가망이 없다고 생각했던 일들이 점점 풀리기 시작한다. 새로운 인연이나 기회가 찾아올 수 있다."
  },
  {
    name: "나그네",
    short: "나의 선택을 정답으로 만들어가는 길",
    story: "예부터 다로리를 지나던 나그네들은 저마다 다른 사연을 품고 있었다. 어떤 이는 시험을 보러 가는 길이었고, 어떤 이는 새로운 삶을 시작하러 가는 길이었다.",
    fortune: "망설이던 선택이 있다면 믿고 나아가 보자. 길은 걷는 사람 앞에서 조금씩 드러난다."
  },
  {
    name: "감꽃",
    short: "아무도 모르게 피어난 감꽃",
    story: "초여름이 되면 감나무에는 작은 꽃이 핀다. 화려하지도 않고 눈에 잘 띄지도 않지만, 그 꽃이 있었기에 가을의 탐스러운 감이 열린다.",
    fortune: "지금의 노력은 보이지 않아도 사라지지 않는다. 곧 누군가 당신의 결실을 보게 될 것이다."
  },
  {
    name: "할머니",
    short: "당신의 상상은 현실이 된다",
    story: "다로리의 할머니들은 뒤늦게 시를 배우기 시작했다. 처음에는 단지 새로운 취미라고 생각했지만, 결국 자신의 이름으로 시집을 펴낸 시인이 되었다.",
    fortune: "당신이 불가능하다고 생각한 일에 새로운 가능성이 열린다. 스스로 한계를 정하지 말자."
  },
  {
    name: "파출소",
    short: "나는 무섭지 않아",
    story: "한때 사람들에게 두려움의 상징이었던 파출소 건물이 지금도 남아 있다. 하지만 이제 그 건물을 보며 겁을 내는 사람은 없다. 시간은 두려움을 이야기로 바꾼다.",
    fortune: "마음을 무겁게 하던 고민이 예상보다 빨리 해결된다. 너무 큰 그림자로 만들지 말자."
  },
  {
    name: "다바이",
    short: "우리 한숨 돌리고 갈까?",
    story: "옛 다로동에는 다바이라 불리던 작은 주막이 있었다. 먼 길을 걷던 사람들은 정자나무 아래에 앉아 밥을 먹고 목을 축인 뒤 다시 길을 떠났다.",
    fortune: "오늘은 자신에게 작은 휴식을 선물해 보자. 쉼이 필요한 순간은 포기가 아니라 충전의 시간이다."
  },
  {
    name: "막걸리",
    short: "톡톡톡 막걸리가 익어가는 소리",
    story: "다로리의 오래된 양조장에서는 막걸리가 천천히 익어간다. 좋은 쌀과 깨끗한 물이 있어도 시간을 건너뛸 수는 없다. 깊은 맛은 기다림에서 온다.",
    fortune: "조급한 마음을 잠시 내려두자. 지금 당신의 노력도 보이지 않을 뿐 여전히 익어가고 있다."
  },
  {
    name: "반시",
    short: "걱정을 덜어낸 달콤함",
    story: "청도의 반시는 씨가 없는 감으로 유명하다. 사람들은 먹기 편해서 좋다고 말하지만, 어떤 이들은 반시가 불필요한 것을 비워냈기에 더 달콤해졌다고 이야기한다.",
    fortune: "붙잡고 있던 걱정 하나를 내려놓아 보자. 생각하지 못했던 좋은 소식이 그 자리를 채울 것이다."
  }
];

const screens = {
  intro: { label: "시작", type: "intro" },
  story1: {
    label: "온보딩 1",
    type: "story",
    text: "안녕, 나는 다로리 밤하늘의 작은 안내자, 루리야. 이곳은 소원을 품은 사람들이 찾아오는 마을, 다로리야. 사람들의 간절한 마음은 다로리의 밤하늘에 작은 별로 남게 돼. 이번엔, 너의 별을 찾으러 와준 거지?"
  },
  story2: {
    label: "온보딩 2",
    type: "story",
    text: "다로리의 밤하늘에는 수많은 사람들의 소원이 별이 되어 떠 있어. 어떤 별은 조용히 빛나고, 어떤 별은 이루어져 환하게 반짝이지. 이제 너도 다로리에 꼭 이루고 싶은 소원을 남겨볼래?"
  },
  wish: { label: "소원 작성", type: "wish" },
  home: { label: "홈 지도", type: "home" },
  qr: { label: "QR 스캔", type: "qr" },
  collection: { label: "수집함", type: "collection" },
  night1: { label: "밤하늘 소원", type: "nightWish", person: "포이", wish: "2026년도 무사히 흘러가게 해주세요." },
  night2: { label: "밤하늘 소원 2", type: "nightWish", person: "하하하", wish: "전쟁이 끝나게 해주세요. 하하하" },
  nightOpen: { label: "별자리 열림", type: "nightOpen" },
  nightDetail: { label: "별자리 상세", type: "nightDetail" }
};

const phone = document.querySelector("#phone");
const screenList = document.querySelector("#screenList");
const cardGrid = document.querySelector("#cardGrid");
const sideButtons = document.querySelectorAll(".side-button");
let current = "intro";
let selectedSide = "front";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function button(className, text, action) {
  const node = el("button", className, text);
  node.type = "button";
  node.addEventListener("click", action);
  return node;
}

function setActiveButtons() {
  document.querySelectorAll("[data-screen]").forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === current);
  });
}

function nav(active) {
  const node = el("nav", "bottom-nav");
  [
    ["home", "☆", "홈"],
    ["collection", "▥", "수집함"],
    ["night1", "☆", "밤하늘"]
  ].forEach(([id, icon, label]) => {
    const item = button(`nav-item ${active === id ? "active" : ""}`, "", () => showScreen(id));
    item.innerHTML = `<span>${icon}</span>${label}`;
    node.appendChild(item);
  });
  return node;
}

function stars(parent, points) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "constellation-svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  const poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  poly.setAttribute("points", points.map((p) => `${p[0]},${p[1]}`).join(" "));
  poly.setAttribute("fill", "none");
  svg.appendChild(poly);
  parent.appendChild(svg);
  points.forEach(([x, y], index) => {
    const star = el("span", `constellation-star ${index % 3 === 0 ? "pink" : ""}`);
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    parent.appendChild(star);
  });
}

function renderIntro() {
  const screen = el("section", "screen light logo-screen");
  screen.append(el("div", "logo-star"), el("h1", "logo-title", "다로리"), el("p", "logo-subtitle", "다로리 하늘에 소원을 빌어보세요."));
  screen.appendChild(button("primary-button", "시작하기", () => showScreen("story1")));
  return screen;
}

function renderStory(data) {
  const screen = el("section", "screen story");
  const sky = el("div", "constellation-area");
  stars(sky, [[10, 30], [28, 22], [46, 36], [64, 24], [82, 34], [72, 48]]);
  screen.appendChild(sky);
  screen.append(el("div", "story-character"));
  const box = el("div", "story-box");
  box.append(el("span", "speaker", "루리"), el("p", "story-text", data.text));
  screen.appendChild(button("next-button", "다음 ›", () => showScreen(current === "story1" ? "story2" : "wish")));
  screen.appendChild(box);
  return screen;
}

function renderWish() {
  const screen = el("section", "screen light wish-screen");
  screen.append(el("h1", "wish-title", "당신의 소원은 무엇인가요?"));
  const input = el("input", "wish-input");
  input.placeholder = "30자 이내로 작성해주세요.";
  input.maxLength = 30;
  screen.append(input, button("primary-button", "소원 작성 완료", () => showScreen("home")));
  return screen;
}

function renderHome() {
  const screen = el("section", "screen light");
  const map = el("div", "star-map");
  map.append(el("div", "map-bg"), el("h1", "home-title", "다로리"));
  const summary = el("div", "summary-card");
  summary.innerHTML = "<small>별조각 카드 갯수</small><strong>★ 3개</strong>";
  const legend = el("div", "legend-card");
  legend.innerHTML = "★ 오늘의 별조각<br>★ 수집 완료<br>☆ 미발견 장소";
  map.append(summary, legend);
  [
    [55, 48, "50년 감나무집", true],
    [33, 62, "과거 막걸리 도가", false],
    [70, 55, "정자나무 쉼터", false],
    [28, 78, "빈집 1", false],
    [86, 39, "빈집 11", false],
    [42, 36, "빈집 5", false]
  ].forEach(([left, top, label, active]) => {
    const item = button(`map-node ${active ? "active" : ""}`, "", () => showScreen(active ? "night1" : "qr"));
    item.style.left = `${left}%`;
    item.style.top = `${top}%`;
    item.dataset.label = label;
    map.appendChild(item);
  });
  map.appendChild(button("qr-fab", "▦ QR 스캔하기", () => showScreen("qr")));
  screen.append(map, nav("home"));
  return screen;
}

function renderCollection() {
  const screen = el("section", "screen light");
  screen.append(el("h1", "collection-title", "나의 수집함"));
  const progress = el("div", "collection-progress");
  progress.innerHTML = "<span>획득한 카드</span><strong>5개</strong>";
  const fan = el("div", "card-fan");
  fan.append(el("div", "fan-card left"), el("div", "fan-card right"), el("div", "fan-card center"));
  const cta = button("primary-button dark-button collection-cta", "별자리 만들러가기", () => showScreen("night1"));
  screen.append(progress, fan, cta, nav("collection"));
  return screen;
}

function renderQr() {
  const screen = el("section", "screen night qr-screen");
  screen.appendChild(button("close-button", "", () => showScreen("home")));
  screen.append(el("div", "scanner"));
  const copy = el("div", "qr-copy");
  copy.append(el("h2", "", "빈집의 QR을 비춰주세요"), el("p", "", "스캔하면 이야기가 열립니다"));
  screen.append(copy, button("primary-button", "스캔 완료", () => showCard(0, "back")));
  return screen;
}

function renderNightWish(data) {
  const screen = el("section", "screen night");
  screen.append(el("h1", "night-title", "다로리 밤하늘"));
  const sky = el("div", "constellation-area");
  stars(sky, [[12, 24], [25, 30], [38, 26], [50, 36], [70, 30], [84, 42], [66, 46], [48, 58], [58, 72]]);
  screen.appendChild(sky);
  const sheet = el("div", "wish-sheet");
  sheet.append(el("h2", "", `${data.person}의 소원`), el("div", "wish-text", data.wish));
  screen.append(sheet, nav("night1"));
  return screen;
}

function renderNightOpen() {
  const screen = el("section", "screen night");
  screen.appendChild(button("close-button", "", () => showScreen("night1")));
  const sky = el("div", "constellation-area");
  sky.style.inset = "110px 32px 120px";
  stars(sky, [[14, 38], [34, 50], [48, 42], [67, 54], [84, 68], [56, 82]]);
  screen.appendChild(sky);
  const actions = el("div", "detail-actions");
  actions.append(button("round-action", "↗", () => {}), button("round-action", "⇩", () => {}));
  screen.appendChild(actions);
  return screen;
}

function renderNightDetail() {
  const screen = renderNightOpen();
  return screen;
}

function renderCard(index, side) {
  const card = cards[index];
  const screen = el("section", "screen card-page");
  screen.appendChild(button("back-button", "", () => showScreen("collection")));
  screen.append(el("div", "top-title", "별조각 카드 획득"));
  const content = el("div", "content");
  content.append(el("div", "eyebrow", "WISH · CARD"), el("h1", "page-heading", `${card.name} 카드 획득!`));
  const cardNode = el("article", `wish-card ${side}`);
  cardNode.append(el("div", "card-meta", "다이루리 · 04"), el("span", "card-star", "★"));
  if (side === "front") {
    cardNode.append(el("div"), el("strong", "", card.short));
  } else {
    cardNode.append(el("p", "", card.story), el("h2", "fortune-title", "오늘의 운세"), el("p", "", card.fortune));
  }
  content.appendChild(cardNode);
  screen.appendChild(content);
  const actions = el("div", "card-actions");
  actions.append(button("primary-button dark-button", "컬렉션에 추가", () => showScreen("collection")), button("secondary-button", "계속 탐험하기", () => showScreen("home")));
  screen.appendChild(actions);
  return screen;
}

function renderScreen(id) {
  const data = screens[id];
  if (!data) return renderIntro();
  if (data.type === "intro") return renderIntro();
  if (data.type === "story") return renderStory(data);
  if (data.type === "wish") return renderWish();
  if (data.type === "home") return renderHome();
  if (data.type === "qr") return renderQr();
  if (data.type === "collection") return renderCollection();
  if (data.type === "nightWish") return renderNightWish(data);
  if (data.type === "nightOpen") return renderNightOpen();
  if (data.type === "nightDetail") return renderNightDetail();
  return renderIntro();
}

function showScreen(id) {
  current = id;
  phone.replaceChildren(renderScreen(id));
  setActiveButtons();
}

function showCard(index, side = selectedSide) {
  selectedSide = side;
  current = `card-${index}-${side}`;
  sideButtons.forEach((buttonNode) => buttonNode.classList.toggle("active", buttonNode.dataset.side === selectedSide));
  phone.replaceChildren(renderCard(index, side));
  setActiveButtons();
}

Object.entries(screens).forEach(([id, screen]) => {
  const item = button("screen-button", screen.label, () => showScreen(id));
  item.dataset.screen = id;
  screenList.appendChild(item);
});

cards.forEach((card, index) => {
  const item = button("card-button", String(index + 1), () => showCard(index));
  item.title = card.name;
  cardGrid.appendChild(item);
});

sideButtons.forEach((buttonNode) => {
  buttonNode.addEventListener("click", () => {
    selectedSide = buttonNode.dataset.side;
    sideButtons.forEach((item) => item.classList.toggle("active", item === buttonNode));
    const match = current.match(/^card-(\d+)-/);
    if (match) showCard(Number(match[1]), selectedSide);
  });
});

showScreen("intro");
