$(function () {
    $("#1, #2, #3").lavaLamp({
        fx: "backout",
        speed: 700,
        /* click: function(event, menuItem) {
         return false;
         }*/
    });
});




$(window).on("scroll", function () {
    if ($(window).scrollTop() > 150)
        $('#position-fx').addClass('p-show');
    else
        $('#position-fx').removeClass('p-show');

    if ($(window).scrollTop() > 300)
    {
        $('#position-fx').addClass('p-show1');
        $('.bkg-m-menu').addClass('p-show2');
    } else
    {
        $('#position-fx').removeClass('p-show1');
        $('.bkg-m-menu').removeClass('p-show2');
    }

});



$("#r-slide").click(function (e) {
    e.preventDefault();
    $("#r-blok").toggleClass("active");
    $(".blok-knr").toggleClass("active");
});
$(window).resize(function () {
    if ($("#r-blok").hasClass('active')) {
        $("#r-blok").removeClass("active");
        $(".blok-knr").removeClass("active");
    }
});



/*   $(document).mousemove(function(e){
 var X = e.pageX; // положения по оси X
 var Y = e.pageY; // положения по оси Y
 console.log("X: " + X + " Y: " + Y); // вывод результата в консоль
 });
 */



$(document).ready(function () {
    $('.sub > a').click(function () {
        $('.sub ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });
    $('.mini-menu > ul > li > a').click(function () {
        $('.mini-menu > ul > li > a, .sub a').removeClass('active');
        $(this).addClass('active');
    }),
            $('.sub ul li a').click(function () {
        $('.sub ul li a').removeClass('active');
        $(this).addClass('active');
    });
});


/*высота правого блока*/
function setHeiHeight() {
    $('#zzz').css({
        height: $(window).height() + 'px'
    });
}

setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
$(window).resize(setHeiHeight); // обновляем при изменении размеров окна
(function ($) {
    $(window).on("load", function () {
        //$(".right-blok").mCustomScrollbar();

        $(".right-blok").mCustomScrollbar({
            //theme:"inset-2-dark"
            theme: "minimal-dark"
        });
    });
})(jQuery);

/*======================ЭТО ДОБАВИТЬ В ОСНОВНОЙ==================================*/
$("#rotat1").on('click', function () {
    if ($('.color-pl1 .blfadein').css('opacity') == 1) {
        $('.color-pl1 .blfadein').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('.color-pl1 .blfadeout').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('h3 #close1').css({"opacity": "1", "transition": "all 0.3s ease-in"});
    } else {
        $('.color-pl1 .blfadeout').css("opacity", "0");
        $('.color-pl1 .blfadein').css("opacity", "1");
    }
});
$("#close1").on('click', function () {
    if ($('.color-pl1 .blfadein').css('opacity') == 0) {
        $('.color-pl1 .blfadein').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('.color-pl1 .blfadeout').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('h3 #close1').css({"opacity": "0", "transition": "all 0.3s ease-in"});
    }
});
/*************/
$("#rotat2").on('click', function () {
    if ($('.color-pl2 .blfadein').css('opacity') == 1) {
        $('.color-pl2 .blfadein').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('.color-pl2 .blfadeout').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('h3 #close2').css({"opacity": "1", "transition": "all 1s ease-in"});
    } else {
        $('.color-pl2 .blfadeout').css("opacity", "0");
        $('.color-pl2 .blfadein').css("opacity", "1");
    }
});
$("#close2").on('click', function () {
    if ($('.color-pl2 .blfadein').css('opacity') == 0) {
        $('.color-pl2 .blfadein').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('.color-pl2 .blfadeout').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('h3 #close2').css({"opacity": "0", "transition": "all 0.3s ease-in"});
    }
});
/************/
$("#rotat3").on('click', function () {
    if ($('.color-pl3 .blfadein').css('opacity') == 1) {
        $('.color-pl3 .blfadein').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('.color-pl3 .blfadeout').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('h3 #close3').css({"opacity": "1", "transition": "all 0.3s ease-in"});
    } else {
        $('.color-pl3 .blfadeout').css("opacity", "0");
        $('.color-pl3 .blfadein').css("opacity", "1");
    }
});
$("#close3").on('click', function () {
    if ($('.color-pl3 .blfadein').css('opacity') == 0) {
        $('.color-pl3 .blfadein').css({"opacity": "1", "transition": "all 0.3s ease-in"});
        $('.color-pl3 .blfadeout').css({"opacity": "0", "transition": "all 0.3s ease-in"});
        $('h3 #close3').css({"opacity": "0", "transition": "all 0.3s ease-in"});
    }
});
/*по высоте*/
$(document).ready(function () {});
function sizeBlok1() {
    var highestBox = 0;
    $('.blfadein').each(function () {
        $('.pl-ots', this).each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
    });

    $('.pl-ots').each(function () {
        $('.pl-ots').height(highestBox);
    });
}
;


if ($(window).width() > 768) {
    sizeBlok1();
}
//$(window).resize(sizeBlok1);

$(document).ready(function () {
    $('.tabcontent td').hover(function () {
        $(this).find('.sub-menu').show();
    }, function () {
        $(this).find('.sub-menu').hide();
    }
    )
});


$('#hlp15').hover(function () {
    $('.madal2x').show();
}, function () {
    $('.madal2x').hide();
}
);

/**/	$(document).ready(function () {
    $('.dropdown.dropdown-large').hover(function () {
        /*   setTimeout(function() {  }, 1000);
         $(this).addClass("active");
         $(this).addClass("open");  
         */
    }, function () {
        /*  $(this).removeClass("active");  
         $(this).removeClass("open"); 
         */
    }
    )
});

/***********************************/

function ajax1111() { //Ajax отправка формы
    var msg = $("#send-form1").serialize();
    $.ajax({
        type: "POST",
        url: "/?sysblock=obz",
        data: msg,
        success: function (data) {
            $("#results").html(data);
            if ($('#sucfr').length) {
                $('#send-form1')[0].reset();
            }
        },
        error: function (xhr, str) {
            alert("Возникла ошибка!");
        }
    });
}

function ajax1() {
    /*********************************/
    var form = document.forms.form1;

    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/?sysblock=obz");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                data = xhr.responseText;
                if (data == "true") {
                    $("#results").replaceWith("<p>Письмо отправлено!<p>");
                } else {
                    /*  $("#results6").replaceWith("<p >Ошибка! Обновите страницу...<p>");*/
                    $("#results").html(data);
                    if ($('#sucfr').length) {
                        $('#form1')[0].reset();
                    }
                    $("#results").show();
                }
            }
        }
    };

    xhr.send(formData);

}

