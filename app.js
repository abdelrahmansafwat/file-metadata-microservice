const express = require("express");
const app = express();
const formidable = require('express-formidable');

app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(formidable({
    encoding: 'utf-8',
    uploadDir: __dirname,
    multiples: true,
    keepExtensions: true
}));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', (req, res) => {
    var data = req.files.upfile;
    res.json({
      name: data.name,
      type: data.type,
      size: data.size
    });
});

app.listen(process.env.PORT | 3000);