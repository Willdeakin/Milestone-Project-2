var selectionArr = document.getElementsByClassName("selection-box");

$("#none_pick").on('click', function() {
    $('.selection-box').show();
});
$("#cultural_pick").on('click', function() {
    $('.selection-box').hide();
    $('.selection-box').filter('.cultural').toggle();
});
$("#sight_pick").on('click', function() {
    $('.selection-box').hide();
    $('.selection-box').filter('.sight').toggle();
});
$("#wonder_pick").on('click', function() {
    $('.selection-box').hide();
    $('.selection-box').filter('.wonder').toggle();
});
