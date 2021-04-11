var selectionArr = document.getElementsByClassName("selection-box");

/*
$(".selection-box").hide();
*/

$("#sunny_pick").on('click', function() {
    $('#sunny').toggle();
});
$("#city_pick").on('click', function() {
    $('#city').toggle();
});

