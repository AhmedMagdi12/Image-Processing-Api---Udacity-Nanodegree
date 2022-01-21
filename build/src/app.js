"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import {promises as fsPromises} from 'fs';
var index_1 = __importDefault(require("../routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', index_1.default);
app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', function (req, res) {
    res.send('connected');
    // res.render('image');
});
app.listen(port, function () {
    console.log('Server is listening on port ' + port);
});
// const imgName = req.query.imageName;
// const height = req.query.height;
// const width = req.query.width; 
// // const image = fsPromises.readFile('../assets/full/'+imgName,'utf8');
// sharp("assets/full/" + imgName)
// .resize(width, height)
// .toFile("assets/thumb/")
// .toFormat('jpeg')
// .toBuffer()
// .then(function(outputBuffer) {
//   // outputBuffer contains JPEG image data
//   // no wider and no higher than 200 pixels
//   // and no larger than the input image
// });
// res.send('<h1> Server is Listening </h1>');
