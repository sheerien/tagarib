import { ScrapeMovies } from './cinemaOOP.js'

const scrape = new ScrapeMovies('127.0.0.1:9000', 'https://github.com/sheerien/scrapeJs/blob/main/src/js/scrape_es6_oop.js');

// console.log(scrape)
let mainUrl = 'https://github.com/sheerien/scrapeJs/blob/main/src/js/scrape_es6_oop.js'

scrape.getDocumentHtml("GET", mainUrl).then(res => {
    console.log(res.querySelector("div"))
}).catch(err => {
    console.log(err)
})