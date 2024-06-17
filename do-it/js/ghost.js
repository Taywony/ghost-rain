function GHOST() {
  function createGhost() {
    // id가 ghost인 ghost div 박스 생성
    const ghostElement = document.createElement("div");
    ghostElement.className = "ghost";

    // bg 자식요소로 추가
    document.getElementsByClassName("bg")[0].appendChild(ghostElement);
    let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);

    ghostElement.style.position = "absolute";
    ghostElement.style.top = "0px";
    ghostElement.style.left = randomLeft + "px";
    ghostElement.style.width = GHOST_WIDTH + "px";
    ghostElement.style.height = GHOST_HEIGHT + "px";
    ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

    setInterval(function () {
      //고스트 요소에 접근, 탑위치 넘버로 가져오기
      let ghostTop = ghostElement.style.top;
      // 탑위치에서 탑위치를 1px씩 내려오게 한다
      let ghostTopNum = Number(ghostTop.split("px")[0]) + 10;

      // 고스트가 죽는 조건

      // ghost 레프트 숫자형
      let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
      let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

      if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_WIDTH)) {
        if (
          ghostLeftNum < heroLeftNum &&
          heroLeftNum < ghostLeftNum + GHOST_HEIGHT
        ) {
          killGhost(ghostElement);
          return;
        }
      }

      // 아래가면 멈추게 하기
      if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
        ghostElement.remove();
        return;
      }

      ghostElement.style.top = ghostTopNum + "px";
    }, 100);
  }

  function killGhost(ghostElement) {
    ghostElement.style.backgroundPosition = "-45px 0px";

    setTimeout(function () {
      ghostElement.remove();
    }, 3000);
  }

  function randomRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  // 해당 초마다 유령 소환
  setInterval(createGhost, 3000);
}
//스타트버튼을 클릭해야 고스트 생성
START.addEventListener("click", GHOST);
