let myForm = document.myForm,
    input = myForm.inPut,
    btn = document.getElementById("submit"),
    video = document.querySelector('video')

// console.log(btn)
btn.addEventListener('click', getUrl);


const getDocumentHtml = (proxy, targetUrl) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        // console.log(`http://${proxy}/${targetUrl}`);
        req.open("GET", `http://${proxy}/${targetUrl}`)
        req.responseType = "document";
        req.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(req.responseXML)
            } else(
                reject(Error(this.statusText))
            )
        };
        req.send()
    });
}

const getText = (proxy, targetUrl) => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        // console.log(`http://${proxy}/${targetUrl}`);
        req.open("GET", `http://${proxy}/${targetUrl}`)
        req.responseType = "text";
        req.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(req.responseText)
            } else(
                reject(Error(this.statusText))
            )
        };
        req.send()
    });
}

getDocumentHtml('127.0.0.1:9000', 'https://shahed4u.onl/episode/%D9%85%D8%B3%D9%84%D8%B3%D9%84-%D9%82%D8%B7%D8%A7%D8%B9-%D8%A7%D9%84%D8%B7%D8%B1%D9%82-%D9%84%D9%86-%D9%8A%D8%AD%D9%83%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-6-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-34-%D9%88%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9')
    .then(res => {
        let myThirdUrl = res.querySelector('[class^="details"]').querySelector('[class="btns"]').firstElementChild.href
            // console.log(myThirdUrl)
        getDocumentHtml('127.0.0.1:9000', myThirdUrl)
            .then(res => {
                let myFrame = res.querySelector('iframe').src
                    // console.log(myFrame)
                getText('127.0.0.1:9000', myFrame)
                    .then(res => {
                        // console.log(res)
                        console.log(res.split('eval')[1].split('|'))
                            // console.log(res.split('eval')[1].split('|')[32])
                            // console.log(res.split('eval')[1].split('|')[90])
                        let s = res.split('eval')[1].split('|')[22]
                        let rz = res.split('eval')[1].split('|')[92]
                        let token = res.split('eval')[1].split('|')[93]
                        let r = `https://${s}.amzn-cdn.net/${token}/v.mp4`
                        console.log(rz, r)

                    })
            })
    })
    .catch(err => console.log(err))

function getUrl(e) {
    e.preventDefault();
    // 'https://shahed4u.onl/episode/%D9%85%D8%B3%D9%84%D8%B3%D9%84-%D9%82%D8%B7%D8%A7%D8%B9-%D8%A7%D9%84%D8%B7%D8%B1%D9%82-%D9%84%D9%86-%D9%8A%D8%AD%D9%83%D9%85%D9%88%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-6-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-34-%D9%88%D8%A7%D9%84%D8%A7%D8%AE%D9%8A%D8%B1%D8%A9-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9'
    getDocumentHtml('127.0.0.1:9000', input.value)
        .then(res => {
            let myThirdUrl = res.querySelector('[class^="details"]').querySelector('[class="btns"]').firstElementChild.href
                // console.log(myThirdUrl)
            getDocumentHtml('127.0.0.1:9000', myThirdUrl)
                .then(res => {
                    let myFrame = res.querySelector('iframe').src
                        // console.log(myFrame)
                    getText('127.0.0.1:9000', myFrame)
                        .then(res => {
                            // console.log(res)
                            // console.log(res.split('eval')[1].split('|'))
                            // console.log(res.split('eval')[1].split('|')[32])
                            // console.log(res.split('eval')[1].split('|')[90])
                            let s = res.split('eval')[1].split('|')[22]
                            let rz = res.split('eval')[1].split('|')[92]
                            let token = res.split('eval')[1].split('|')[93]
                            let r = `https://${s}.amzn-cdn.net/${token}/v.mp4`
                            console.log(rz, r)
                            console.log(r)
                            video.setAttribute('src', r)

                        })
                })
        })
        .catch(err => console.log(err))

}