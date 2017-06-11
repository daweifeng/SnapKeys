const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (app, text) => {
    let section = text;
    if(text.length>150){
        section = text.substring(0,150);
    }
    section = section.replace(/\s/g, "%20");
    const listLink = `https://www.chegg.com/search/${section}/questions-and-answers?trackid=320802d1&strackid=2d555d86&event=button_submit#p=1`;
    console.log('List link', listLink);
    console.log('section', section);
    axios.get(listLink)
        .then((res) => {
            const $ = cheerio.load(res);
            const singleLink = $(".item-anchor:first").attr("href");
            console.log('single link', singleLink);
        })
        .catch((err) => console.log('List err:', err));

}