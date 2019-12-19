document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://combinatronics.com/fmcuni/mh-b/master/btable.css" type="text/css"/>';
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://gitcdn.link/repo/fmcuni/mh-b/master/font/icofont.min.css" type="text/css"/>';




//support hover on rowspan
$(function() {
  var maximumCells = 0;
  var amountOfCells = 0;
  var foundCells;
  $("tr").each(function() {
    foundCells = $(this).find("td");
    amountOfCells = foundCells.length;
    if (amountOfCells > maximumCells) maximumCells = amountOfCells;
  });
  $("td").hover(function() {
    $el = $(this);
    if ($el.siblings("td").length < (maximumCells-1)) {
        $el.parent().prev().find("td[rowspan]").addClass("hover");
    }
  }, function() {
    $el.parent().prev().find("td[rowspan]").removeClass("hover");
  });
});
