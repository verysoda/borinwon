function getCookie(name) { //쿠키가져오기. name(쿠키이름)
    var Found = false //Found는 어떤 조건이나 상태가 만족되거나, 변경되면 할당된 값을 변경하여 제어문을 제어하기 위해 쓰여짐. 여기에서는 값이 없는 false를 닫음.

    var start, end

    var i = 0

    //cookie 문자열 전체를 검색
    while (i <= document.cookie.length) { //i는 쿠키의 갯수보다 작거나 같을때까지 조건을 만족하는 동안 반복문 실행되도록

        start = i
        end = start + name.length //start에 생성된 쿠키의 갯수를 더해 end에 담아

        //name과 동일한 문자(쿠키)가 있다면
        if (document.cookie.substring(start, end) == name) {

            Found = true //값을 가지고 있으므로 true
            break //반복종료
        }

        i++
    }

    //name문자열을 cookie에서 찾았다면
    if (Found == true) {
        start = end + 1 //인덱스 번호와 갯수는 다르므로 1을 더함

        end = document.cookie.indexOf(";", start)

        if (end < start)
            end = document.cookie.length

        //name에 해당하는 값(value)을 추출하여 반환함.

        return document.cookie.substring(start, end)

    }

    //만약 값이 없다면
    return ''

}

function non_popup() {
    var eventCookie = getCookie("memo");

    if (eventCookie != "no") //closeWin()함수의 메서드 no라는 문자가 없다면
        window.open('./component/sub/popup.html', '_blank', 'width=350,height=525,top=50,left=150')
}
