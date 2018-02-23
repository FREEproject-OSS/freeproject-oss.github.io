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