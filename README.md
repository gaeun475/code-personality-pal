# Coding Friend Finder

MBTI처럼 질문에 답하면 나와 가장 잘 어울리는 프로그래밍 언어를 찾아주는 귀엽고 재미있는 성격 테스트 웹사이트를 만들어줘.

타깃은 초등학생 고학년~중학생이고 남녀 모두 좋아할 수 있는 디자인으로 만들어줘.

디자인 컨셉

전체적으로 Cute + Playful + Modern + Coding 느낌.

코딩 교육 사이트처럼 딱딱하거나 전문적으로 보이지 않고, 캐릭터 수집 게임과 MBTI 테스트가 섞인 느낌이어야 해.

파스텔톤의 민트, 하늘색, 노랑, 보라, 핑크 등을 사용하고, 둥근 카드와 버튼, 부드러운 그림자, 별/스티커/반짝이 등의 귀여운 디테일을 사용해줘.

캐릭터가 가장 중요해

프로그래밍 언어마다 서로 다른 동물이나 사물을 캐릭터로 만들지 마.

예:

Python = 뱀 ❌

JavaScript = 번개 ❌

C++ = 로켓 ❌

Java = 커피 ❌

대신 모든 프로그래밍 언어가 같은 종류의 귀여운 "코딩 친구" 캐릭터가 되게 해줘.

모든 캐릭터는 비슷한 동글동글한 몸, 큰 눈, 짧은 팔다리, 같은 그림체를 공유하고, 언어마다 색상 / 표정 / 포즈 / 작은 소품으로 개성을 표현해줘.

캐릭터들을 한 화면에 모았을 때 하나의 게임에 등장하는 귀여운 친구들처럼 통일감이 있어야 한다.

너무 유아용이거나 지나치게 여성적/남성적인 스타일은 피하고, 초등학생과 중학생 모두 좋아할 만한 캐릭터 디자인으로 만들어줘.

캐릭터 유형

Python — 민트색 — 차분한 아이디어 해결사

JavaScript — 노란색 — 활발한 아이디어 메이커

C++ — 파란색 — 도전적인 문제 해결사

Java — 주황색 — 꼼꼼한 계획형

Scratch — 보라/핑크 — 창의적인 창작자

HTML/CSS — 하늘색/보라 — 디자인 메이커

페이지 구성

1. 메인 페이지

"나는 어떤 코딩 친구일까?"

"몇 가지 질문에 답하고 나와 꼭 닮은 코딩 친구를 찾아보자!"

귀여운 코딩 친구들이 함께 등장하고
"내 코딩 친구 찾기 ✨" 버튼을 배치해줘.

2. 테스트 페이지

MBTI처럼 한 번에 한 질문을 보여주고 3 / 12와 진행률을 표시해줘.

질문은 코딩 지식이 없어도 답할 수 있는 재미있는 상황형 질문으로 만들어줘.

선택지는 큰 카드 형태로 만들고 클릭하면 부드러운 애니메이션이 나오게 해줘.

3. 결과 페이지

마지막 질문 후 짧은 분석 애니메이션을 보여준 다음 결과 캐릭터를 크게 등장시켜줘.

예:

"✨ 나의 코딩 친구 발견!"

PYTHON

"차분한 아이디어 해결사"

캐릭터와 함께 성격 설명, 특징, 잘 어울리는 코딩 활동, 잘 맞는 다른 언어를 보여줘.

결과 페이지는 새로운 게임 캐릭터를 발견한 것 같은 느낌으로 만들어줘.

결과 저장/공유/다시 테스트하기 버튼도 추가해줘.

중요

모바일에서 가장 예쁘게 보이는 mobile-first responsive design으로 만들어줘.

첫 번째 버전에서는 디자인과 캐릭터의 귀여움, 전체적인 통일감을 가장 중요하게 생각해줘.

특히 캐릭터들이 서로 다른 동물이나 사물처럼 보이지 않고, 같은 세계관의 친구들처럼 보이는 것을 최우선으로 해줘.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://code-personality-pal.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/015777bc-fa14-4ca0-b15d-8c0e20432e60).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
