// https://cima4u.ws:2053/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d8%ac%d9%86%d8%a8%d9%8a-movies-english/netflix-movies/
var req = new XMLHttpRequest();
// req.open('GET', 'http://127.0.0.1:9000/https://cima4u.ws:2053/category/%d8%a7%d9%81%d9%84%d8%a7%d9%85-%d8%a7%d8%ac%d9%86%d8%a8%d9%8a-movies-english/netflix-movies/')
// req.responseType = 'document';
// req.onload = function() {
//     if (req.readyState == 4 && req.status == 200) {
//         var res = req.responseXML
//         let data = [...res.querySelector('[class="Cima4uBlocks"]').querySelectorAll('li')]
//             // console.log(data)
//         for (var i = 0, len = data.length; i < len; i++) {
//             console.log(data[i])
//             console.log(data[i].querySelector('[class="Thumb"]'))
//             console.log(data[i].querySelector('[class="Thumb"]').querySelector('[class="Half1"]').getAttribute("style").split("image:url(")[1].replace(');', ''))
//             console.log(data[i].firstElementChild.href)
//         }
//     }

// }
// req.send();
// var req = new XMLHttpRequest();
// req.open('GET', 'http://127.0.0.1:9000/https://cima4u.ws:2053/%d9%85%d8%b4%d8%a7%d9%87%d8%af%d8%a9-%d9%81%d9%8a%d9%84%d9%85-trese-after-dark-2021-%d9%85%d8%aa%d8%b1%d8%ac%d9%85/')
// req.responseType = 'document';
// req.onload = function() {
//     if (req.readyState == 4 && req.status == 200) {
//         var res = req.responseXML
//         console.log(res.querySelector('[class="SingleContentSide"]').querySelectorAll('a')[1].href)
//             // let data = [...res.querySelector('[class="Cima4uBlocks"]').querySelectorAll('li')]
//             // console.log(data)
//             // for (var i = 0, len = data.length; i < len; i++) {
//             //     console.log(data[i])
//             //     console.log(data[i].querySelector('[class="Thumb"]'))
//             //     console.log(data[i].querySelector('[class="Thumb"]').querySelector('[class="Half1"]').getAttribute("style").split("image:url(")[1].replace(');', ''))
//             //     console.log(data[i].firstElementChild.href)
//             // }
//     }

// }
// req.send();

// https://live.cima4u.ws:2053/Video/Trese+After+Dark+2021-45210.html
// https://live.cima4u.ws:2053/structure/server.php?id=2609379
var req = new XMLHttpRequest();
req.open('POST', 'http://127.0.0.1:9000/https://live.cima4u.ws:2053/structure/server.php?id=2609379')
req.responseType = 'document';
req.onload = function() {
    if (req.readyState == 4 && req.status == 200) {
        var res = req.responseXML
        console.log(res.querySelector('iframe').src)
            // console.log(res.split('eval')[1].split('|'))


    }
}
req.send();