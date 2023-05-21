const express = require("express");

const app = express();

app.use(function(req, res) {
    res.end("hello world");   // uygulamaya herhangi bir sorgu geldiginde ekrana `hello world` yazdirir
});                           // degisiklik yaptigimizda uygulamayi durdurup teklrar calistirmamiz gerek 

app.listen(3000, function() {
    console.log("listening on port 3000");
});



// npm i express@4.18.1
// npm i express    (son version)
// npm init --yes   (bilgileri tek tek sormasin diye)
// use() methodu ile gelen request ve response`lari ele alabiliyoruz