function ajax() {
    /*********************************/
    var form = document.forms.form1;

    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/?sysblock=11");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                data = xhr.responseText;
                if (data == "true") {
                    $("#results").replaceWith("<p>Письмо отправлено!<p>");
                } else {
                    /*  $("#results6").replaceWith("<p >Ошибка! Обновите страницу...<p>");*/
                    $("#results").html(data);
                    if ($('#sucfr').length) {
                        $('#form1')[0].reset();
                    }
                    $("#results").show();
                }
            }
        }
    };

    xhr.send(formData);

}

/**************расчет стоимости услуг по регистрации*************************/
(function ($) {
    var xx, yy, sumx, di, dii;
    var ix;
    ix = 1;
    di = [];
    dii = [];
    xx = [];
    $('.ul-c li').click(function () {
        xx[ix] = $(this).attr('data-id');
        di[ix] = $(this).attr('data-di');
        dii[ix] = $(this).attr('data-dii');
        ix = ix + 1;
        $(this).parent().parent().css("display", "none");
        yy = $(this).parent().parent().attr('id');
        if (yy == 'okno1') {
            $('.sh').removeClass('active');
            $('.ok2').addClass('active');
        }
        if (yy == 'okno2') {
            $('.sh').removeClass('active');
            $('.ok3').addClass('active');
        }
        if (yy == 'okno3') {
            $('.sh').removeClass('active');
            $('.ok4').addClass('active');
            if ((di[2] == 2 && dii[3] == 2) || (di[2] == 2 && dii[3] == 3)) {
                xx[2] = 3000;
            }
            if (di[2] == 2 && dii[3] == 1) {
                xx[2] = 500;
            }
            if (xx[1] == 10 && di[2] == 3 && dii[3] >= 2) {
                xx[2] = 4000;
            }
            if (xx[1] == 10 && di[2] == 4 && dii[3] >= 2) {
                xx[2] = 1000;
            }
            if (xx[1] == 10 && di[2] == 5 && dii[3] >= 2) {
                xx[2] = 5000;
            }
            if (xx[1] == 20 && di[2] == 1 && dii[3] >= 2) {
                xx[2] = 5000;
            }
            if (xx[1] == 20 && di[2] == 2) {
                xx[2] = 3000;
            }
            if (xx[1] == 20 && di[2] == 3 && dii[3] >= 2) {
                xx[2] = 5000;
            }
            if (xx[1] == 20 && di[2] == 4 && dii[3] >= 2) {
                xx[2] = 5000;
            }
            if (xx[1] == 20 && di[2] == 5 && dii[3] >= 2) {
                xx[2] = 7000;
            }
            if (xx[1] == 20 && dii[3] == 3 && dii[3] >= 2) {
                xx[3] = 3000;
            }
            if (xx[1] == 20 && dii[3] == 3 && di[2] == 4) {
                xx[3] = 2000;
            }
            sumx = parseInt(eval(xx.join("+")));
            if (xx[1] == 10) {
                sumx = sumx - 10;
            } else {
                sumx = sumx - 20;

            }

            $('#sum').text(sumx);

        }

        console.log('di=' + di + ' dii=' + dii + ' xx=' + xx);
        $('#m3s').click(function () {
            $('#okno1').css("display", "block");
            $('#okno2').css("display", "block");
            $('#okno3').css("display", "block");
            xx.length = 0;
            di.length = 0;
            dii.length = 0;
            ix = 1;
            $('.sh').removeClass('active');
            $('.ok1').addClass('active');
        });

    });


})(jQuery);

