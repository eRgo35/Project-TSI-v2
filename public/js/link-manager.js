function loadContent() {

    /* #hash link variable declaration */

    hash = $(this).attr('href').substr(1);

    /* Getting hashes for main menu */
    if (hash == 'nauczyciele' ||
        hash == 'tabela' ||
        hash == 'listy' ||
        hash == 'formularz') {
        /* Load content */
        $("#subLoad").attr("src", "./content/html/" + hash + ".html");
        /* Change Title */
        $("#page-title").html(hash);
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');
    } else if (hash == 'zdjecia') {
        /* Load content */
        $("#subLoad").attr("src", "./content/html/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("zdjęcia");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');
    } else if (hash == 'tabela_spr') {
        /* Load content */
        $("#subLoad").attr("src", "./content/html/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("tabela Sprawdzian");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'listy_spr') {
        /* Load content */
        $("#subLoad").attr("src", "./content/html/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("listy Sprawdzian");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'formularz_spr') {
        /* Load content */
        $("#subLoad").attr("src", "./content/html/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("formularz Sprawdzian");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'wlasciwosci_css') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("właściwości CSS");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'klasa_iden') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("Klasa i Identyfikator");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'tabele_css') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("tabele CSS");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'pseudoelementy') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html(hash);
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'basn') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("pseudoelementy - Baśń");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'selektor_elementu') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("selektor Elementu");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'selektor_atrybutu') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("selektor Atrybutu");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'selektor_atrybutu_2') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("selektor Atrybutu 2");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'selektor_atrybutu_3') {
        /* Load content */
        $("#subLoad").attr("src", "./content/css/" + hash + ".html");
        /* Change Title */
        $("#page-title").html("selektor Atrybutu 3");
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    } else if (hash == 'multimedia') {
        $("#subLoad").attr("src", "./content/media/" + hash + ".html");
        /* Change Title */
        $("#page-title").html(hash);
        /* Remove Active Class */
        $('#navbar-link').removeClass('active');
        /* Add active class for current menu item */
        $('#navbar-link[href="#' + hash + '"]').addClass('active');

    }
    /* For empty or wrong hash - load default page */
    else if (hash == '') {
        $("#subLoad").attr("src", "./content/main.html");
        /* Change Title */
        $("#page-title").html("Strona Główna");
    } else {
        $("#subLoad").attr("src", "./content/main.html");
        /* Change Title */
        $("#page-title").html("Strona Główna");
    }

}

$('.navbar-links').click(loadContent);