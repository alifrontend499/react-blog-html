/*
 Theme Name: BEQUB - The Bloger HTML5 Responsive Template
 Theme URL: http://themewar.com/html/bequb
 Author: ThemeWar
 Author URI: https://themeforest.net/user/expandtheme
 Description: BEQUB - The Bloger
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] Intialization
 [02] Featured Slider
 [03] Contact Map
 [04] magnificPopup
 [05] Home 4 SCroll slider
 [06] SCroll slider
 [07] Mobile Menu
 [07] Contact Form
 [07] Email Subsscript
 
 ==========================================================================*/

(function ($) {
    'use strict';

    /*============================================
     / Intialization
     =============================================*/
    var featuredSliders = $(".featuredSliders"),
            postSlide = $(".postSlide"),
            featuredSliderTwo = $(".featuredSliderTwo"),
            relatedOwl = $(".relatedOwl"),
            widgetOwl = $(".widgetOwl"),
            a_popUp = $("a.popUp"),
            scrollSliderWrap = $(".scrollSliderWrap"),
            featuredPost3s = $(".featuredPost3s");



    /*============================================
     / Featured Slider
     =============================================*/
    if (featuredSliders.length > 0)
    {
        featuredSliders.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            items: 1,
            nav: true
        });
    }
    if (postSlide.length > 0)
    {
        postSlide.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            items: 1,
            nav: true
        });
    }
    if (featuredSliderTwo.length > 0)
    {
        featuredSliderTwo.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                766: {
                    items: 2,
                    nav: true
                }
            }
        });
    }
    if (featuredPost3s.length > 0)
    {
        featuredPost3s.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                766: {
                    items: 2,
                    nav: true
                },
                1200: {
                    items: 3,
                    nav: true
                }
            }
        });
    }
    if (relatedOwl.length > 0)
    {
        relatedOwl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                766: {
                    items: 2,
                    nav: true
                },
                1200: {
                    items: 3,
                    nav: true
                }
            }
        });
    }
    if (widgetOwl.length > 0)
    {
        widgetOwl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            items: 1,
            dot: true
        });
    }


    /*=======================
     // Contact Map
     //=======================*/
    if ($("#map").length > 0)
    {
        var lat = 45.494447;
        var lang = -73.5697587;
        var map;

        map = new GMaps({
            el: '#map',
            lat: lat,
            lng: lang,
            scrollwheel: false,
            zoom: 16,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });

        var image = '';
        map.addMarker({
            lat: lat,
            lng: lang,
            icon: 'images/marker.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2d2d2d"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#b1b1b1"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }


    //=======================================================
    // magnificPopup
    //=======================================================
    if (a_popUp.length > 0) {
        a_popUp.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    //=======================================================
    // Home 4 SCroll slider
    //=======================================================
    if (scrollSliderWrap.length > 0)
    {
        scrollSliderWrap.owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            nav: false,
            items: 1,
            dot: true
        });
    }
    if ($('.scrollSliderWrap').length > 0) {
        $(".scrollSliderWrap").mCustomScrollbar({
            axis: "x",
            theme: "light-thick",
            advanced: {autoExpandHorizontalScroll: true}
        });
    }



    //=======================================================
    //  SCroll slider
    //=======================================================
    $(".menusaaa").on('click', function (e) {
        e.preventDefault();
        $(".right_sidebarMenu").animate({'margin-right': '0px'}, 400);
        $('body').css('overflow', 'hidden');
    });
    $(".exit").on('click', function (e) {
        e.preventDefault();
        $(".right_sidebarMenu").animate({'margin-right': '-470px'}, 400);
        $('body').css('overflow', 'inherit');
    });


    //=======================================================
    // Mobile Menu
    //=======================================================
    if ($('.mobileMenu').length > 0) {
        $('.mobileMenu').on('click', function () {
            $(this).toggleClass('active');
            $('.mainMenu > ul').slideToggle('slow');
        });
        if ($(window).width() < 1200) {
            $('.mainMenu ul li.has-menu-items > a').on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }

    //=======================================================
    // Contact Form
    //=======================================================
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var con_name, con_email, con_sub, con_message;

            if ($("#con_name").length > 0) {
                var con_name = $("#con_name").val();
            }
            if ($("#con_email").length > 0) {
                var con_email = $("#con_email").val();
            }
            if ($("#con_sub").length > 0) {
                var con_sub = $("#con_sub").val();
            }
            if ($("#con_message").length > 0) {
                var con_message = $("#con_message").val();
            }

            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/mail.php',
                    data: {con_name: con_name, con_email: con_email, con_sub: con_sub, con_message: con_message},
                    success: function (data)
                    {
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                    }
                });
            } else
            {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }

    //=======================================================
    // Email Subsscript
    //=======================================================
    if ($("#subscribe").length > 0)
    {
        $("#subscribe").on('submit', function (e) {
            e.preventDefault();
            var sub_email = $("#sub_email").val();
            $("#sub_submit").html('Processsing...');
            if (sub_email === '')
            {
                $("#sub_email").addClass('reqError');
                $("#sub_submit").html('Failed!');
            } else
            {
                $("#sub_email").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: {sub_email: sub_email},
                    success: function (data)
                    {
                        $("#subscribe input").val('');
                        $("#sub_submit").html('success');
                    }
                });
            }
        });
        $("#sub_email").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }
    if ($("#subscribe2").length > 0)
    {
        $("#subscribe2").on('submit', function (e) {
            e.preventDefault();
            var sub_email = $("#sub_email2").val();
            $("#sub_submit2").html('Processsing...');
            if (sub_email === '')
            {
                $("#sub_email2").addClass('reqError');
                $("#sub_submit2").html('Failed!');
            } else
            {
                $("#sub_email2").removeClass('reqError');
                $.ajax({
                    type: "POST",
                    url: "php/subscribe.php",
                    data: {sub_email: sub_email},
                    success: function (data)
                    {
                        $("#subscribe2 input").val('');
                        $("#sub_submit2").html('success');
                    }
                });
            }
        });
        $("#sub_email2").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }


})(jQuery);