/**
 * Работаем с календарем
 * @param {type} $
 * @returns {undefined}
 */

(function ($) {
    var start, finish, month, year, sdate, dey, i, pr, col, kdey, kkdey;
    start = 0;
    finish = 0;
    month = [];
    kdey = 4;
    kkdey = $('#kdey').attr('data-kdey');
    if (kkdey > 0) {
        kdey = kkdey;
    } else {
        kdey = 4;
    }

    year = $('.b-calendar__year').attr('data-year');

    i = 1;
    $('.b-calendar__month').each(function () {
        month[i] = $(this).attr('data-month');
        i = i + 1;
    });

    /*по нажатию на дату*/
    $('.b-calendar__day.m' + month[1]).click(function () {

        start = dey = $(this).attr('data-id');/*получаем дату*/
        $('#v-red').text(datall(start, month[1], year));
        sdate = daynom(start, month[1], year);

        if (sdate > 1) {
            $('.b-calendar__day').removeClass('dred'); /*очистим все даты от выборки*/
            $('.b-calendar__day').removeClass('dgreen'); /*очистим все даты от выборки*/
            $('.b-calendar__day').removeClass('drrr'); /*очистим все даты от выборки*/
            $('.b-calendar__day').removeClass('dyellow'); /*очистим все даты от выборки*/
            $('.b-calendar__day').removeClass('dser'); /*очистим все даты от выборки*/

            /*отметим выбранную*/
            $(this).addClass('dred');
            var xx = lastd(month[1], year);
            /*4 дня без выходных*/
            stops = 0;
            i = 1;
            pr = 0;
            for (i = 1; i <= kdey; i++) {
                start = Number(start) + 1;


                $('.b-calendar__day.m' + month[1]).each(function () {
                    if (start <= xx + 1) {
                        dss = daynom(start, month[1], year);

                        /*Условия передвижения на дату вперед или просто пропуск выходных дней*/
                   //     if (($(this).attr('data-id') == start - 1 || $(this).attr('data-id') == start - 2) && (dss == 2 || dss == 0)) {
                   //         $(this).addClass('dser');
                   //     }

                        if (dss == 0) {
                            start = start + 1;
                        }
                        if (dss == 1) {
                            start = start + 1;
                        }

                        /***/

                        /**/


                        /*промежуточные в цикле окрашиваем в розовый*/
                        if ($(this).attr('data-id') == start) {
                            $(this).addClass('drrr');
                            col = i;
                            pr = 1;
                        }
                        if ($(this).attr('data-id') == start && i == kdey - 1) {
                           if (kdey < 20) {
                                $(this).addClass('dyellow');
                                var d3 = $(this).attr('data-id');
                                $('#v-yellow').text(datall(d3, month[2], year));
                            }
                         }
                        /*последний в цикле перекрашиваем в зеленый*/
                        if ($(this).attr('data-id') == start && i == kdey) {
                            $(this).addClass('dgreen');
                            stops = 1;
                            var d3 = $(this).attr('data-id');
                            $('#v-green').text(datall(d3, month[1], year));

                        }
                    } else {
                        if (dey == xx || pr == 0) {
                            col = 0;
                        }
                        return false;
                    }
                });
            }
            if (stops != 1) {
                start = 0;
                i = col + 1;
                for (i = col + 1; i <= kdey; i++) {
                    start = Number(start) + 1;
                    $('.b-calendar__day.m' + month[2]).each(function () {
                        yearx = $('.b-calendar__yearx').attr('data-yearx');
                        dss = daynom(start, month[2], yearx);

                        /*Условия передвижения на дату вперед или просто пропуск выходных дней*/
                    
                    //       if (($(this).attr('data-id') == start - 1 || $(this).attr('data-id') == start - 2) && (dss == 2 || dss == 1)) {
                    //        $(this).addClass('dser');
                    //    }

                        if (dss == 0) {
                            start = start + 1;
                        }
                        if (dss == 1) {
                            start = start + 1;
                        }

                        /*промежуточные в цикле окрашиваем в розовый*/
                        if ($(this).attr('data-id') == start) {
                            $(this).addClass('drrr');
                        }
                        if ($(this).attr('data-id') == start && i == kdey - 1) {
                            if (kdey < 20) {
                                $(this).addClass('dyellow');
                                var d3 = $(this).attr('data-id');
                                $('#v-yellow').text(datall(d3, month[2], yearx));
                            }
                        }
                        /*последний в цикле перекрашиваем в зеленый*/
                        if ($(this).attr('data-id') == start && i == kdey) {
                            $(this).addClass('dgreen');
                            var d3 = $(this).attr('data-id');
                            $('#v-green').text(datall(d3, month[2], yearx));

                        }

                    });
                }
            }


        }
    });
})(jQuery);

