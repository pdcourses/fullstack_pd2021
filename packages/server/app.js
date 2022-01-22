const express = require('express');
const router = require('./router');
const path = require('path');
const app = express();
app.use(express.json());
app.use('/api', router);
// добавление чтения статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
