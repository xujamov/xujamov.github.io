var awards = [
        {
            "title": "Zertifikat TestAS",
            "by": "Goethe-Institut Taschkent, october 26, 2013",
            "url": "/img/certificates/2013.10.26.jpg"
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
    new LazyLoad();
});