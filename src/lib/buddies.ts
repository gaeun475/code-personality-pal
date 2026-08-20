import python from "@/assets/buddy-python.png";
import javascript from "@/assets/buddy-javascript.png";
import cpp from "@/assets/buddy-cpp.png";
import java from "@/assets/buddy-java.png";
import scratch from "@/assets/buddy-scratch.png";
import htmlcss from "@/assets/buddy-htmlcss.png";

export type BuddyKey = "python" | "javascript" | "cpp" | "java" | "scratch" | "htmlcss";

export type Buddy = {
  key: BuddyKey;
  name: string;
  tagline: string;
  emoji: string;
  image: string;
  /** design-system token prefix, e.g. "mint" -> bg-mint */
  tone: "mint" | "sun" | "sky" | "peach" | "grape" | "bubble";
  intro: string;
  traits: string[];
  activities: string[];
  friends: BuddyKey[];
};

export const BUDDIES: Record<BuddyKey, Buddy> = {
  python: {
    key: "python",
    name: "PYTHON",
    tagline: "차분한 아이디어 해결사",
    emoji: "🌿",
    image: python,
    tone: "mint",
    intro:
      "복잡한 일도 조용히 한 걸음씩 정리하는 타입! 서두르지 않고 가장 깔끔한 방법을 찾아내는 우리 팀의 브레인이야.",
    traits: ["차분하고 침착해요", "정리정돈을 잘해요", "간단한 방법을 좋아해요", "친구를 잘 도와줘요"],
    activities: ["간단한 챗봇 만들기", "데이터로 그래프 그리기", "귀찮은 일 자동화하기"],
    friends: ["javascript", "htmlcss"],
  },
  javascript: {
    key: "javascript",
    name: "JAVASCRIPT",
    tagline: "활발한 아이디어 메이커",
    emoji: "⭐",
    image: javascript,
    tone: "sun",
    intro:
      "생각나면 바로 해보는 에너지 폭발 타입! 움직이고 반짝이는 걸 만들 때 제일 신나 하는 분위기 메이커야.",
    traits: ["호기심이 아주 많아요", "즉흥적이고 빨라요", "친구들과 노는 걸 좋아해요", "새로운 걸 겁내지 않아요"],
    activities: ["움직이는 웹 게임 만들기", "버튼 누르면 반응하는 페이지", "재미있는 애니메이션 효과"],
    friends: ["htmlcss", "python"],
  },
  cpp: {
    key: "cpp",
    name: "C++",
    tagline: "도전적인 문제 해결사",
    emoji: "🛡️",
    image: cpp,
    tone: "sky",
    intro:
      "어려울수록 눈이 반짝! 남들이 포기한 문제를 끝까지 붙잡고 결국 풀어내는 도전왕이야.",
    traits: ["끈기가 대단해요", "승부욕이 있어요", "빠른 걸 좋아해요", "원리를 파고들어요"],
    activities: ["게임 만들기", "알고리즘 퍼즐 풀기", "로봇 움직이게 하기"],
    friends: ["java", "python"],
  },
  java: {
    key: "java",
    name: "JAVA",
    tagline: "꼼꼼한 계획형",
    emoji: "📋",
    image: java,
    tone: "peach",
    intro:
      "시작 전에 계획부터 세우는 믿음직한 타입! 규칙을 잘 지키고 큰 프로젝트도 무너지지 않게 튼튼히 쌓아 올려.",
    traits: ["계획 세우기를 좋아해요", "약속을 잘 지켜요", "실수가 적어요", "책임감이 강해요"],
    activities: ["앱 만들기", "게시판 같은 서비스 설계", "친구들과 팀 프로젝트"],
    friends: ["cpp", "python"],
  },
  scratch: {
    key: "scratch",
    name: "SCRATCH",
    tagline: "창의적인 창작자",
    emoji: "🎨",
    image: scratch,
    tone: "grape",
    intro:
      "상상한 걸 바로 이야기로 만드는 타입! 블록을 톡톡 붙이며 세상에 하나뿐인 작품을 뚝딱 만들어내.",
    traits: ["상상력이 풍부해요", "이야기 만들기를 좋아해요", "손으로 만드는 걸 즐겨요", "표현이 자유로워요"],
    activities: ["나만의 미니게임 만들기", "움직이는 동화 만들기", "친구 소개 애니메이션"],
    friends: ["htmlcss", "javascript"],
  },
  htmlcss: {
    key: "htmlcss",
    name: "HTML / CSS",
    tagline: "디자인 메이커",
    emoji: "✨",
    image: htmlcss,
    tone: "bubble",
    intro:
      "예쁜 걸 그냥 못 지나치는 감각파! 색과 모양을 골라 사람들이 보고 싶어지는 화면을 만들어 내는 친구야.",
    traits: ["감각이 좋아요", "색을 잘 골라요", "꾸미기를 좋아해요", "보는 사람을 배려해요"],
    activities: ["나만의 홈페이지 꾸미기", "포스터 같은 웹페이지", "예쁜 카드 디자인"],
    friends: ["javascript", "scratch"],
  },
};

