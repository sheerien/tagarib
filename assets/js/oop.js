class ScrapeMovie {
    /**
     * 
     * @param {String} proxy - proxy url
     * @param {String} target - site url
     */
    constructor(proxy, target) {
        this.proxy = proxy;
        this.target = target;
    }



    /**
     * 
     * @param {String} proxy 
     * @param {String} target 
     * @returns Promises
     */
    getDocumentHtml(proxy, target) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            // console.log(`http://${proxy}/${targetUrl}`);
            req.open("GET", `http://${proxy}/${target}`)
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

    /**
     * 
     * @param {String} proxy 
     * @param {String} target 
     * @returns Promises
     */
    getText(proxy, target) {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            // console.log(`http://${proxy}/${target}`);
            req.open("GET", `http://${proxy}/${target}`)
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

    selectByCss(selector) {
        return document.querySelector(selector)
    }

    /**
     * 
     * @param {object} document 
     * @param {String} selector 
     * @returns String
     */

    select(document, selector) {
        return document.querySelector(selector)
    }

    /**
     * 
     * @param {object} document 
     * @param {String} selector 
     * @returns Array
     */

    selectAll(document, selector) {
        return [...document.querySelectorAll(selector)]
    }

}

const scrape = new ScrapeMovie('127.0.0.1:9000', 'https://shahed4u.onl/m5')
scrape.getDocumentHtml('127.0.0.1:9000', 'https://shahed4u.onl/m5')
    .then(res => {
        let mySecondUrl = scrape.select(res, '[class="content-box"]').firstElementChild.href
            // console.log(mySecondUrl)
        scrape.getDocumentHtml('127.0.0.1:9000', mySecondUrl)
            .then(res => {
                let myThirdUrl = scrape.select(res, '[class^="details"]').querySelector('[class="btns"]').firstElementChild.href
                    // console.log(myThirdUrl)
                scrape.getDocumentHtml('127.0.0.1:9000', myThirdUrl)
                    .then(res => {
                        let myFrame = scrape.select(res, 'iframe').src
                        console.log(myFrame)
                        scrape.getText('127.0.0.1:9000', myFrame)
                            .then(res => {
                                console.log(res)
                                console.log(res.split('src'))
                                console.log(res.split('eval')[1].split('|'))
                                    // console.log(res.split('eval')[1].split('|')[22])
                                    // console.log(res.split('eval')[1].split('|')[93])
                                let s = res.split('eval')[1].split('|')[22]
                                let rz = res.split('eval')[1].split('|')[91]
                                let token = res.split('eval')[1].split('|')[92]
                                let r = `https://${s}.amzn-cdn.net/${token}/v.mp4`
                                console.log('resolution:', rz, r)

                            })
                    })
            })

    }).catch(err => console.log(err));