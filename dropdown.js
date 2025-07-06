// dropdown.js 파일에서 script.js와의 충돌을 방지하기 위해 코드를 완전히 비활성화합니다.
// script.js에 모든 드롭다운 기능을 통합하여 처리합니다.
console.log("dropdown.js 로드됨 - 드롭다운 기능은 script.js에서 처리됩니다.");
// (이 파일에서는 아무런 동작도 하지 않음)

let isDropdownPause = false;

function setTopButtonsDisabled(disabled) {
  document.getElementById('startBtn').disabled = disabled;
  document.getElementById('pauseBtn').disabled = disabled;
  document.getElementById('stopBtn').disabled = disabled;
}

function toggleDropdown(event) {
  if (sentenceList.style.display === 'block') {
    sentenceList.style.display = 'none';
    if (isDropdownPause) {
      togglePause();
      isDropdownPause = false;
      setTopButtonsDisabled(false);
    }
  } else {
    populateSentenceList();
    sentenceList.style.display = 'block';
    setTimeout(() => {
      const activeItem = sentenceList.querySelector(`.sentence-item:nth-child(${sentenceIndex + 1})`);
      if (activeItem) activeItem.scrollIntoView({ behavior: 'auto', block: 'center' });
    }, 100);
    if (isGameRunning && !isGamePaused) {
      togglePause();
      isDropdownPause = true;
      setTopButtonsDisabled(true);
    }
  }
}
