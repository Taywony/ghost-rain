document.addEventListener("keydown", function (keyEvent) {
  // 키 누르면 발생하는 동작

  //현재 히어로 위치
  // css값을 가져오기 위해서 getComputedStyle 메소드 사용
  const heroGps = getComputedStyle(heroElement).left;
  console.log(heroGps);

  //현재 히어로 위치 숫자타입으로 변환해서 저장
  let HERO_LEFT = Number(heroGps.split("px")[0]);
  console.log(HERO_LEFT);
  console.log(typeof HERO_LEFT);

  //용사의 Left가 0보다 작거나 765보다 크면 더이상 넘어가지 못하게 한다
  if (
    (HERO_LEFT <= 0 && keyEvent.keyCode === 37) ||
    (HERO_LEFT >= 760 && keyEvent.keyCode === 39)
  ) {
    return;
  }

  // 왼쪽 오른쪽 누를때마다 히어로 위치 이동
  if (keyEvent.keyCode === 37) {
    HERO_LEFT -= 20;
    heroElement.style.left = HERO_LEFT + "px";
    heroElement.className = "left";
  } else if (keyEvent.keyCode === 39) {
    HERO_LEFT += 20;
    heroElement.style.left = HERO_LEFT + "px";
    heroElement.className = "right";
  }

  // 엔터 키코드 : 13
  // 스페이스 키코드 : 32
  // 왼쪽키 키코드 : 37
  // 오른쪽 키코드 : 39
});

// keyup 했을때는 캐릭터가 정면보도록
document.addEventListener("keyup", function () {
  heroElement.className = "";
});
