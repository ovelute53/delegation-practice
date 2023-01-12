const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// 네비게이션에게 이벤트를 건다.
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.

const visualImage = getNode(".visual img");

const navigation = getNode(".navigation");
// const list = getNodes(".navigation > li");

function makeArray(arrayLike) {
  return Array.from(arrayLike);
}

function handler(e) {
  let target = e.target.closest("li");
  // closest 가장 근접한 무언가를 찾는다. 여기서는 li를 지정해주었다.`
  if (!target) return;
  // 이미지 외에 빈 공간을 클릭했읋 때 null 값이 나오는 것을 없앤다.

  let list = makeArray(navigation.children);
  // 네비게이션의 자식요소들을 makeArray를 사용하여 배열의 형태로 만든다

  let index = attr(target, "data-index");
  // 선택한 대상의 data-index를 가져오기

  list.forEach((item) => removeClass(item, "is-active"));
  // 내가 선택하지 않은 li에게 is-active를 제거한다.
  // makeArray로 유사배열을 진짜배열로 만들어 준 다음에 forEach로 해당 배열을 콕 집어서 배열의 요소 각각에 removeClass를 적용시켜준다.

  attr(visualImage, "src", `./assets/part01/visual${index}.jpg`);
  // 비주얼 안에있는 이미지를 attr을 이용해서 가져온다
  // 이미지의 src 속성에 접근한다
  // set 방식을 이용해서 src의 값을 index로 바꾼다

  attr(visualImage, "alt", data[index - 1].alt);
  // 배열은 0부터 시작하고 index는 1부터 시작하도록 해놔서 -1로 맞춰준다

  console.log(index);

  addClass(target, "is-active");
  // 내가 선택한 li에게 is-active를 넣어준다.
}

navigation.addEventListener("click", handler);
