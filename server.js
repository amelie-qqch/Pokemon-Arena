
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('/dist/pokemon-arena'));
app.get('/*', function(req,res) {res.sendFile(path.join(__dirname + '/dist/pokemon-arena/index.html'));});
app.listen(process.env.PORT || 8080);



