function setCookie(name, value, expiredays) {
    //name 쿠키이름.
    //value 쿠기값. 경로(path)가 들어간다
    //expiredays 만료일.

    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);    //현재 시간 + 만료일

    document.cookie = name + "=" + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ";";
    //이스케이프 문자값 + 경로 + 오늘날짜를 문자열로 반환 + ;
}

function closeWin() {
    if (document.frm.event.checked) { //document의 체크박스에 체크 이벤트가 발생했을때
        //frm은 html에서 적용될 태그의 이름
        setCookie('memo', 'no', '60'); //60일간 쿠키 적용
    }
}