export const BUDDY_LIST = Object.values(BUDDIES);

export type Question = {
  q: string;
  emoji: string;
  options: { label: string; emoji: string; key: BuddyKey }[];
};

export const QUESTIONS: Question[] = [
  {
    emoji: "🎒",
    q: "방학 첫날 아침! 눈을 뜨자마자 뭐 할까?",
    options: [
      { label: "오늘 할 일 목록부터 쫙 적기", emoji: "📝", key: "java" },
      { label: "일단 나가서 놀고 보기", emoji: "🛴", key: "javascript" },
      { label: "만들고 싶던 걸 그리기 시작", emoji: "🖍️", key: "scratch" },
      { label: "조용히 누워서 계획 생각하기", emoji: "💭", key: "python" },
    ],
  },
  {
    emoji: "🧩",
    q: "엄청 어려운 퍼즐을 만났어. 나는?",
    options: [
      { label: "될 때까지 끝까지 도전!", emoji: "🔥", key: "cpp" },
      { label: "더 쉬운 방법이 있는지 생각", emoji: "🧠", key: "python" },
      { label: "친구랑 같이 풀면서 수다", emoji: "🗣️", key: "javascript" },
      { label: "순서를 정해서 차근차근", emoji: "📐", key: "java" },
    ],
  },
  {
    emoji: "🎂",
    q: "친구 생일 선물, 어떤 걸 준비할래?",
    options: [
      { label: "직접 만든 손편지랑 작품", emoji: "💌", key: "scratch" },
      { label: "예쁘게 포장까지 완벽하게", emoji: "🎀", key: "htmlcss" },
      { label: "깜짝 이벤트를 기획!", emoji: "🎉", key: "javascript" },
      { label: "필요한 걸 미리 물어보고 준비", emoji: "🤔", key: "python" },
    ],
  },
  {
    emoji: "🏫",
    q: "모둠 활동을 시작했어. 내 역할은?",
    options: [
      { label: "역할 나누고 일정 관리", emoji: "📅", key: "java" },
      { label: "아이디어 마구 던지기", emoji: "💡", key: "javascript" },
      { label: "발표 자료 예쁘게 꾸미기", emoji: "🎨", key: "htmlcss" },
      { label: "제일 어려운 부분 맡기", emoji: "💪", key: "cpp" },
    ],
  },
  {
    emoji: "🎮",
    q: "새 게임을 시작했다! 첫 30분은?",
    options: [
      { label: "캐릭터 꾸미기에 다 씀", emoji: "👗", key: "htmlcss" },
      { label: "최고 난이도부터 도전", emoji: "⚔️", key: "cpp" },
      { label: "설명서 먼저 정독", emoji: "📖", key: "java" },
      { label: "여기저기 눌러보며 탐험", emoji: "🧭", key: "javascript" },
    ],
  },
  {
    emoji: "🌧️",
    q: "비 오는 주말, 집에서 하고 싶은 건?",
    options: [
      { label: "만들기·그리기 하며 놀기", emoji: "✂️", key: "scratch" },
      { label: "책 읽으며 조용히 쉬기", emoji: "📚", key: "python" },
      { label: "방 인테리어 바꾸기", emoji: "🛏️", key: "htmlcss" },
      { label: "게임 실력 갈고닦기", emoji: "🕹️", key: "cpp" },
    ],
  },
  {
    emoji: "🍕",
    q: "친구들과 메뉴를 못 정하고 있어!",
    options: [
      { label: "\"그냥 내가 정할게!\" 하고 결정", emoji: "✋", key: "cpp" },
      { label: "다들 좋아할 메뉴를 고민", emoji: "💗", key: "python" },
      { label: "재미있는 투표를 만들기", emoji: "🗳️", key: "javascript" },
      { label: "리뷰랑 가격 먼저 확인", emoji: "🔍", key: "java" },
    ],
  },
  {
    emoji: "📱",
    q: "만약 앱을 하나 만들 수 있다면?",
    options: [
      { label: "내 캐릭터가 사는 세계", emoji: "🌈", key: "scratch" },
      { label: "숙제 자동 정리 도우미", emoji: "🤖", key: "python" },
      { label: "친구랑 겨루는 대전 게임", emoji: "🏆", key: "cpp" },
      { label: "예쁜 다이어리 꾸미기 앱", emoji: "📔", key: "htmlcss" },
    ],
  },
  {
    emoji: "🧪",
    q: "실수로 실험을 망쳤을 때 내 반응은?",
    options: [
      { label: "\"오히려 좋아!\" 새 아이디어로", emoji: "😆", key: "javascript" },
      { label: "왜 그런지 원인부터 분석", emoji: "🔬", key: "python" },
      { label: "처음부터 다시 정확하게", emoji: "🔁", key: "java" },
      { label: "더 어려운 방법으로 재도전", emoji: "🚀", key: "cpp" },
    ],
  },
  {
    emoji: "🎤",
    q: "학교 축제! 내가 맡고 싶은 건?",
    options: [
      { label: "무대에서 신나게 놀기", emoji: "🎶", key: "javascript" },
      { label: "포스터랑 부스 꾸미기", emoji: "🖼️", key: "htmlcss" },
      { label: "공연 스토리 만들기", emoji: "📜", key: "scratch" },
      { label: "뒤에서 진행 챙기기", emoji: "🧾", key: "java" },
    ],
  },
  {
    emoji: "🧸",
    q: "내 책상은 보통 어떤 모습?",
    options: [
      { label: "칸칸이 정리 완벽!", emoji: "🗂️", key: "java" },
      { label: "필요한 것만 딱 심플하게", emoji: "🕊️", key: "python" },
      { label: "스티커랑 소품으로 가득", emoji: "🌟", key: "scratch" },
      { label: "예쁜 조명이랑 색 맞춤", emoji: "💡", key: "htmlcss" },
    ],
  },
  {
    emoji: "🗺️",
    q: "새로운 곳으로 여행을 간다면?",
    options: [
      { label: "지도 없이 모험 떠나기", emoji: "🧗", key: "cpp" },
      { label: "사진 예쁘게 남기기", emoji: "📸", key: "htmlcss" },
      { label: "하루하루 계획표 짜기", emoji: "🗓️", key: "java" },
      { label: "즉흥으로 친구들과 웃기", emoji: "🎈", key: "javascript" },
    ],
  },
];

export function scoreAnswers(answers: BuddyKey[]): BuddyKey {
  const tally = {} as Record<BuddyKey, number>;
  (Object.keys(BUDDIES) as BuddyKey[]).forEach((k) => (tally[k] = 0));
  answers.forEach((a) => (tally[a] += 1));
  const order: BuddyKey[] = ["python", "javascript", "cpp", "java", "scratch", "htmlcss"];
  let best: BuddyKey = "python";
  for (const k of order) {
    if (tally[k] > tally[best]) best = k;
  }
  return best;
}
