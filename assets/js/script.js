// https://shahed4u.onl/m5
// 127.0.0.1:9000

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


getDocumentHtml('127.0.0.1:9000', 'https://shahed4u.onl/m5')
    .then(res => {
        let mySecondUrl = res.querySelector('[class="content-box"]').firstElementChild.href
            // console.log(mySecondUrl)
        getDocumentHtml('127.0.0.1:9000', mySecondUrl)
            .then(res => {
                let myThirdUrl = res.querySelector('[class^="details"]').querySelector('[class="btns"]').firstElementChild.href
                    // console.log(myThirdUrl)
                getDocumentHtml('127.0.0.1:9000', myThirdUrl)
                    .then(res => {
                        let myFrame = res.querySelector('iframe').src
                            // console.log(myFrame)
                        getText('127.0.0.1:9000', myFrame)
                            .then(res => {
                                console.log(res)
                                console.log(res.split('src'))
                                    // console.log(res.split('eval')[1].split('|')[22])
                                    // console.log(res.split('eval')[1].split('|')[93])
                                    // let s = res.split('eval')[1].split('|')[22]
                                    // let rz = res.split('eval')[1].split('|')[92]
                                    // let token = res.split('eval')[1].split('|')[93]
                                    // let r = `https://${s}.amzn-cdn.net/${token}/v.mp4`
                                    // console.log(rz, r)

                            })
                    })
            })

    }).catch(err => console.log(err));