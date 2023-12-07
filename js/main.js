  // 현재 날짜와 시간을 업데이트하는 함수
  function updateCurrentDateTime() {
    var currentDateTimeElement = document.getElementById('current-date-time');
    var now = new Date();

    // 날짜 포맷 설정
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    var dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][now.getDay()];
    
    // 시간 포맷 설정
    var hours = now.getHours();
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // 현재 날짜와 시간을 표시
    var formattedDateTime = `${year}-${month}-${day} (${dayOfWeek}) ${hours}:${minutes}:${seconds} ${ampm}`;
    currentDateTimeElement.innerHTML = formattedDateTime;
  }

  // 페이지가 로드될 때 한 번 날짜와 시간을 업데이트하고,
  // 이후 1초마다 업데이트를 반복
  updateCurrentDateTime();
  setInterval(updateCurrentDateTime, 1000);



  //탭 메뉴

  // 초기에 첫 번째 탭 활성화
  document.getElementById('tab1').classList.add('active');

  function changeTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
  }


  
  //popup_portfolio 팝업
  function openPopup() {
    document.getElementById('popup_portfolio').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup_portfolio').style.display = 'none';
  }

  //체크리스트
  function updateStatus(itemId) {
    var checkbox = document.getElementById(itemId);
    var label = document.querySelector('label[for="' + itemId + '"]');

    if (checkbox.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  }

  function addItem() {
    var newItemId = 'item' + (document.querySelectorAll('.checklist-item').length + 1);
    var newItem = document.createElement('div');
    newItem.className = 'checklist-item';
    newItem.innerHTML = `
      <input type="checkbox" id="${newItemId}" onchange="updateStatus('${newItemId}')">
      <label for="${newItemId}">New Task</label>
    `;
    document.getElementById('checklist-container').insertBefore(newItem, document.getElementById('add-btn'));
  }

  function removeItem() {
    var checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkbox.parentElement.remove();
      }
    });
  }