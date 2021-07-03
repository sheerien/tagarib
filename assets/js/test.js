var req = new XMLHttpRequest();
req.open('GET', 'http://127.0.0.1:9000/https://shahed4u.onl/m5')
req.responseType = 'document';
req.onload = function() {
    if (req.readyState == 4 && req.status == 200) {
        var res = req.responseXML
        var data = Array.from(res.querySelectorAll('[class^="box-5x1"]'))
        for (var i = 0, len = data.length; i < len; i++) {
            console.log(data[i].querySelector('[class="content-box"]'))
            console.log('href: ', data[i].querySelector('[class="content-box"]').firstElementChild.href)
            console.log('img: ', data[i].querySelector('[class="content-box"]').firstElementChild.nextElementSibling.getAttribute('data-src'))
            console.log('views: ', data[i].querySelector('[class="content-box"]').querySelector('[class="views ti-eye"]').textContent + 'k')
        }
    }
}

req.send();