/**
 * Получим день недели по номеру
 */
function daynom(start, month, year) {
    var dey = Number(start) + 1;
    var D = new Date(year, month - 1, dey);/*выбранная дата*/
    var dn = D.getDay(); /* получим номер дня недели */
    return dn;
}
function lastd(month, year) {
    var dn = new Date(year, month, 0).getDate();
    return dn;
}
function datall(d3, month, year) {
    var dnn = [];
    dnn[2] = "Понедельник";
    dnn[3] = "Вторник";
    dnn[4] = "Среда";
    dnn[5] = "Четверг";
    dnn[6] = "Пятница";
    dnn[0] = "Суббота";
    dnn[1] = "Воскресенье";
    dss = daynom(d3, month, year);
    var dtx = dnn[dss];
    var dtf = d3 + '.' + month + '.' + year;
    var dta = dtf + " " + dtx;
    return dta;
}


/***********************************/

/*
 * jQuery File Upload Plugin JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global $, window */
/*
 $(function () {
 'use strict';
 
 // Initialize the jQuery File Upload widget:
 jQuery('#fileupload').fileupload({
 // Uncomment the following to send cross-domain cookies:
 //xhrFields: {withCredentials: true},
 url: 'server/php/'
 });
 
 // Enable iframe cross-domain access via redirect option:
 jQuery('#fileupload').fileupload(
 'option',
 'redirect',
 window.location.href.replace(
 /\/[^\/]*jQuery/,
 '/cors/result.html?%s'
 )
 );
 
 if (window.location.hostname === 'blueimp.github.io') {
 // Demo settings:
 jQuery('#fileupload').fileupload('option', {
 url: '//jquery-file-upload.appspot.com/',
 // Enable image resizing, except for Android and Opera,
 // which actually support image resizing, but fail to
 // send Blob objects via XHR requests:
 disableImageResize: /Android(?!.*Chrome)|Opera/
 .test(window.navigator.userAgent),
 maxFileSize: 999000,
 acceptFileTypes: /(\.|\/)(gif|jpe?g|png)jQuery/i
 });
 // Upload server status check for browsers with CORS support:
 if (jQuery.support.cors) {
 jQuery.ajax({
 url: '//jquery-file-upload.appspot.com/',
 type: 'HEAD'
 }).fail(function () {
 jQuery('<div class="alert alert-danger"/>')
 .text('Upload server currently unavailable - ' +
 new Date())
 .appendTo('#fileupload');
 });
 }
 } else {
 // Load existing files:
 jQuery('#fileupload').addClass('fileupload-processing');
 jQuery.ajax({
 // Uncomment the following to send cross-domain cookies:
 //xhrFields: {withCredentials: true},
 url: jQuery('#fileupload').fileupload('option', 'url'),
 dataType: 'json',
 context: jQuery('#fileupload')[0]
 }).always(function () {
 jQuery(this).removeClass('fileupload-processing');
 }).done(function (result) {
 jQuery(this).fileupload('option', 'done')
 .call(this, $.Event('done'), {result: result});
 });
 }
 
 });
 */

