'use strict';

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getTimeRemaining(endtime) {
    var dt = new Date();
    var t = Date.parse(endtime) - 1000 * 60 * 60 * 3 - Date.parse(dt);
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var week = Math.floor(t / (1000 * 60 * 60 * 24 * 7));

    if (dt.getDay() == '0') {
        var day = '7';
    } else {
        var day = dt.getDay();
    }
    return {
        'total': t,
        'days': days % 7,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'week': week,
        'day': 7 - day
    };
}

function getDeclineDays(num) {

    var declineDays;

    switch (num) {

        case 1:
            declineDays = 'Day';
            break;
        case 2:
        case 3:
        case 4:
            declineDays = 'Days';
            break;
        case 5:
        case 6:
        case 7:
        default:
            declineDays = 'Days';
            break;
    }

    return declineDays;
}

function getDeclineWeeks(num) {

    var declineWeeks;

    switch (num) {

        case 1:
            declineWeeks = 'Week';
            break;
        case 2:
        case 3:
        case 4:
            declineWeeks = 'Weeks';
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        default:
            declineWeeks = 'Weeks';
            break;
    }

    return declineWeeks;
}

function initializeClock(id, endtime) {

    var daysSpan = $('#' + id + ' .clock__days');
    var hoursSpan = $('#' + id + ' .clock__hours');
    var minutesSpan = $('#' + id + ' .clock__minutes');
    var secondsSpan = $('#' + id + ' .clock__seconds');

    var wn = $('.countdown__days .week__num');
    var wt = $('.countdown__days .weel__total');
    var dc = $('.countdown__days .day__current');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        wn.text(t.week);
        dc.text(t.days);

        $('.declineDays').text(getDeclineDays(t.days));
        $('.declineWeeks').text(getDeclineWeeks(t.week));

        daysSpan.text(t.days);
        hoursSpan.text(('0' + t.hours).slice(-2));
        minutesSpan.text(('0' + t.minutes).slice(-2));
        secondsSpan.text(('0' + t.seconds).slice(-2));
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

function Chart(item, dataset, color_array, textPonchik, textPonchik_1) {

    var total = 0;

    dataset.forEach(function (d) {
        total += d.count;
    });

    var pie = d3.layout.pie().value(function (d) {
        return d.count;
    }).sort(null);

    var w, h;
    var innerRadiusArc;

    if ($(window).width() <= 575) {

        w = h = $(window).width() - 30;
        innerRadiusArc = 110;
    } else if ($(window).width() <= 1920) {
        w = h = 410;
        innerRadiusArc = 150;
    } else {
        w = h = 510;
        innerRadiusArc = 180;
    }

    var outerRadiusArc = w / 2;

    var shadowWidth = 10;

    var outerRadiusArcShadow = innerRadiusArc + 1;
    var innerRadiusArcShadow = innerRadiusArc - shadowWidth;

    var color = d3.scale.ordinal().range(color_array);
    var svg = d3.select("#" + item).append("svg").attr({
        width: w,
        height: h,
        class: 'shadow'
    }).append('g').attr({
        transform: 'translate(' + w / 2 + ',' + h / 2 + ')'
    });

    var createChart = function createChart(svg, outerRadius, innerRadius, fillFunction, className) {

        var arc = d3.svg.arc().innerRadius(outerRadius).outerRadius(innerRadius);

        var path = svg.selectAll('.' + className).data(pie(dataset)).enter().append('path').attr({
            class: className,
            d: arc,
            fill: fillFunction
        });

        path.transition().duration(1000).attrTween('d', function (d) {
            var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
            return function (t) {
                return arc(interpolate(t));
            };
        });
    };

    createChart(svg, outerRadiusArc, innerRadiusArc, function (d, i) {
        return color(d.data.name);
    }, 'path1');

    createChart(svg, outerRadiusArcShadow, innerRadiusArcShadow, function (d, i) {
        var c = d3.hsl(color(d.data.name));
        return d3.hsl(c.h + 7, c.s - .07, c.l - .15);
    }, 'path2');

    var addText = function addText(text, y, size) {
        svg.append('text').text(text).attr({
            'text-anchor': 'middle',
            y: y
        }).style({
            fill: '#929DAF',
            'font-size': size
        });
    };

    var fontSize;

    if ($(window).width() <= 575) {
        fontSize = '24px';
    } else {
        fontSize = '30px';
    }

    var restOfTheData = function restOfTheData() {

        addText(function () {
            return textPonchik;
        }, 0, fontSize);

        addText(function () {
            return textPonchik_1;
        }, 25, '13px');
    };

    setTimeout(restOfTheData, 1000);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}