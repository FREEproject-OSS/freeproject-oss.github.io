/*
    FREEproject Website
    The official website for FREEproject.

    Contributors are shown at https://freeproject-oss.github.io/contributors.html

    (C) FREEproject Open Source Systems and contributors 2018.
*/

$.fn.followTo = function (pos) {
    var $this = this, $window = $(window);

    $window.scroll(function(e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: "absolute",
                top: $(window).height() + 60
            });
        } else {
            $this.css({
                position: "fixed",
                top: $(window).height() - 130 - 40
            });
        }
    });
};

window.onload = function() {
    $("#coverCard").followTo($(window).height() - 580);
}