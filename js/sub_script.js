$(function () {

    // sub1 facilities, finance script



    // sub1 facilities tab menu
    var info = $('#sec2_floor_info > div > .depth_text');
    var sImg = $('#sec2_floor_info > div > ul > li >ul > li > a');

    $('ul.on').prev('div.depth_text').css('background-color', 'rgba(28,171,226,.5)')

    info.click(function () {
        $('#sec2_floor_info > div > ul').removeClass('on').animate({
            height: 0
        }, 300)
        $(this).next('ul').addClass('on').animate({
            height: '300px',
        }, 300)

        $('div.depth_text').css('background-color','#fff');
        $('ul.on').prev('div.depth_text').css('background-color', 'rgba(28,171,226,.5)')
    })


    sImg.hover(function () {
        $(this).parents('div').find('ul.on > li > img.pimg')
            .attr('src', $(this).find('img').attr('src').replace('s.jpg', '.jpg'))
    }, function () {});

    


    // sub1 finance
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
