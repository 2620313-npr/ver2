// 지금은 구조만 만들었으니까 비워둬도 됨
console.log("UI 준비 완료");

function updateBMI() {
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);

  if (height && weight) {
    const h = height / 100;
    const bmi = weight / (h * h);
    document.getElementById("bmi").innerText = bmi.toFixed(1);
  }
}

// 입력할 때마다 자동 계산
document.getElementById("height").addEventListener("input", updateBMI);
document.getElementById("weight").addEventListener("input", updateBMI);

function openResult() {
  const analysis = document.getElementById("analysis");
  analysis.innerHTML = "";

  let score = 0;

  const age = Number(document.getElementById("age").value);
  const family = Number(document.getElementById("family").value);
  const genetic = Number(document.getElementById("genetic").value);

  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const exercise = Number(document.getElementById("exercise").value);
  const sugar = Number(document.getElementById("sugar").value);
  const smoking = Number(document.getElementById("smoking").value);
  const sleep = Number(document.getElementById("sleep").value);
  const stress = Number(document.getElementById("stress").value);

  // BMI 계산
  const bmi = weight / ((height/100) ** 2);

  function addTag(text, isGood) {
    const div = document.createElement("div");
    div.className = "tag " + (isGood ? "good" : "bad");
    div.innerText = text;
    analysis.appendChild(div);
  }

  // 유전
  if (age > 40) {
    score += 15;
    addTag("나이: 위험 증가", false);
  } else {
    addTag("나이: 양호", true);
  }

  if (family > 0) {
    score += 20;
    addTag("가족력 있음", false);
  } else {
    addTag("가족력 없음", true);
  }

  if (genetic === 2) {
    score += 15;
    addTag("유전 취약성 높음", false);
  } else {
    addTag("유전 요인 보통/낮음", true);
  }

  // 환경
  if (bmi > 25) {
    score += 20;
    addTag("BMI 높음", false);
  } else {
    addTag("BMI 정상", true);
  }

  if (exercise < 4) {
    score += 15;
    addTag("운동 부족", false);
  } else {
    addTag("운동 충분", true);
  }

  if (sugar > 6) {
    score += 15;
    addTag("당 섭취 많음", false);
  } else {
    addTag("당 섭취 적절", true);
  }

  if (smoking > 0) {
    score += 10;
    addTag("흡연", false);
  } else {
    addTag("비흡연", true);
  }

  if (sleep < 6) {
    score += 10;
    addTag("수면 부족", false);
  } else {
    addTag("수면 충분", true);
  }

  if (stress > 6) {
    score += 10;
    addTag("스트레스 높음", false);
  } else {
    addTag("스트레스 낮음", true);
  }

  // 최종 확률
  let risk = Math.min(100, score);

  document.getElementById("finalResult").innerText =
    "결과치: " + risk + "% 입니다.";

  // 보여주기
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("resultModal").classList.remove("hidden");
}

function closeResult() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("resultModal").classList.add("hidden");
}

function openInfo() {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("infoModal").classList.remove("hidden");
}

function closeInfo() {
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("infoModal").classList.add("hidden");
}
