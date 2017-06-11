const axios = require('axios');
const cheerio = require('cheerio');
const questionLibrary = require('../test/questions');

module.exports = (app, text) => {
    let section = text;
    if(text.length>100){
        section = text.substring(0,100);
    }
    section = section.replace(/\s/g, "%20");
    const cheggLink = `https://www.chegg.com/search/${section}/questions-and-answers?trackid=320802d1&strackid=2d555d86&event=button_submit#p=1`;
    // console.log('List link', listLink);
    // console.log('section', section);
    // axios.get(listLink)
    //     .then((res) => {
    //         const $ = cheerio.load(res);
    //         const singleLink = $(".item-anchor:first").attr("href");
    //         console.log('single link', singleLink);
    //     })
    //     .catch((err) => console.log('List err:', err));
    
    
   const result = questionLibrary.questions.filter(x => x.quesiton === section);
   const { answer } = result[0];
   const { key } = result[0];
   let slugArry = []
   
    // return axios.get(`https://api.coursera.org/api/courses.v1/?q=search&query=${key}`)
    //     .then((res) => {
    //         // const courseraLinks = res.body.elements;
    //         // console.log('course:', res.data.elements[0].slug);
    //          slug = res.data.elements[0].slug;
    //          slugArry.push(slug);
    //         return slugArry;   
    //     })
    const courseLink = `https://api.coursera.org/api/courses.v1/?q=search&query=${key}`;
    
    return { courseLink, cheggLink } ;
}


