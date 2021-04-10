var selectionArr = document.getElementsByClassName("selection-box");

/*
$(".selection-box").hide();
*/

function get_sunny() {
    for (var i = 0; i < selectionArr; i++){
        $(".selection-box").filter(".sunny").toggle();
    }
}

