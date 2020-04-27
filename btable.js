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

    function bindButtonEvt(t) {
        $('#table' + t + '.sticky').parent().after('<button id="table' + t + '-btn" class="expand-table closed" ><span>收合</span></button>');
        $('#table' + t + '-btn').off('click').click(function() {
            $('#table' + t).toggleClass('sticky');
            $('#table' + t + '-btn').toggleClass('closed');
        });
    }

    // fix sticky table width
    var numtablestickyth = [];

    function fixstickywidth(t) {
        $('#table' + t + '.sticky tbody:last-child').after('<tfoot><tr><td style="width: 999px;"></td></tr></tfoot>');
        $('#table' + t + '.sticky tbody:last-child').after('<tfoot><tr><td></td></tr></tfoot>');
        numtablestickyth[t] = $('#table' + t + '.sticky th').length;
        $('#table' + t + '.sticky tfoot td').attr('colspan', numtablestickyth[t]);
    }

    // searchable table
    function searchabletable(t) {
        $('#table' + t + '.search').before('<input class="searchable-input" id="table' + t + '-search" type="text" placeholder="  搜索以下表格..">');
        $('#table' + t + '-search').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            $('#table' + t + '.search tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    }

    function resizerestart() {
        // custom table header width
        function customtableheaderwidth(t) {
            if ($(window).width() > 767) {
                $('#table' + t + '.mh-table th:nth-child(n+2)').css({
                    "width": $('#table' + t + '.mh-table').attr('col-width')
                });
            } else {
                $('#table' + t + '.mh-table th:nth-child(n+2)').css({
                    "min-width": $('#table' + t + '.mh-table').attr('mo-col-width')
                });
                $('#table' + t + '.mh-table th:first-child').css({
                    "min-width": $('#table' + t + '.mh-table').attr('mo-left-col-head-width')
                });
            }
        }
        //loop for 10 tables
        for (var t = 1; t <= 10; t++) {
            customtableheaderwidth(t)
        }
    }
    $(window).resize(resizerestart);
    $(document).ready(resizerestart);
    //loop for 10 tables
    for (var t = 1; t <= 10; t++) {
        bindButtonEvt(t)
        searchabletable(t)
        fixstickywidth(t)
    }
});
