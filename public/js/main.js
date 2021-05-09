$(document).ready(function () {
    if (document.cookie.split(';').filter((item) => item.includes('theme=blue')).length) {
        $('.fa-check-circle-o').css('display', 'none');
        $('.Blue').css('display', 'block');
    } else if (document.cookie.split(';').filter((item) => item.includes('theme=green')).length) {
        $('.fa-check-circle-o').css('display', 'none');
        $('.Green').css('display', 'block');
    } else if (document.cookie.split(';').filter((item) => item.includes('theme=red')).length) {
        $('.fa-check-circle-o').css('display', 'none');
        $('.Red').css('display', 'block');
    } else if (document.cookie.split(';').filter((item) => item.includes('theme=yellow')).length) {
        $('.fa-check-circle-o').css('display', 'none');
        $('.Yellow').css('display', 'block');
    }
});

function dropHTML() {
    $("#html-dropdown").slideToggle("fast");
    $("#1").toggleClass("fa-sort-up fa-sort-down");
}

function dropCSS() {
    $("#css-dropdown").slideToggle("fast");
    $("#2").toggleClass("fa-sort-up fa-sort-down");
}

function dropHTML5() {
    $("#html5-dropdown").slideToggle("fast");
    $("#3").toggleClass("fa-sort-up fa-sort-down");
}

function dropDOCS() {
    $("#docs-dropdown").slideToggle("fast");
    $("#4").toggleClass("fa-sort-up fa-sort-down");
}

function dropMEDIA() {
    $("#media-dropdown").slideToggle("fast");
    $("#5").toggleClass("fa-sort-up fa-sort-down");
}

function dropLINKS() {
    $("#links-dropdown").slideToggle("fast");
    $("#6").toggleClass("fa-sort-up fa-sort-down");
}

function themeSelect() {
    var x = document.getElementById("theme-change");
    if (x.style.display === "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}

function themeBlue() {
    document.getElementById('theme').href = 'css/blue.css';
    $('.fa-check-circle-o').css('display', 'none');
    $('.Blue').css('display', 'block');
    document.getElementById("theme-change").style.display = "none";
    document.cookie = "theme=blue; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function themeGreen() {
    document.getElementById('theme').href = 'css/green.css';
    $('.fa-check-circle-o').css('display', 'none');
    $('.Green').css('display', 'block');
    document.getElementById("theme-change").style.display = "none";
    document.cookie = "theme=green; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function themeRed() {
    document.getElementById('theme').href = 'css/red.css';
    $('.fa-check-circle-o').css('display', 'none');
    $('.Red').css('display', 'block');
    document.getElementById("theme-change").style.display = "none";
    document.cookie = "theme=red; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

function themeYellow() {
    document.getElementById('theme').href = 'css/yellow.css';
    $('.fa-check-circle-o').css('display', 'none');
    $('.Yellow').css('display', 'block');
    document.getElementById("theme-change").style.display = "none";
    document.cookie = "theme=yellow; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

/* Mobile Functions */

function mobileSidebar() {
    $("#fader").fadeIn( "slow" );
    $("nav ul").animate({
        left: 0 });
    $("#content").style = "overflow: hidden";
}

function mobileSidebarClose() {
    $("nav ul").animate({
        left: "-240px" });
    $("#fader").fadeOut( "slow" );
    $("#content").style = "overflow: auto";
}