document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://combinatronics.com/fmcuni/mh-b/master/btable.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://gitcdn.link/repo/fmcuni/mh-b/master/font/icofont.min.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">';
document.addEventListener("DOMContentLoaded", function() {
    
    // editorial code box
    $(".editorial-code-box").append('<a href="https://www.moneyhero.com.hk/zh/editorial-code" rel="noopener" target="_blank" style="display: block;"><div class="editorial-code">MoneyHero為第三方金融產品比較平台，相關內容與資訊僅以消費者的最佳利益角度出發。MoneyHero與金融機構合作設計最適合你的金融產品，但我們的編採團隊不受商業因素影響，始終保持獨立。</div></a>');
    var texttoget = $('div.editorial-code').text();
    $('div.editorial-code').attr('code-text', texttoget);
      
    // expandable table button
    $("button.expand-table").remove();
    function bindButtonEvt(i) {
        $('#table' + i + '.sticky').parent().after('<button id="table' + i + '-btn" class="expand-table closed" ><span>收合</span></button>');
        $('#table' + i + '-btn').off('click').click(function() {
            $('#table' + i).toggleClass('sticky');
            $('#table' + i + '-btn').toggleClass('closed');
        });
    }
    for (var i = 1; i <= 10; i++) {
        bindButtonEvt(i)
    }

    // fix sticky table width
    var numtablestickyth = [];
    function fixstickywidth(k) {
        $('#table' + k + '.sticky tbody:last-child').after('<tfoot><tr><td style="width: 999px;"></td></tr></tfoot>');
        numtablestickyth[k] = $('#table' + k + '.sticky th').length;
        $('#table' + k + '.sticky tfoot td').attr('colspan', numtablestickyth[k]);
    }
    for (var k = 1; k <= 10; k++) {
        fixstickywidth(k)
    }

    // searchable table
    function searchabletable(l) {
        $('#table' + l + '.search').before('<input class="searchable-input" id="table' + l + '-search" type="text" placeholder="  搜索以下表格..">');
        $('#table' + l + '-search').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            $('#table' + l + '.search tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    }
    for (var l = 1; l <= 10; l++) {
        searchabletable(l)
    }
    
    // custom table header width
    if ($(window).width() > 767) {
    $('.mh-table th:nth-child(n+2)').css({"width":$('.mh-table').attr('col-width')});
    }
    else {
    $('.mh-table th:nth-child(n+2)').css({"min-width":$('.mh-table').attr('mo-col-width')});
    $('.mh-table th:first-child').css({"min-width":$('.mh-table').attr('mo-left-col-head-width')});
    }

});
