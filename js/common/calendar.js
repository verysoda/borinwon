
var ns6 = document.getElementById

var Selected_Month;
var Selected_Year;
var Current_Date = new Date();
var Current_Month = Current_Date.getMonth();

var Days_in_Month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
/*         var Month_Label = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'); */

var Month_Label = new Array('1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월',
    '9월', '10월', '11월', '12월');


var Current_Year = Current_Date.getYear();
if (Current_Year < 1000)
    Current_Year += 1900


var Today = Current_Date.getDate();

function Header(Year, Month) {

    if (Month == 1) {
        Days_in_Month[1] = ((Year % 400 == 0) || ((Year % 4 == 0) && (Year % 100 != 0))) ? 29 : 28;
    }
    var Header_String = Month_Label[Month] + ' ' + Year;
    return Header_String;
}



function Make_Calendar(Year, Month) {
    var First_Date = new Date(Year, Month, 1);
    var Heading = Header(Year, Month);
    var First_Day = First_Date.getDay() + 1;
    if (((Days_in_Month[Month] == 31) && (First_Day >= 6)) ||
        ((Days_in_Month[Month] == 30) && (First_Day == 7))) {
        var Rows = 6;
    } else if ((Days_in_Month[Month] == 28) && (First_Day == 1)) {
        var Rows = 4;
    } else {
        var Rows = 5;
    }

    var HTML_String =
        '<table><tr><td><table>';

    HTML_String += '<tr><th colspan=7 style="font-size:50px">' + Heading + '</font></th></tr>';

    HTML_String +=
        '<tr><th >Sun</th><th >Mon</th><th >Tue</th><th >Wed</th><th >Thu</th><th >Fri</th><th >Sat</th></tr>';


    var Day_Counter = 1;
    var Loop_Counter = 1;
    for (var j = 1; j <= Rows; j++) {
        HTML_String += '<tr>';
        for (var i = 1; i < 8; i++) {
            if ((Loop_Counter >= First_Day) && (Day_Counter <= Days_in_Month[Month])) {
                if ((Day_Counter == Today) && (Year == Current_Year) && (Month == Current_Month)) {
                    HTML_String += '<td style="background-color:rgb(28, 171, 226);"><strong style="color:#ff0000;font-size:30px">' +
                        Day_Counter + '</strong></td>';
                } else {
                    HTML_String += '<td>' + Day_Counter + '</td>';
                }
                Day_Counter++;
            } else {
                HTML_String += '<td> </td>';
            }
            Loop_Counter++;
        }
        HTML_String += '</tr>';
    }
    HTML_String += '</table></td></tr></table>';
    cross_el = ns6 ? document.getElementById("Calendar") : document.all.Calendar
    cross_el.innerHTML = HTML_String;  //문자로 출력
}


function Check_Nums() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) { //event.keyCode : 키입력을 감지하여 함수를 처리. onKeyDown, onKeyUp은 Keycode값
        return false; //값을 반환
    }
}



function On_Year() {  //연도 4자리 출력
    var Year = document.when.year.value;
    if (Year.length == 4) {
        Selected_Month = document.when.month.selectedIndex;
        Selected_Year = Year;
        Make_Calendar(Selected_Year, Selected_Month);
    }
}

function On_Month() { //달 출력
    var Year = document.when.year.value;
    if (Year.length == 4) {
        Selected_Month = document.when.month.selectedIndex;
        Selected_Year = Year;
        Make_Calendar(Selected_Year, Selected_Month);
    } else {
        alert('Please enter a valid year.');
        document.when.year.focus();
    }
}


function Defaults() {
    if (!ns6)
        return
    var Mid_Screen = Math.round(document.body.clientWidth / 2);
    document.when.month.selectedIndex = Current_Month;
    document.when.year.value = Current_Year;
    Selected_Month = Current_Month;
    Selected_Year = Current_Year;
    Make_Calendar(Current_Year, Current_Month);
}


function Skip(Direction) {
    if (Direction == '+') {
        if (Selected_Month == 11) {
            Selected_Month = 0;
            Selected_Year++;
        } else {
            Selected_Month++;
        }
    } else {
        if (Selected_Month == 0) {
            Selected_Month = 11;
            Selected_Year--;
        } else {
            Selected_Month--;
        }
    }
    Make_Calendar(Selected_Year, Selected_Month);
    document.when.month.selectedIndex = Selected_Month;
    document.when.year.value = Selected_Year;
}
