<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>20313 우승연 생명과학 수행1</title>
  <link rel="stylesheet" href="style.css">
  
  
  <script src="script.js"></script>
</head>
<body>

  <!-- 제목 -->
  <div class="title-panel">
    <h1>10년 뒤 당신이 2형당뇨에 걸릴 확률은?</h1>
  </div>

  <!-- 설명 -->
  <div class="desc-panel">
    <p>
      이 웹은 생활습관과 유전적 요인을 기반으로 <br>
      10년 후 당뇨 위험을 예측하는 시뮬레이션입니다.<br>
      제작: 20313우승연 / 목적: 학습 및 연구용
      <br><br> 학생이 만든 학습용 웹입니다. 웹에러나 문장오타가 있어도 눈감아주세요..!
    </p>
  </div>

  <!-- 입력 패널 -->
  <div class="input-container">

    <!-- 유전적 요인 -->
<div class="panel">
  <h2>유전적 요인</h2>

  <label>나이</label>
  <input type="number" id="age" placeholder="예: 25">

  <label>가족력</label>
  <select id="family">
    <option value="0">없음</option>
    <option value="1">부모 중 1명</option>
    <option value="2">부모 2명 / 형제</option>
  </select>

  <label>유전적 취약성</label>
  <select id="genetic">
    <option value="0">낮음</option>
    <option value="1">보통</option>
    <option value="2">높음</option>
  </select>
</div>


<!-- 환경적 요인 -->
<div class="panel">
  <h2>환경적 요인</h2>

  <label>키 (cm)</label>
  <input type="number" id="height">

  <label>몸무게 (kg)</label>
  <input type="number" id="weight">

  <p>BMI: <span id="bmi">-</span></p>

  <label>운동량</label>
  <input type="range" id="exercise" min="0" max="10">

  <label>당 섭취량</label>
  <input type="range" id="sugar" min="0" max="10">

  <label>흡연 여부</label>
  <select id="smoking">
    <option value="0">비흡연</option>
    <option value="1">가끔</option>
    <option value="2">흡연</option>
  </select>

  <label>수면 시간 (시간)</label>
  <input type="number" id="sleep" placeholder="예: 7">

  <label>스트레스</label>
  <input type="range" id="stress" min="0" max="10">
</div>

  </div>
  
  <button class="calc-btn" onclick="openResult()">계산하기</button>
  
  <button class="info-btn" onclick="openInfo()">설명보기</button>

<!-- 블러 배경 -->
<div id="overlay" class="overlay hidden"></div>

<!-- 결과 패널 -->
<div id="resultModal" class="modal hidden">
  <h2>분석 결과</h2>

  <div id="analysis"></div>

  <h3 id="finalResult"></h3>

  <button onclick="closeResult()">닫기</button>
</div>

  <div id="infoModal" class="modal hidden">
  <h2>설명</h2>

  <div class="info-content">
    <p>
      이 웹은 유전적 요인과 생활습관이 함께 작용하여 <br>
      <strong>제2형 당뇨병</strong> 발생 위험을 결정한다는 연구를 바탕으로 제작되었습니다.
    </p>

    <p>
      • 제2형 당뇨병은 약 <b>30~70%의 유전성</b>을 가지는 질환입니다.<br>
      • 일란성 쌍둥이는 발병 일치율이 매우 높지만,<br>
      환경에 따라 결과가 달라질 수 있습니다.
    </p>

    <p>
      • 부모가 당뇨병이 있을 경우 자녀의 발병 가능성은 약 <b>30%</b>입니다.<br>
      • 하지만 건강한 생활습관으로 위험을 낮출 수 있습니다.
    </p>

    <p>
      => 즉, 유전과 환경은 함께 작용하며<br>
      생활습관이 매우 중요한 역할을 합니다.
      <br> <b>그러니 핑계 대지말고, 생활습관을 똑바로 합시다.</b>
     
    </p>

    <p class="small">
      참고 논문: 유전과 생활환경의 상호작용이 제2형 당뇨병 발생에 미치는 영향
    </p>

    <a href="https://www.dbpia.co.kr/pdf/cpViewer?nodeId=T15054502" target="_blank">
      논문 보러가기
    </a>
  </div>

  <button onclick="closeInfo()">닫기</button>
</div>
</body> 
</html>
