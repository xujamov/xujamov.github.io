var awards = [
        {
            "title": "Certificate of Completion",
            "by": "One Million Uzbek Coders",
            "url": "/img/certificates/2021.05.04.jpg"
        },
        {
            "title": "Certificate of Participation",
            "by": "One Million Uzbek Coders",
            "url": "/img/certificates/2021.05.03.jpg"
        },
        {
            "title": "Certificate of Completion",
            "by": "One Million Uzbek Coders",
            "url": "/img/certificates/2021.05.01.jpg"
        },
        {
            "title": "Certificate of Participation",
            "by": "One Million Uzbek Coders",
            "url": "/img/certificates/2021.05.02.jpg"
        },
        {
            "title": "Certificate for publication of research article",
            "by": "An international multidisciplinary research journal",
            "url": "/img/certificates/2021.03.01.jpg"
        },
        {
            "title": "Certificate of Completion",
            "by": "BEONMAX",
            "url": "/img/certificates/2020.07.30.jpg"
        },
        {
            "title": "Certificate of Completion",
            "by": "BEONMAX",
            "url": "/img/certificates/2020.07.15.jpg"
        },
        {
            "title": "Intellectual Generation of Uzbekistan",
            "by": "Rector of TUIT",
            "url": "/img/certificates/2017.04.17.jpg"
        },
        {
            "title": "Certificate of appreciation by Urgench branch of TUIT",
            "by": "Rector of Urgench branch of TUIT",
            "url": "/img/certificates/2017.01.19.jpg"
        },
        {
            "title": "Certificate of appreciation by Urgench branch of TUIT",
            "by": "Rector of Urgench branch of TUIT",
            "url": "/img/certificates/2015.04.03.jpg"
        },
        {
            "title": "Certificate of achievement for second place at the contest",
            "by": "Rector of Urgench branch of TUIT",
            "url": "/img/certificates/2015.03.21.jpg"
        },
        {
            "title": "Certificate of achievement for third place at the competition \"Akademik litsey bilimdoni\"",
            "by": "Rector of lyceum №3",
            "url": "/img/certificates/2014.03.18.jpg"
        },
        {
            "title": "Zertifikat TestAS",
            "by": "Goethe-Institut Taschkent, october 26, 2013",
            "url": "/img/certificates/2013.10.26.jpg"
        },
        {
            "title": "Certificate of Participation",
            "by": "Liebegschule in Giessen",
            "url": "/img/certificates/2013.06.18.jpg"
        },
        {
            "title": "Goethe Zertifikat B1",
            "by": "Goethe-Institut Taschkent, february 9, 2013",
            "url": "/img/certificates/2013.02.09.jpg"
        },
        {
            "title": "Goethe Zertifikat A1",
            "by": "Goethe-Institut Taschkent, october 2, 2012",
            "url": "/img/certificates/2012.10.02.jpg"
        },
        {
            "title": "Goethe Zertifikat A1",
            "by": "Goethe-Institut Taschkent, october 2, 2012",
            "url": "/img/certificates/2012.10.02.jpg"
        },
        {
            "title": "Certificate of Honor for the first degree for the first place at the Olympiad in mathematics.",
            "by": "Director of urban public education",
            "url": "/img/certificates/2011.10.1.png"
        },
        {
            "title": "Diploma of the first degree for the first place at the Olympiad in mathematics.",
            "by": "Mayor of Urgench",
            "url": "/img/certificates/2010.10.01.jpg"
        },
        {
            "title": "Certificate of Honor for excellent study",
            "by": "Director of school",
            "url": "/img/certificates/2010.05.25.jpg"
        },
    ]
;
let dgu = [
        {
            "title": "O'zbek tilining statistik elektron lug'ati",
            "by": "December 9, 2020",
            "url": "/img/dgu/lugat.jpg"
        },
        {
            "title": "Bino va inshootlar restavratsiyasi",
            "by": "July 19, 2017",
            "url": "/img/dgu/OquvQollanma.JPG"
        },
        {
            "title": "Deshon Qal'a va Xiva tumanidagi tarixiy va me'moriy yodgorliklar bo'yicha ma'lumotlar bazasi",
            "by": "July 18, 2017",
            "url": "/img/dgu/DeshonQala.JPG"
        },
        {
            "title": "Janubiy Orolbo'yi me'moriy yodgorliklari",
            "by": "July 17, 2017",
            "url": "/img/dgu/IchanQala.JPG"
        },
    ]
;
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded...',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>' + item.el.data('by') + '</small>';
            }
        }
    });
    var div = document.getElementsByClassName('popup-gallery')[0];
    var elem = "<div class='row'>";
    for (var i = 0; i < awards.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            elem += "</div>";
            div.innerHTML += elem;
            elem = "<div class='row'>";
        }
        elem += "<div class=\"col-md-3 certificate\">";
        elem += "<a href=\"" + awards[i].url + "\" title=\"" + awards[i].title + "\"";
        elem += "data-by=\"" + awards[i].by + "\">";
        elem += "<img class=\"certificate-item\" src='/img/loader.svg' data-src=\"" + awards[i].url + "\">";
        elem += "<p class='certificate-text'>" + awards[i].title + "</p>";
        elem += "</a></div>";
        if (i === awards.length - 1)
            div.innerHTML += elem + "</div>";
    }
    div = document.getElementsByClassName('popup-gallery')[1];
    elem = "<div class='row'>";
    for (let i = 0; i < dgu.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            elem += "</div>";
            div.innerHTML += elem;
            elem = "<div class='row'>";
        }
        elem += "<div class=\"col-md-3 certificate\">";
        elem += "<a href=\"" + dgu[i].url + "\" title=\"" + dgu[i].title + "\"";
        elem += "data-by=\"" + dgu[i].by + "\">";
        elem += "<img class=\"certificate-item\" src='/img/loader.svg' data-src=\"" + dgu[i].url + "\">";
        elem += "<p class='certificate-text'>" + dgu[i].title + "</p>";
        elem += "</a></div>";
        if (i === dgu.length - 1)
            div.innerHTML += elem + "</div>";
    }
    new LazyLoad();
});