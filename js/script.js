$(function () {

  //header notice text href
  $('#header_button_wrap > h3 > a').attr('href', '../../component/sub6/notice.html');

  // 해더 드롭 메뉴 -------------------------------------------
  $('#main_menu > li').mouseenter(function () {
    $('#main_menu').css('overflow', 'visible');
    $(this).find('.sub_menu').stop().animate({
      opacity: 1
    }, 300)
  })

  $('#main_menu > li').mouseleave(function () {
    $('#main_menu').css('overflow', 'hidden')
    $(this).find('.sub_menu').stop().animate({
      opacity: 0
    }, 200)
  })


  // 스크롤 위치에 따라 해더 투명도 조절 -------------------------------------------
  $(window).scroll(function () {
    if (scrollY >= 500) {
      $('header').css('background-color', "rgba(243, 243, 243, 1)");
    } else {
      $('header').css('background-color', "rgba(243, 243, 243, .3)")
    }
  })

  //quick menu-------------------------------------------
  // 초기 위치 재설정
  $('aside #aside_button2').css({ 'top': '-2px', 'right': '75px' });
  $('aside #aside_button1').css({ 'top': '-2px', 'right': '75px' });

  $('aside #aside_button1').click(function () {
    $(this).css({ 'display': 'none', 'top': "537px" });
    $('aside #aside_button2').css('display', 'block')
    $('aside #aside_button2').stop().animate({
      top: '537px'
    }, 500);
    $('aside #aside_wrap #aside_banner #aside_menu').stop().animate({
      height: '540px',
    }, 500);
  })

  $('aside #aside_button2').click(function () {
    $(this).css({ 'display': 'none', 'top': '-2px' });
    $('aside #aside_button1').css('display', 'block');
    $('aside #aside_button1').stop().animate({
      top: '-2px'
    }, 500);
    $('aside #aside_wrap #aside_banner #aside_menu').stop().animate({
      height: '0',
    }, 500);
  })

  // quick menu icon hover-------------------------------------------------
  $('aside #aside_item1 .aside_icon').hover(function () {
    $(this).find('img:nth-child(2)').stop().animate({opacity:0,},300);
    $(this).find('img:nth-child(1)').stop().animate({opacity:1,},300);

  }, function () {
    $(this).find('img:nth-child(2)').stop().animate({opacity:1,},300);
    $(this).find('img:nth-child(1)').stop().animate({opacity:0,},300);

  });
  

  //header slide button slider
  $('#contents .swiper1 .swiper-slide > div > div:nth-child(2) a').hover(function () {
    $('#contents .swiper1 .swiper-wrapper>div > div > div:nth-child(3)').stop().animate({
      width: 430
    }, 300)
    $('.swiper1 .swiper-wrapper>div #slide_text2 > div:nth-child(3)').stop().animate({
      width: 350
    }, 300);
    $('.swiper1 .swiper-wrapper>div #slide_text3 > div:nth-child(3)').stop().animate({
      width: 400
    }, 300);
  }, function () {
    $('#contents .swiper1 .swiper-wrapper>div > div > div:nth-child(3)').stop().animate({
      width: 0
    }, 300)
    $('.swiper1 .swiper-wrapper>div #slide_text2 > div:nth-child(3)').stop().animate({
      width: 0
    }, 300);
    $('.swiper1 .swiper-wrapper>div #slide_text3 > div:nth-child(3)').stop().animate({
      width: 0
    }, 300);
  })


  //section4 gallery hover-------------------------------------------
  $('#section4 #gallery_warp .gallery_item').hover(function () {
    $(this).find('a > .gallery_text > div').stop().animate({
      color: '#fff',
    }, 300)
  }, function () {
    $(this).find('.gallery_text > div').stop().animate({
      color: 'rgb(28, 171, 226);',

    }, 300)
  })

  //section5 icon hover-------------------------------------------
  $('#section5 #item_wrap1 .icon img').hover(function () {
    $(this).css('opacity', 0)
      .attr('src', $(this).attr('src').replace('.png', '_hover.png'))
      .stop()
      .animate({
        opacity: 1,
      }, 300);

  }, function () {
    $(this)
      .attr('src', $(this).attr('src').replace('_hover.png', '.png'))
      .stop()
      .animate({
        opacity: 1,
      }, 300)
  })


  // top button-------------------------------------------
  $('body').append('<div id="top_btn"><div id="btn"><i class="fa-solid fa-arrow-up"></i></div></div>')

  $(window).scroll(function () {
    if (scrollY >= 500) {
      //스크롤 내릴때
      $('#top_btn').stop().animate({
        right: 50,
      }, 300)
    } else {
      //스크롤 올릴때
      $('#top_btn').stop().animate({
        right: -100,
      }, 300)
    }
  });


  $('#top_btn #btn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300)
  })


  // siteMap-------------------------------------------
  $('body').append('<div class="sitemapbg"><div> 아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기  아무거나 눌러서 화면 닫기 </div><img src="../../image/common/sitemap.png" alt="sitemap"></div>');

  $('#gnb_menu > li:nth-child(3)').focusin(function () {
    $('body').find('div.sitemapbg').css({
      'display': "block",
      'z-index': '999999'
    })
  });

  $('body > div.sitemapbg').click(function () {
    $(this).css('display', "none")
  });



  /* 슬라이더 영역 */
  // header slide
  var swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides: 1,
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.sw_button_next',
      prevEl: '.sw_button_prev',
    },
  });


  // header notice slider
  var swiper2 = new Swiper('#notice .swiper2', {
    // Optional parameters
    speed: 400,
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.notice_button_next',
      prevEl: '.swiper-button-prev.notice_button_prev',
    },
  });


  //section3 slide
  var swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    speed: 200,
    slidesPerView: 5.5,
    spaceBetween: 30,
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next.sec3_button_next',
      prevEl: '.swiper-button-prev.sec3_button_prev',
    },

   
  });





});
