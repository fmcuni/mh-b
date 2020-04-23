document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://combinatronics.com/fmcuni/mh-b/master/btable.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://gitcdn.link/repo/fmcuni/mh-b/master/font/icofont.min.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">';
document.addEventListener("DOMContentLoaded", function(){$( ".editorial-code-box" ).append( '<a href="https://www.moneyhero.com.hk/zh/editorial-code" rel="noopener" target="_blank" style="display: block;"><div class="editorial-code">MoneyHero為第三方金融產品比較平台，相關內容與資訊僅以消費者的最佳利益角度出發。MoneyHero與金融機構合作設計最適合你的金融產品，但我們的編採團隊不受商業因素影響，始終保持獨立。</div></a>' );var texttoget = $('div.editorial-code').text();$('div.editorial-code').attr('code-text', texttoget);});
document.addEventListener("DOMContentLoaded", function(){
$( "button.expand-table" ).remove();
function bindButtonEvt(i) {
    $('#table' + i).parent().after('<button id="table' + i + '-btn" class="expand-table closed" ><span>收合</span></button>');
    $('#table' + i + '-btn').off('click').click(function(){
      $('#table' + i).toggleClass('sticky');
      $('#table' + i + '-btn').toggleClass('closed');
    });
}
for (var i = 1; i <= 10; i++) {
    bindButtonEvt(i)
}
});
