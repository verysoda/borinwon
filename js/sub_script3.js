$(function () {
    $('#section2 #sec2_warp #sec2_right #sec2_right_wrap #sec2_content #sec2_table li>a span:nth-child(2)').hover(function(){
        $(this).animate({
            backgroundColor:'rgba(28,171,226,.5)'
        },300)
    },function(){
        $(this).animate({
            backgroundColor:'transparent'
        },300)
    })

});