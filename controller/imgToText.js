const axios = require('axios');
const gcloud = require('google-cloud')({
    keyFilename: './snapanswer-dd841b1edba2.json',
    projectId: 'snapanswer-170323'
});

module.exports = (app, name) => {

    var vision = gcloud.vision();  
    const fileName = `${__dirname}/uploads/${name}`;
    console.log('dir name', fileName);

    return new Promise ((resolve, reject) => {
        vision.detectText(fileName, (err, detected) => {
            // console.log(detected);
            const text = detected[0];
            if(!err){
                resolve(text);
            }
            else{
                reject('err', err);
            }
        })

    })
}