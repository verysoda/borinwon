$(function(){
// siteMap
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


})