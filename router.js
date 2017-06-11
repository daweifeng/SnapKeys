const multer = require('multer');
const loadCollection = require('./utils.js');
const Loki = require('lokijs');
const ImgToText = require('./controller/imgToText');
const Scrap = require('./controller/scrap');

const UPLOAD_PATH = 'controller/uploads';
const DB_NAME = 'db.json';
const COLLECTION_NAME = 'images';
const upload = multer({ dest: `${ UPLOAD_PATH }` });
const db = new Loki(`${ UPLOAD_PATH }/${ DB_NAME }`, { persistenceMethod: 'fs' });

module.exports = (app) => {
    app.post('/upload', upload.single('file'), (req, res, next) => {

         loadCollection(COLLECTION_NAME, db).then((col) => {
                const data = col.insert(req.file);
                db.saveDatabase();
                // res.send({ id: data.$loki, fileName: data.filename, originalName: data.originalname });
                ImgToText(app, data.filename)
                    .then((text) => {
                        Scrap(app, text).then((links) =>{
                            const response = {
                                links,
                                text
                            };
                            res.send(response);
                        });
                    })
                    .catch((err)=>{
                        res.status(400).send(err);
                    })
         })
         .catch((err) => {
            console.log('error msg', err);
         });

    });

    app.get('/', (req, res, next) => {
        res.send('Welcome to SnapKeys API!')
    })
}