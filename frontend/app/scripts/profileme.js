/**
 * Created by Administrator on 11/6/2016.
 */

// Checking if user has scrolled to change the height of the navbar
$(document).ready(function () {
    //$('.carousel').carousel({
    //    interval: 3000
    //});
    var $window = $(window);

    var hasScroled = false;
    $window.scroll(function () {
        var distance = $window.scrollTop()
        if (distance > 5 && hasScroled == false) {
            console.log(distance);
            $(".find-header").removeClass("initial-nav").addClass("changed-nav");
            $(".find-header").addClass("navbar-inverse");
            hasScroled = true;
        }
        else if (distance < 5 && hasScroled == true) {
            $(".find-header").removeClass("changed-nav").addClass("initial-nav");
            $(".find-header").removeClass("navbar-inverse");
            hasScroled = false;
            console.log(distance);
        }
    });
});
